/* ============================================================
   APP.JS — global chrome, cart, helpers (vanilla JS)
   ============================================================ */

// ---- Business facts (single source of truth) ----
const BIZ = {
  name: "Massive Auto Parts & Car Sales",
  tagline: "Quality Parts and Cars @ Unbeatable Prices!",
  address: "158 Main Street, Pineapple, Ocho Rios Bay, St. Ann, Jamaica",
  gps: { lat: 18.4119, lng: -77.09812 },
  phone1: "(876) 298-6413",
  phone2: "(876) 974-7197",
  // WhatsApp-enabled line (confirmed): (876) 298-6413
  whatsapp: "18762986413",
  careersEmail: "bowy10@yahoo.com", // ⚠️ recommend branded address
  hours: "Mon–Sat 8:30am–6:00pm · Sun 9:00am–3:00pm",
  instagram: "https://instagram.com/massiveautopartsandcarsale",
  facebook: "https://facebook.com/",
};
const WA_LINK = (msg) => `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(msg || "Hi Massive Auto — I have a question.")}`;
const TEL = (p) => `tel:+1${p.replace(/[^0-9]/g, "")}`;

// ---- Icons ----
const IC = {
  cart: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>',
  phone: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z"/></svg>',
  whatsapp: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M.057 24l1.687-6.163a11.867 11.867 0 0 1-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.817 11.817 0 0 1 8.413 3.488 11.824 11.824 0 0 1 3.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 0 1-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884a9.86 9.86 0 0 0 1.512 5.26l-.999 3.648 3.736-.979 .24 .146zm5.443-7.732c-.121-.058-.711-.349-.822-.389-.111-.04-.192-.058-.273.062-.081.12-.312.387-.383.466-.07.08-.141.09-.262.03-.121-.06-.512-.188-.975-.601-.36-.321-.604-.717-.675-.838-.07-.121-.007-.187.053-.247.054-.054.121-.141.182-.211.061-.071.081-.121.121-.202.04-.08.02-.151-.01-.211-.03-.06-.272-.656-.373-.898-.099-.236-.198-.204-.272-.207l-.232-.004a.446.446 0 0 0-.323.151c-.111.121-.424.414-.424 1.01 0 .595.434 1.171.495 1.252.06.08.852 1.301 2.064 1.825.288.124.513.198.689.253.289.092.553.079.762.048.232-.035.711-.291.811-.572.1-.281.1-.522.07-.572-.029-.05-.109-.08-.23-.14z"/></svg>',
  clock: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>',
  pin: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>',
  search: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>',
  menu: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>',
  check: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>',
  mail: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>',
  instagram: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/></svg>',
  facebook: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>',
  // category / decorative
  engine: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M6 9h2V7h4v2h3l2 2h3v6h-2v2h-4v-2H8l-2-2H4v-4l2-2z"/></svg>',
  body: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M3 13l2-5a3 3 0 0 1 3-2h8a3 3 0 0 1 3 2l2 5v4h-2a2 2 0 1 1-4 0H9a2 2 0 1 1-4 0H3v-4z"/><path d="M5 13h14"/></svg>',
  suspension: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M12 3v3M12 18v3"/><path d="M9 6h6M9 18h6"/><path d="M10 6c-2 1.5 4 3-2 4.5s4 3-2 4.5"/></svg>',
  electrical: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"><polygon points="13 2 4 14 11 14 10 22 20 9 13 9 13 2"/></svg>',
  brakes: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="3.5"/><path d="M12 3v3M12 18v3M3 12h3M18 12h3"/></svg>',
  accessories: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M14.7 6.3a4 4 0 0 0-5.4 5.4l-6 6 3 3 6-6a4 4 0 0 0 5.4-5.4l-2.3 2.3-2.5-.5-.5-2.5 2.3-2.3z"/></svg>',
  car: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M5 11l1.5-4.5A2 2 0 0 1 8.4 5h7.2a2 2 0 0 1 1.9 1.5L19 11M5 11h14v5H5zM5 16v2M19 16v2"/><circle cx="7.5" cy="13.5" r="1"/><circle cx="16.5" cy="13.5" r="1"/></svg>',
  truck: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M1 3h15v13H1zM16 8h4l3 3v5h-7zM5.5 19a2 2 0 1 0 0-.01M18.5 19a2 2 0 1 0 0-.01"/></svg>',
  tag: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M20 13l-8 8-9-9V3h9z"/><circle cx="7.5" cy="7.5" r="1.2"/></svg>',
  globe: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a14 14 0 0 1 0 18 14 14 0 0 1 0-18z"/></svg>',
  users: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/></svg>',
};

