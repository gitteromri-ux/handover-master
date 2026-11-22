# Airwallex integration — French Atelier (Culture Capsules + courses)
Compiled 2026-11-12 from the live code, the live CRM/Airwallex responses captured today, and the repos. Every item is labelled VERIFIED (read from code or a live response) or DOCUMENTED (from a written spec/handover).

## 1. Who does what (VERIFIED, from code)
| Step | Who | Endpoint / object |
|---|---|---|
| Create lead + unpaid order | Browser → relay `fa-leads-proxy.vercel.app/api/lead/ecomm` → eTeacher CRM `/Students/AddNewECommerceLeadAndOrder` | returns `StudentId`, `OrderId`, `PreferredCourseId`, `MainAbroadCourseId`, `AbroadCourseId`, `CountryId` |
| Get what to charge + the Airwallex intent | Browser → relay `/api/checkout/details` → CRM `/Students/GetECommerceFirstPaymentDetails` | returns `PaymentID`, `CoursePrice{…}`, `AmountToCharge`, `NumOfPayments`, `PaymentPerMonth`, `OrderCoursePrice`, **`Airwallex { paymentIntentId, clientSecret, customerId }`** and `AirwallexOptions { customer_id, payment_consent … }` |
| Mint the Airwallex PaymentIntent + Customer | **eTeacher CRM** (server side, inside GetECommerceFirstPaymentDetails). Not our code. The intent is created on Airwallex account **ETEACHER EU LIMITED** (card descriptor), `merchant_order_id` = CRM `PaymentID`, `customer_id` = Airwallex customer whose `merchant_customer_id` = CRM `StudentId` | live example today: intent `int_nlpdc5hz8ho3f5hmts3`, amount 189 USD, `merchant_order_id` 64771713, `customer_id cus_nlpd5dq5gho3f5h3o8c` (merchant_customer_id 11697716), metadata `FlowType: NewCardPayment` |
| Render card form, take the card, run 3DS | **Airwallex Drop-In Element** in the browser (`https://checkout.airwallex.com/assets/elements.bundle.min.js`), `awx.init({env:'prod'})`, `awx.createElement('dropIn', {...})` | card data never touches our relay (PCI stays with Airwallex) |
| Report the payment to the CRM | Browser `dropIn.on('success')` → relay `/api/checkout/payments/crm` → CRM `/Students/SetECommercePayment` | payload `{StudentId, OrderId, PaymentId, PaymentMethod:'CreditCard', AmountCharged, ChargeType:'RegistrationFee', IsApproved:true, TransactionId:<intent id>}` |
| Charge installments 2+ | **eTeacher CRM**, using the saved card consent on the Airwallex customer | needs the consent created at checkout (section 3) |

Relay source: handover-master `projects/french-atelier-golden-relay/api/ecomm.js` (route table lines 40–42). Production relay forwards to the eTeacher gateway set in env `FA_PROD_GATEWAY`; staging goes to the eTeacher staging CRM with Airwallex **demo** env.

## 2. Drop-In configuration as live today (VERIFIED, enroll-checkout.html lines 467–515)
```js
awx.init({ env: CFG.env==='staging' ? 'demo' : 'prod', origin: location.origin, locale: 'en', fonts: [Inter 400/600] });
var faNum = Number(p.numberOfPayments) || 1;
var faCustomerId = details.Airwallex.customerId || details.AirwallexOptions.customer_id || null;
var faRecurring = faNum > 1 && !!faCustomerId;           // installments → recurring
dropIn = awx.createElement('dropIn', {
  intent_id: v.intentId, client_secret: v.clientSecret, currency: 'USD',
  mode: faRecurring ? 'recurring' : 'payment',
  customer_id: faRecurring ? faCustomerId : undefined,
  recurringOptions: faRecurring ? { next_triggered_by:'merchant', currency:'USD', merchant_trigger_reason:'unscheduled' } : undefined,
  payment_consent:  faRecurring ? { next_triggered_by:'merchant', merchant_trigger_reason:'unscheduled' } : undefined,
  country_code: staged.lead.countryIso || 'US',
  methods: ['card'],                                       // French Atelier: card only in Drop-In; PayPal is a separate button
  showPayButton: true, appearance: {...brand colours...}
});
dropIn.mount(document.getElementById('awx-dropin'));
dropIn.on('success', evt => { trackPurchase(); FA.reportPayment({...TransactionId: evt.detail.intent.id}); });
dropIn.on('error',   evt => status('Payment did not complete normally: ' + evt.detail.error.message));
```
Recurring block added by commit `e196bc0`, 9 Nov 2026 22:12 Israel ("Golden Recurring", ordered by Omri). Before that: `mode:'payment'` always (one-off; installments 2+ were NOT backed by a card consent).

