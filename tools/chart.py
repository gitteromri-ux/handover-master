#!/usr/bin/env python3
"""'chart' command for the LLA Meta ad account (act_1459085242361281).

Usage: python3 tools/chart.py [today|yesterday|YYYY-MM-DD]
Prints, per active ad set: daily budget, spend, share of budget, visits (landing page
views), carts, checkouts, purchases (+ value) for the sales sets, and leads for the
Leads sets. Account day = Israel time. Numbers are Ads Manager ad-attributed only.
Needs the Meta Ads proxy in META_ADS_PROXY_URL (or HTTPS_PROXY). Read-only.
"""
import json, os, subprocess, sys, urllib.parse, datetime

G = "https://graph.facebook.com/v21.0"
ACT = "act_1459085242361281"
IL = datetime.timezone(datetime.timedelta(hours=2))
A = "offsite_conversion.fb_pixel_add_to_cart"
I = "offsite_conversion.fb_pixel_initiate_checkout"
P = "offsite_conversion.fb_pixel_purchase"
L = "landing_page_view"
# Two sets share the name #108814, so labels are fixed by ID.
LABEL = {
    "52669048300628": "ecomm Adset 5 #108811",
    "52668268711228": "Adset 02 original #108814",
    "52666232368428": "ecomm Adset 4 #108810",
    "52668330870828": "ecomm_Adset_04 #108816",
    "52673824399628": "Hot set (02 copy) #108814",
}


def get(path, **params):
    env = dict(os.environ)
    proxy = env.get("META_ADS_PROXY_URL") or env.get("HTTPS_PROXY")
    if proxy:
        env["HTTPS_PROXY"] = proxy
    url = f"{G}/{path}?" + urllib.parse.urlencode(params)
    rows = []
    while url:
        out = subprocess.run(["curl", "-s", "-m", "60", url], capture_output=True, text=True, env=env).stdout
        d = json.loads(out)
        if "error" in d:
            sys.exit(f"Meta error: {d['error'].get('message')}")
        rows += d.get("data", [])
        url = d.get("paging", {}).get("next")
    return rows


def act(r, k, field="actions"):
    for a in r.get(field, []) or []:
        if a["action_type"] == k:
            return float(a["value"])
    return 0.0


def main():
    arg = sys.argv[1] if len(sys.argv) > 1 else "today"
    now = datetime.datetime.now(IL)
    day = {"today": now.date(), "yesterday": now.date() - datetime.timedelta(days=1)}.get(arg) or datetime.date.fromisoformat(arg)
    sets = get(f"{ACT}/adsets", fields="id,name,daily_budget,campaign{objective}",
               filtering=json.dumps([{"field": "effective_status", "operator": "IN", "value": ["ACTIVE"]}]), limit=200)
    ins = {r["adset_id"]: r for r in get(f"{ACT}/insights", level="adset",
           fields="adset_id,spend,actions,action_values",
           time_range=json.dumps({"since": str(day), "until": str(day)}), limit=500)}
    print(f"Chart for {day} (account day, Israel time), read at {now:%H:%M} Israel time\n")
    sales = [s for s in sets if s["campaign"]["objective"] == "OUTCOME_SALES"]
    leads = [s for s in sets if s["campaign"]["objective"] != "OUTCOME_SALES"]
    print("| Ad set | ID | Budget per day | Spent | Share of budget | Visits | Carts | Checkouts | Purchases |")
    print("|---|---|---|---|---|---|---|---|---|")
    T = [0.0] * 7
    for s in sorted(sales, key=lambda s: -int(s["daily_budget"])):
        r = ins.get(s["id"], {})
        b = int(s["daily_budget"]) / 100
        sp = float(r.get("spend", 0))
        v = [b, sp, act(r, L), act(r, A), act(r, I), act(r, P), act(r, P, "action_values")]
        T = [x + y for x, y in zip(T, v)]
        pur = f"{v[5]:.0f}" + (f" (${v[6]:.0f})" if v[5] else "")
        print(f"| {LABEL.get(s['id'], s['name'])} | …{s['id'][-6:]} | ${b:,.2f} | ${sp:,.2f} | {100*sp/b:.0f}% | {v[2]:.0f} | {v[3]:.0f} | {v[4]:.0f} | {pur} |")
    pur = f"{T[5]:.0f}" + (f" (${T[6]:.0f})" if T[5] else "")
    print(f"| Total sales | | ${T[0]:,.2f} | ${T[1]:,.2f} | {100*T[1]/T[0]:.0f}% | {T[2]:.0f} | {T[3]:.0f} | {T[4]:.0f} | {pur} |")
    print("\n| Leads ad set | ID | Budget per day | Spent | Share of budget | Leads |")
    print("|---|---|---|---|---|---|")
    tb = ts = tl = 0.0
    for s in sorted(leads, key=lambda s: -int(s["daily_budget"])):
        r = ins.get(s["id"], {})
        b = int(s["daily_budget"]) / 100
        sp = float(r.get("spend", 0))
        ld = act(r, "lead")
        tb += b; ts += sp; tl += ld
        print(f"| {s['name']} | …{s['id'][-6:]} | ${b:,.2f} | ${sp:,.2f} | {100*sp/b:.0f}% | {ld:.0f} |")
    print(f"| Total leads | | ${tb:,.2f} | ${ts:,.2f} | {100*ts/tb:.0f}% | {tl:.0f} |")


if __name__ == "__main__":
    main()