const CAT_ICON = {
  "Engines": IC.engine, "Body Parts": IC.body, "Suspension": IC.suspension,
  "Electrical": IC.electrical, "Brakes": IC.brakes, "Accessories": IC.accessories,
};

// ---- Helpers ----
function fmtJMD(n) {
  if (n == null || n === 0) return "Enquire for price";
  return "$" + Number(n).toLocaleString("en-JM") + " JMD";
}
function placeholder(label, iconKey, extraClass) {
  const icon = (CAT_ICON[iconKey] || IC[iconKey] || IC.tag);
  return `<div class="imgph ${extraClass || ''}"><div class="ph-icon">${icon}</div><span class="ph-label">Sample · ${label}</span></div>`;
}
function thumbMedia(item, iconKey) {
  if (item && item.image) return `<img class="thumb-img" src="${item.image}" alt="${item.name||''}" loading="lazy">`;
  return placeholder((item && item.category) || iconKey || "part", (item && item.category) || iconKey);
}
function qs(name) { return new URLSearchParams(location.search).get(name); }

// ============================================================
//  CART (localStorage)
// ============================================================
const CART_KEY = "massive_cart_v1";
const Cart = {
  read() { try { return JSON.parse(localStorage.getItem(CART_KEY)) || []; } catch (e) { return []; } },
  write(items) { localStorage.setItem(CART_KEY, JSON.stringify(items)); document.dispatchEvent(new CustomEvent("cart:change")); },
  count() { return this.read().reduce((s, i) => s + i.qty, 0); },
  subtotal() { return this.read().reduce((s, i) => s + i.price * i.qty, 0); },
  add(partId, qty = 1) {
    const part = (window.PARTS || []).find(p => p.id === partId);
    if (!part) return;
    const items = this.read();
    const ex = items.find(i => i.id === partId);
    if (ex) ex.qty += qty; else items.push({ id: part.id, name: part.name, price: part.price, category: part.category, image: part.image || null, qty });
    this.write(items);
    openCartDrawer();
    toast(`Added to cart: ${part.name}`);
  },
  setQty(partId, qty) {
    const items = this.read();
    const it = items.find(i => i.id === partId);
    if (!it) return;
    it.qty = Math.max(1, qty);
    this.write(items);
  },
  remove(partId) { this.write(this.read().filter(i => i.id !== partId)); },
  clear() { this.write([]); }
};

// ============================================================
//  GLOBAL CHROME INJECTION
// ============================================================
const NAV = [
  { label: "Home", href: "index.html", page: "home" },
  { label: "Car Sales", href: "cars.html", page: "cars" },
  { label: "Auto Parts", href: "parts.html", page: "parts" },
  { label: "About", href: "about.html", page: "about" },
  { label: "Careers", href: "careers.html", page: "careers" },
  { label: "Contact", href: "contact.html", page: "contact" },
];

function buildHeader(current) {
  const navLinks = NAV.map(n => `<a href="${n.href}" class="${n.page === current ? 'active' : ''}">${n.label}</a>`).join("");
  const drawerLinks = NAV.map(n => `<a href="${n.href}" class="${n.page === current ? 'active' : ''}">${n.label}</a>`).join("");
  return `
  <div class="utilbar">
    <div class="container">
      <div class="util-left">
        <a class="u-item" href="${TEL(BIZ.phone1)}">${IC.phone}<span>${BIZ.phone1}</span></a>
        <a class="u-item" href="${TEL(BIZ.phone2)}" style="opacity:.85">${BIZ.phone2}</a>
      </div>
      <div class="util-right">
        <span class="u-item">${IC.clock}<span>${BIZ.hours}</span></span>
        <a class="u-item" href="${WA_LINK()}" target="_blank" rel="noopener">${IC.pin}<span>Ocho Rios, St. Ann</span></a>
      </div>
    </div>
  </div>
  <header class="site-header">
    <div class="container">
      <a class="brand" href="index.html" aria-label="Massive Auto Parts & Car Sales home">
        <img class="brand-logo" src="assets/img/massive-logo.png" alt="Massive Auto Parts & Car Sales">
      </a>
      <nav class="main-nav">${navLinks}</nav>
      <div class="header-actions">
        <a class="btn btn-red btn-sm find-part" href="contact.html#parts-request">Find a Part</a>
        <button class="cart-btn" id="cartToggle" aria-label="Open cart">
          ${IC.cart}<span class="cart-count empty" id="cartCount">0</span>
        </button>
        <button class="hamburger" id="hamToggle" aria-label="Open menu">${IC.menu}</button>
      </div>
    </div>
  </header>
  <div class="mobile-drawer" id="mobileDrawer">
    <div class="scrim" data-close-drawer></div>
    <div class="panel">
      <button class="drawer-close" data-close-drawer aria-label="Close menu">&times;</button>
      ${drawerLinks}
      <a class="btn btn-red" href="contact.html#parts-request" style="margin-top:14px">Find a Part</a>
    </div>
  </div>`;
}

