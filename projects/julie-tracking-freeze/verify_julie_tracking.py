#!/usr/bin/env python3
"""Julie masterclass tracking guard. Compares LIVE state to golden.json.

Usage:
  python3 verify_julie_tracking.py            # live site files + relay   (bash WITHOUT api_credentials)
  python3 verify_julie_tracking.py --meta     # Meta campaign/ad sets/ads/CCs/pixel (bash WITH api_credentials=["meta_ads"])
  python3 verify_julie_tracking.py --vercel   # relay production deployment id       (bash WITH api_credentials=["vercel"])
  python3 verify_julie_tracking.py --repo DIR # a local checkout / branch BEFORE merging (no credentials)

Exit code 0 = every row PASS. Anything else = DO NOT MERGE / DO NOT DEPLOY.
"""
import hashlib, json, os, re, subprocess, sys, urllib.request

HERE = os.path.dirname(os.path.abspath(__file__))
G = json.load(open(os.path.join(HERE, 'golden.json')))
rows = []

def row(area, check, ok, detail=''):
    rows.append((area, check, 'PASS' if ok else 'FAIL', detail))

def sha1(b): return hashlib.sha1(b).hexdigest()

def http(url, method='GET', headers=None, body=None):
    req = urllib.request.Request(url, method=method, data=body, headers=headers or {})
    try:
        with urllib.request.urlopen(req, timeout=20) as r:
            return r.status, dict(r.headers), r.read()
    except urllib.error.HTTPError as e:
        return e.code, dict(e.headers), e.read()
    except Exception as e:
        return 0, {}, str(e).encode()

# ---------- SITE ----------
def check_site_files(get_bytes, label):
    for f, want in G['site']['protected_files_sha1'].items():
        b = get_bytes(f)
        got = sha1(b) if b is not None else 'missing'
        row('site', f'{label} {f} byte-identical to golden', got == want, got[:12])
    idx = get_bytes('index.html') or b''
    mt = get_bytes('assets/julie-meta-tracking.js') or b''
    c = G['site']['constants']
    row('site', 'RELAY_URL constant', c['RELAY_URL'].encode() in mt, c['RELAY_URL'])
    row('site', 'PIXEL_ID constant', c['PIXEL_ID'].encode() in mt and c['PIXEL_ID'].encode() in idx, c['PIXEL_ID'])
    row('site', 'release marker present', G['site']['release_marker'].encode() in mt, G['site']['release_marker'])

def live_site():
    base = G['site']['base_url']
    def get(f):
        s, _, b = http(base + f)
        return b if s == 200 else None
    check_site_files(get, 'LIVE')

def repo_site(d):
    def get(f):
        p = os.path.join(d, f)
        return open(p, 'rb').read() if os.path.exists(p) else None
    check_site_files(get, 'REPO')

# ---------- RELAY ----------
def relay():
    ep = G['relay']['endpoint']
    s, h, _ = http(ep, 'OPTIONS', {'Origin': 'https://www.longevitylifeacademy.com',
                                   'Access-Control-Request-Method': 'POST'})
    row('relay', 'OPTIONS preflight answers', s in (200, 204), f'HTTP {s}')
    hl = {k.lower(): v for k, v in h.items()}
    want = G['relay']['release_header']['x-lla-release']
    row('relay', 'x-lla-release header unchanged', hl.get('x-lla-release') == want, hl.get('x-lla-release', 'absent'))
    row('relay', 'CORS allows production origin', 'longevitylifeacademy.com' in hl.get('access-control-allow-origin', ''), hl.get('access-control-allow-origin', 'absent'))

# ---------- VERCEL (run WITH api_credentials=["vercel"]) ----------
def vercel():
    tok = os.environ.get('VERCEL_TOKEN', '')
    b = subprocess.run(['curl', '-s', '-H', 'Authorization: Bearer ' + tok,
                        'https://api.vercel.com/v9/projects/' + G['relay']['vercel_project']], capture_output=True, timeout=40).stdout
    try: t = json.loads(b).get('targets', {}).get('production', {})
    except Exception: t = {}
    row('relay', 'Vercel production deployment is the golden build', t.get('id') == G['relay']['production_deployment'], str(t.get('id')))

