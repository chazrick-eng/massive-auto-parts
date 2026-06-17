/* ============================================================
   RENDER.JS — card + grid renderers for parts & vehicles
   Depends on data.js + app.js (IC, CAT_ICON, placeholder, fmtJMD)
   ============================================================ */

function cardMedia(item, iconKey, label) {
  if (item.image) return `<img src="${item.image}" alt="${(item.name||item.title||'')}" loading="lazy">`;
  return placeholder(label || item.category || iconKey, iconKey);
}

function partCard(p) {
  const badge = p.condition === "New"
    ? `<span class="badge badge-new">New</span>`
    : `<span class="badge badge-used">Used JP</span>`;
  const stockClass = p.stock === "In stock" ? "stock-in" : p.stock === "Order" ? "stock-order" : "stock-out";
  const fit = (p.compatibility || [])[0] || "";
  return `
  <article class="product-card">
    <a class="media" href="part-detail.html?id=${p.id}">
      ${badge}
      <span class="fav-stock">${p.stock}</span>
      ${cardMedia(p, p.category)}
    </a>
    <div class="body">
      <a href="part-detail.html?id=${p.id}"><h3 class="ptitle">${p.name}</h3></a>
      <div class="fitment">${fit}${(p.compatibility||[]).length>1?` +${p.compatibility.length-1} more`:''}</div>
      <div class="price-row">
        <span class="price">${fmtJMD(p.price)}</span>
        <span class="pmeta">${p.sku}</span>
      </div>
    </div>
    <div class="card-actions">
      <button class="btn btn-red btn-sm" onclick="Cart.add('${p.id}')">${IC.cart.replace('<svg','<svg style="width:16px;height:16px"')} Add</button>
      <a class="btn btn-ghost btn-sm" href="part-detail.html?id=${p.id}">Details</a>
    </div>
  </article>`;
}

function vehicleCard(v) {
  const statusBadge = v.status === "Reserved"
    ? `<span class="badge badge-reserved">Reserved</span>`
    : v.status === "Sold"
      ? `<span class="badge badge-sold">Sold</span>`
      : `<span class="badge badge-used">${v.condition}</span>`;
  return `
  <article class="product-card vehicle-card">
    <a class="media" href="car-detail.html?id=${v.id}">
      ${statusBadge}
      <span class="fav-stock">${v.year}</span>
      ${cardMedia(v, "car")}
    </a>
    <div class="body">
      <a href="car-detail.html?id=${v.id}"><h3 class="ptitle">${v.year} ${v.title}</h3></a>
      <div class="specline">
        <span>${IC.car.replace('<svg','<svg style="width:14px;height:14px"')} ${v.bodyType}</span>
        <span>${v.mileage}</span>
        <span>${v.transmission.split(' ')[0]}</span>
        <span>${v.fuel}</span>
      </div>
      <div class="price-row">
        <span class="price">${fmtJMD(v.price)}</span>
      </div>
    </div>
    <div class="card-actions">
      <a class="btn btn-dark btn-sm" href="car-detail.html?id=${v.id}">View</a>
      <a class="btn btn-gold btn-sm" href="car-detail.html?id=${v.id}#enquire">Enquire</a>
    </div>
  </article>`;
}

function renderInto(sel, html) { const el = document.querySelector(sel); if (el) el.innerHTML = html; }
