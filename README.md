# Massive Auto Parts & Car Sales — Static Reference Build

A bold, conversion-focused **static HTML reference site** for Massive Auto Parts & Car Sales (Ocho Rios, St. Ann, Jamaica). It demonstrates the full commerce structure — parts catalog → cart → checkout (client-side), plus vehicle enquiry/reserve, careers, and contact flows.

> **This is a reference/visual build.** All products, prices, and stock are clearly-marked **samples**. The cart is client-side (`localStorage`) only. Live payment is wired at go-live (see below).

---

## File structure
```
/index.html        Home
/cars.html         Car Sales (vehicle grid)
/car-detail.html   Vehicle detail (?id=)
/parts.html        Auto Parts catalog (?cat=, ?q=)
/part-detail.html  Part detail (?id=)
/cart.html         Cart
/checkout.html     Checkout + order confirmation
/about.html        About
/careers.html      Careers / Now Hiring
/contact.html      Contact + parts request
/assets/css/styles.css   Token-based stylesheet (brand colours/type)
/assets/js/data.js       Sample PARTS + VEHICLES data (EDIT THIS)
/assets/js/app.js        Global chrome, cart, business facts (BIZ)
/assets/js/render.js     Card/grid renderers
```
Header, footer, WhatsApp button, and cart drawer are injected by `app.js` into every page (`#site-header-slot` / `#site-footer-slot`) so you edit them once.

---

## How to swap the sample data
Open **`assets/js/data.js`**. Replace the `window.PARTS` and `window.VEHICLES` arrays with real inventory. Field shapes:

- **Part:** `id, name, category, condition ("New"|"Used Japanese"), price, compatibility[], images (count), description, stock ("In stock"|"Order"|"Out"), sku, featured`
- **Vehicle:** `id, title, make, model, year, mileage, transmission, fuel, engine, colour, bodyType, condition ("New"|"Used"), price, images (count), description, status ("Available"|"Reserved"|"Sold"), featured`

Prices display in JMD. `featured: true` items surface on the Home page.

### Images
Real Massive photos are wired in: **9 vehicles** (`car-*.jpg`), the storefront shots (`storefront-*.png`, used in the Home hero + About), and promo flyers (`promo-*.jpg`, used in the Home "Current Specials" strip and as the Rim & Tire / Car Seats product images). The car-sale screenshots were auto-cropped free of their Instagram chrome. To add more, drop files in `assets/img/` and set the `image` field on the relevant `PART`/`VEHICLE` in `data.js` (cards/detail/cart fall back to a styled placeholder when `image` is absent). Keep them compressed; galleries already lazy-load.

> **Demo part photos:** the auto-parts catalog images (`part-*.jpg`) are temporary placeholders pulled from free Creative-Commons sources (Openverse) purely to populate the demo — they are NOT Massive's actual stock. Replace every one with real product photos before launch.

> Note: the **Honda Grace/Vezel, Toyota Vellfire/Esquire** carry the business's own advertised prices; the **Subaru XV** shows “Enquire for price” (set `price` in `data.js` once known). The **Mercedes A-Class, Subaru Impreza, Infiniti Q70, Toyota Corolla** still use sample prices/mileage — confirm with the owner. Set a vehicle's `price` to `null` to show “Enquire for price”.

---

## Set the WhatsApp number & business facts
All business facts live in one object — **`BIZ` at the top of `assets/js/app.js`**:
```js
const BIZ = {
  whatsapp: "18762986413",   // WhatsApp-enabled line (confirmed): (876) 298-6413
  phone1: "(876) 298-6413",
  phone2: "(876) 974-7197",
  careersEmail: "bowy10@yahoo.com", // ⚠️ recommend a branded address
  ...
};
```
The float button and every "WhatsApp" link build from `BIZ.whatsapp` (format: country code + number, no symbols).

---

## Wire up the forms (Formspree)
All forms are tagged `data-demo-form` and currently show an inline success message **without sending**. To go live:
1. Create a Formspree form (one endpoint per intent, or one endpoint using the hidden `intent` field already present: `parts-request`, `vehicle-enquiry`, `careers`, `general`).
2. In each form, set `action="https://formspree.io/f/XXXX"` and `method="POST"`, then remove the `data-demo-form` attribute (or update `wireForm` in `app.js` to POST).
3. A honeypot field (`.hp`) is already included for spam protection.

---

## Plug in the payment gateway (go-live)
Static HTML cannot take live card payments by itself. Two distinct flows:

- **Parts (small-ticket):** full cart + online payment. At go-live, connect the checkout to a **hosted checkout** — evaluate **WiPay, Fygaro, First Atlantic Commerce (FAC)**, or a bank merchant gateway (NCB/Scotiabank). **Cash on pickup** and **bank transfer** work day one (already in the checkout UI). Confirm fees/availability with each provider.
- **Vehicles (high-ticket):** **enquiry / reserve only** — no card checkout. Optional **phase 2**: "reserve with a deposit" can route a small fixed deposit through the parts gateway; balance handled in person.

**Where the integration slots in:** `checkout.html` → the form's `submit` handler currently renders a demo confirmation. Replace that with (a) a redirect to your hosted-checkout button/URL for the `card` method, or (b) rebuild the store on **WooCommerce/Shopify** using this design as the visual reference.

---

## Confirm before launch
- [x] WhatsApp-enabled number confirmed: (876) 298-6413 (`BIZ.whatsapp = "18762986413"`)
- [ ] Does the client control `massiveautoparts.com` / `massiveusedparts.com`, or secure a new domain (e.g. `massiveautojamaica.com`)?
- [ ] Branded careers/contact email to replace the yahoo address?
- [ ] Go-live host/platform: hosted-checkout buttons vs WooCommerce/Shopify rebuild?
- [ ] Clean vector logo (the header uses a styled wordmark placeholder)?
- [ ] Real starter inventory (6–10 parts + 3–4 vehicles) to replace samples?

---

## Tech notes
- Static HTML5 + custom-property CSS + vanilla JS. No build step.
- Cart persists in `localStorage` (`massive_cart_v1`).
- Schema.org `AutoPartsStore` / `AutoDealer` / `LocalBusiness` JSON-LD on Home; replicate per page as needed.
- Mobile-first; tested 360px → 1440px.
- Fonts: Oswald (display) + Inter (body) via Google Fonts.