# ---------- META ----------
def meta():
    tok = os.environ.get('META_ACCESS_TOKEN')
    V = 'https://graph.facebook.com/v25.0/'
    H = {'Authorization': 'Bearer ' + tok} if tok else {}   # sandbox proxy injects auth when run with api_credentials=["meta_ads"]
    def gj(path):   # curl: it follows the sandbox credential proxy; urllib does not
        cmd = ['curl', '-sg', V + path] + (['-H', 'Authorization: Bearer ' + tok] if tok else [])
        b = subprocess.run(cmd, capture_output=True, timeout=40).stdout
        try: return json.JSONDecoder().raw_decode(b.decode())[0]
        except Exception: return {'error': b[:200]}
    m = G['meta']
    inv = m['adset_invariants']
    for aid, name in m['live_adsets'].items():
        a = gj(f'{aid}?fields=name,status,optimization_goal,billing_event,bid_strategy,promoted_object,attribution_spec,targeting')
        row('meta', f'{name} ({aid}) ACTIVE', a.get('status') == 'ACTIVE', a.get('status'))
        row('meta', f'{name} optimization = OFFSITE_CONVERSIONS', a.get('optimization_goal') == inv['optimization_goal'], a.get('optimization_goal'))
        po = a.get('promoted_object', {})
        row('meta', f'{name} promoted object = pixel {m["pixel_id"]} PURCHASE',
            po.get('pixel_id') == m['pixel_id'] and po.get('custom_event_type') == 'PURCHASE', json.dumps(po)[:80])
        row('meta', f'{name} attribution setting unchanged', a.get('attribution_spec') == m['attribution_spec'][aid], json.dumps(a.get('attribution_spec')))
        exp_bid = inv['bid_strategy'].get(aid) if isinstance(inv['bid_strategy'], dict) else inv['bid_strategy']
        row('meta', f'{name} bid strategy unchanged', a.get('bid_strategy') == exp_bid, a.get('bid_strategy'))
        row('meta', f'{name} geo = US only', a.get('targeting', {}).get('geo_locations', {}).get('countries') == ['US'], json.dumps(a.get('targeting', {}).get('geo_locations'))[:60])
    ads = gj(f'{m["campaign_id"]}/ads?fields=id,name,adset_id,effective_status,creative{{id,url_tags,object_story_spec,asset_feed_spec}}&limit=100').get('data', [])
    live_active = [x for x in ads if x.get('effective_status') == 'ACTIVE' and x.get('adset_id') in m['live_adsets']]
    row('meta', 'no new ads appeared in live ad sets beyond golden 10',
        set(x['id'] for x in live_active) <= set(m['active_ads']), f'{len(live_active)} active: ' + ','.join(sorted(set(x["id"] for x in live_active) - set(m["active_ads"]))) )
    for x in live_active:
        cr = x.get('creative', {}); oss = cr.get('object_story_spec', {}); links = set()
        for k in ('link_data', 'video_data'):
            if k in oss: links.add(oss[k].get('link') or oss[k].get('call_to_action', {}).get('value', {}).get('link'))
        for u in cr.get('asset_feed_spec', {}).get('link_urls', []): links.add(u.get('website_url'))
        row('meta', f'ad {x["id"]} link = golden URL', links == {m['ad_link']}, ','.join(str(l) for l in links))
        want_tags = m['url_tags_template'].replace('{ADGROUP}', m['adgroup_by_adset'][x['adset_id']])
        row('meta', f'ad {x["id"]} url_tags (utm_term={{{{adset.id}}}}) unchanged', cr.get('url_tags') == want_tags, (cr.get('url_tags') or 'absent')[:60])
    for cid, ev in m['custom_conversions'].items():
        c = gj(f'{cid}?fields=name,is_archived,rule,custom_event_type')
        r = json.dumps(c.get('rule', ''))
        row('meta', f'custom conversion {ev} ({cid}) live + rule intact',
            not c.get('is_archived') and m['cc_rule_url'] in r and m['cc_rule_product_line'] in r, ('archived' if c.get('is_archived') else 'active'))
    p = gj(f'{m["pixel_id"]}?fields=last_fired_time,first_party_cookie_status,enable_automatic_matching')
    row('meta', 'pixel first-party cookies + automatic matching on',
        p.get('first_party_cookie_status') == 'first_party_cookie_enabled' and p.get('enable_automatic_matching') is True, f'last fired {p.get("last_fired_time")}')
    for t in m['test_adsets_must_stay_paused']:
        a = gj(f'{t}?fields=status')
        row('meta', f'test ad set {t} paused', a.get('status') == 'PAUSED', a.get('status'))

args = sys.argv[1:]
if '--repo' in args:
    repo_site(args[args.index('--repo') + 1])
elif '--meta' in args:
    meta()                      # run in a bash call WITH api_credentials=["meta_ads"]
elif '--vercel' in args:
    vercel()                    # run in a bash call WITH api_credentials=["vercel"]
else:
    live_site(); relay()        # run in a bash call WITHOUT credentials (proxy blocks other hosts otherwise)

w = max(len(r[1]) for r in rows)
fails = 0
for area, check, res, det in rows:
    fails += res == 'FAIL'
    print(f'{res:4} | {area:5} | {check:<{w}} | {det}')
print(f'\n{len(rows) - fails}/{len(rows)} PASS' + ('' if not fails else f'  ->  {fails} FAIL: STOP. Do not merge/deploy. Roll back per README.'))
sys.exit(1 if fails else 0)