function buildFooter() {
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${BIZ.gps.lat},${BIZ.gps.lng}`;
  return `
  <footer class="site-footer">
    <div class="container">
      <div class="footer-grid">
        <div class="foot-brand">
          <img class="foot-logo" src="assets/img/massive-logo.png" alt="Massive Auto Parts & Car Sales">
          <p style="font-size:13.5px;max-width:300px;">Ocho Rios' parts &amp; cars under one roof. Authorized dealer in used Japanese engines &amp; body parts — we buy &amp; source Japanese imports.</p>
          <div class="socials">
            <a href="${BIZ.instagram}" target="_blank" rel="noopener" aria-label="Instagram">${IC.instagram}</a>
            <a href="${BIZ.facebook}" target="_blank" rel="noopener" aria-label="Facebook">${IC.facebook}</a>
            <a href="${WA_LINK()}" target="_blank" rel="noopener" aria-label="WhatsApp">${IC.whatsapp}</a>
          </div>
        </div>
        <div>
          <h5>Shop</h5>
          <div class="foot-links">
            <a href="parts.html">Auto Parts</a>
            <a href="cars.html">Car Sales</a>
            <a href="contact.html#parts-request">Find a Part</a>
            <a href="cart.html">Cart</a>
          </div>
        </div>
        <div>
          <h5>Company</h5>
          <div class="foot-links">
            <a href="about.html">About Us</a>
            <a href="careers.html">Careers</a>
            <a href="contact.html">Contact</a>
            <a href="${mapsUrl}" target="_blank" rel="noopener">Find Us</a>
          </div>
        </div>
        <div>
          <h5>Visit / Contact</h5>
          <div class="foot-contact">
            <p class="nap"><a href="${mapsUrl}" target="_blank" rel="noopener">${BIZ.address}</a></p>
            <p><a href="${TEL(BIZ.phone1)}">${BIZ.phone1}</a> · <a href="${TEL(BIZ.phone2)}">${BIZ.phone2}</a></p>
            <p>${BIZ.hours}</p>
            <p><a href="mailto:${BIZ.careersEmail}">${BIZ.careersEmail}</a></p>
          </div>
        </div>
      </div>
      <div class="foot-bottom">
        <span>© ${new Date().getFullYear()} ${BIZ.name}. Quality parts &amp; cars at unbeatable prices.</span>
        <span>Reference build — sample data &amp; pricing for demonstration only.</span>
      </div>
    </div>
  </footer>`;
}

function buildWhatsAppFloat() {
  return `<a class="wa-float" href="${WA_LINK()}" target="_blank" rel="noopener" aria-label="Chat on WhatsApp"><span class="pulse"></span>${IC.whatsapp}</a>`;
}

function buildCartDrawer() {
  return `
  <div class="cart-drawer" id="cartDrawer">
    <div class="scrim" data-close-cart></div>
    <div class="panel">
      <div class="cart-head">
        <h3>Your Cart</h3>
        <button data-close-cart aria-label="Close cart">&times;</button>
      </div>
      <div class="cart-items" id="cartItems"></div>
      <div class="cart-foot" id="cartFoot"></div>
    </div>
  </div>`;
}

// ---- Toast ----
let toastTimer;
function toast(msg) {
  let t = document.getElementById("toast");
  if (!t) {
    t = document.createElement("div");
    t.id = "toast";
    t.style.cssText = "position:fixed;left:50%;bottom:26px;transform:translateX(-50%) translateY(20px);background:#0D0D0D;color:#fff;padding:14px 22px;border-radius:4px;font-family:var(--font-display);text-transform:uppercase;letter-spacing:.04em;font-size:14px;z-index:300;box-shadow:0 10px 30px rgba(0,0,0,.35);opacity:0;transition:all .25s;border-left:3px solid var(--massive-gold);max-width:90vw;";
    document.body.appendChild(t);
  }
  t.innerHTML = `${IC.check} ${msg}`.replace("<svg", '<svg style="width:16px;height:16px;display:inline;vertical-align:-3px;color:var(--massive-gold)"');
  requestAnimationFrame(() => { t.style.opacity = "1"; t.style.transform = "translateX(-50%) translateY(0)"; });
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => { t.style.opacity = "0"; t.style.transform = "translateX(-50%) translateY(20px)"; }, 2600);
}

// ---- Cart drawer render ----
function renderCartDrawer() {
  const items = Cart.read();
  const wrap = document.getElementById("cartItems");
  const foot = document.getElementById("cartFoot");
  if (!wrap || !foot) return;
  if (!items.length) {
    wrap.innerHTML = `<div class="cart-empty">${IC.cart.replace('<svg','<svg style="width:48px;height:48px;margin:0 auto 14px;color:#ccc;display:block"')}<p>Your cart is empty.</p><a class="btn btn-red btn-sm" href="parts.html" style="margin-top:10px">Shop Parts</a></div>`;
    foot.innerHTML = "";
    return;
  }
  wrap.innerHTML = items.map(i => `
    <div class="cart-line">
      ${thumbMedia(i)}
      <div>
        <div class="cl-name">${i.name}</div>
        <div class="cl-meta">${fmtJMD(i.price)}</div>
        <div class="cl-qty">
          <button onclick="Cart.setQty('${i.id}', ${i.qty - 1})" aria-label="Decrease">−</button>
          <span>${i.qty}</span>
          <button onclick="Cart.setQty('${i.id}', ${i.qty + 1})" aria-label="Increase">+</button>
        </div>
      </div>
      <div style="text-align:right">
        <div class="cl-price">${fmtJMD(i.price * i.qty)}</div>
        <button class="cl-remove" onclick="Cart.remove('${i.id}')">Remove</button>
      </div>
    </div>`).join("");
  foot.innerHTML = `
    <div class="cart-subtotal"><span>Subtotal</span><span class="amt">${fmtJMD(Cart.subtotal())}</span></div>
    <p class="cart-note">Island-wide delivery or local pickup at our Ocho Rios store. Shipping &amp; taxes calculated at checkout.</p>
    <a class="btn btn-red btn-block" href="cart.html">View Cart</a>
    <a class="btn btn-gold btn-block" href="checkout.html" style="margin-top:8px">Checkout</a>`;
}

function updateCartCount() {
  const el = document.getElementById("cartCount");
  if (!el) return;
  const c = Cart.count();
  el.textContent = c;
  el.classList.toggle("empty", c === 0);
}

function openCartDrawer() { document.getElementById("cartDrawer")?.classList.add("open"); renderCartDrawer(); }
function closeCartDrawer() { document.getElementById("cartDrawer")?.classList.remove("open"); }

// ============================================================
//  INIT
// ============================================================
function initChrome() {
  const current = document.body.dataset.page || "";
  // favicon
  if (!document.querySelector('link[rel="icon"]')) {
    const fav = document.createElement("link");
    fav.rel = "icon"; fav.href = "assets/img/massive-logo.png";
    document.head.appendChild(fav);
  }
  const headSlot = document.getElementById("site-header-slot");
  if (headSlot) headSlot.innerHTML = buildHeader(current);
  const footSlot = document.getElementById("site-footer-slot");
  if (footSlot) footSlot.innerHTML = buildFooter();

  document.body.insertAdjacentHTML("beforeend", buildCartDrawer());
  document.body.insertAdjacentHTML("beforeend", buildWhatsAppFloat());

  // events
  document.getElementById("cartToggle")?.addEventListener("click", openCartDrawer);
  document.querySelectorAll("[data-close-cart]").forEach(el => el.addEventListener("click", closeCartDrawer));
  const ham = document.getElementById("hamToggle");
  const drawer = document.getElementById("mobileDrawer");
  ham?.addEventListener("click", () => drawer.classList.add("open"));
  document.querySelectorAll("[data-close-drawer]").forEach(el => el.addEventListener("click", () => drawer.classList.remove("open")));

  document.addEventListener("cart:change", () => { updateCartCount(); renderCartDrawer(); });
  updateCartCount();
  renderCartDrawer();

  document.addEventListener("keydown", e => { if (e.key === "Escape") { closeCartDrawer(); drawer?.classList.remove("open"); } });
}

document.addEventListener("DOMContentLoaded", initChrome);

// ---- Generic Formspree-style form handler (demo: no real endpoint) ----
function wireForm(form) {
  form.addEventListener("submit", e => {
    e.preventDefault();
    // honeypot
    const hp = form.querySelector(".hp input");
    if (hp && hp.value) return;
    const msg = form.querySelector(".form-msg");
    // DEMO ONLY — real endpoint set at go-live (Formspree). See README.
    if (msg) { msg.className = "form-msg ok"; msg.textContent = "Thanks! Your message was captured (demo). At go-live this sends via Formspree to the business."; }
    form.querySelectorAll("input:not([type=radio]):not([type=checkbox]), textarea").forEach(i => { if (!i.classList.contains("keep")) i.value = ""; });
    form.scrollIntoView ? null : null;
  });
}
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("form[data-demo-form]").forEach(wireForm);
});