Live check today (iPhone, production order 8079072, 3-payment plan, not charged):
`FA_RECURRING_STATE = {installments:3, customer:true, recurring:true}`; Airwallex calls made by the Drop-In: `GET /pa/payment_consents?customer_id=cus_…` → 200 (empty, new customer), `GET /pa/payment_intents/int_…` → 200 (customer_id matches), `GET /pa/config/payment_method_types` → card `oneoff` + card `recurring` both active. Form rendered with "Save my card for future payments". No Airwallex error.

## 3. What the CRM prescribes for recurring (DOCUMENTED + VERIFIED)
- CRM `AirwallexOptions` on GetECommerceFirstPaymentDetails prescribe `payment_consent { next_triggered_by:'merchant', merchant_trigger_reason:'unscheduled' }` (read from the CRM response during the Longevity golden-recurring work; identical contract now used on French Atelier).
- Longevity reference implementation: `lla-course-checkout/assets/eteacher-ecomm.js` + `checkout.html` (mode `recurring` for installments, `customer_id`, same consent options). Spec: `lla-course-checkout/worker/CLOUDFLARE-INTEGRATION-SPEC.md` ("POST /api/checkout/details … airwallex.dropIn { intent_id, client_secret, currency, mode:'recurring', recurringOptions { next_triggered_by:'merchant' } }").
- Public Airwallex references used: https://www.airwallex.com/docs/js/payments/dropin/ (Drop-In options, `mode`, `customer_id`, `recurringOptions`, appearance) and https://www.airwallex.com/docs/payments/payment-methods/global/apple-pay/web-checkout (not used on French Atelier — wallets off).

## 4. Environments and accounts (VERIFIED)
| | Production | Staging |
|---|---|---|
| CRM | eTeacher production via gateway `FA_PROD_GATEWAY` (relay env) | eTeacher staging (`FA_CRM_STG_*` relay env) |
| Airwallex env | `prod`, account "ETEACHER EU LIMITED" (descriptor on intent) | `demo` ("eTeacher Demo PA"), test card 4035 5010 0000 0008 |
| Site switch | default | `?env=staging` on the site |
| Relay | https://fa-leads-proxy.vercel.app (Vercel project prj_byAoWWUN5aXdGDrGRb7PJ25hINlI) — routes `/api/lead/ecomm`, `/api/checkout/details`, `/api/checkout/payments/crm`, `/staging/...` | same relay, `/staging/...` prefix |

No Airwallex API key is held by us anywhere (checked: french-atelier repo, relay source, Vercel env names in handover, Cloudflare Worker). Airwallex is only ever talked to by (a) the eTeacher CRM server side and (b) the Drop-In in the buyer's browser with the per-order `client_secret`.

## 5. Where the money logic lives (DOCUMENTED, handover 2026-10-20 §7)
- The CRM sets the price when the order is created; the Airwallex intent amount = CRM `AmountToCharge`. The site refuses to mount the card form if the intent amount ≠ the page price (PAYMENT_PLAN_MISMATCH → reserve/lead path).
- Accepted order fields (echoed by the CRM): lead fields + `MainAbroadCourseId, AbroadCourseId, PreferredCourseId, ProductId(25), LanguageId, IsTrial, IsAcademic, FirstPayment, NumberOfPayments, LeftToPay, DiscountPercent, DiscountReason, ASyncDuration, CheckOutUrl`.

## 6. Incident of 9–12 Nov 2026 (VERIFIED)
Commit `83f5dc0` (9 Nov 21:49 Israel) added `@media (max-width:900px){ .fa-pay-main{display:contents} … }` to `css/fa-pay-et.css`; on phones the Drop-In container `#awx-dropin` became 0 px wide (iframe width 0). Card entry impossible on mobile from 9 Nov 21:49 until the fix. Fix: branch `fix/mobile-payment-form-width`, commit `28e2c11` (block removed, cache-bust `fa-pay-et.css?v=20261112-fix1`).

## 7. Files to read, in order
1. `french-atelier/enroll-checkout.html` (payment step, Drop-In, success → CRM report)
2. `french-atelier/js/fa-checkout.js`, `js/fa-checkout-config.js` (order creation, plans, env)
3. `handover-master/projects/french-atelier-golden-relay/api/ecomm.js` (relay → CRM)
4. `handover-master/projects/french-atelier-ecommerce-handover-2026-10-20.md` §7 (CRM behaviour, orders)
5. `lla-course-checkout/worker/CLOUDFLARE-INTEGRATION-SPEC.md`, `assets/eteacher-ecomm.js` (Longevity reference)
6. `business-exit-handover/source-documents/ehud-original/attachments/leads-api-documentation.md` (eTeacher Leads API — the only eTeacher API document we hold; there is no eTeacher e-commerce/Airwallex API document in any repo, Drive, or mail we can reach)
