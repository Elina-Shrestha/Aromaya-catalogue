/* =====================================================
   AROMAYA — SETTINGS  (edit these first)
   ===================================================== */
const CONFIG = {
  // WhatsApp number in international format, digits only (no + or spaces)
  whatsapp: "9779810225214",
  phoneDisplay: "+977 9810225214",

  // TODO: replace these with your real profile links
  facebook:  "https://www.facebook.com/aromaya",
  tiktok:    "https://www.tiktok.com/@aromaya",
  instagram: "https://www.instagram.com/aromayaa"
};

/* =====================================================
   PRODUCTS  (edit names, prices, descriptions, photos)
   Candles & combos use priceBlend / pricePure (numbers, in Rs.)
   Raw materials use a single price (text).
   ===================================================== */
const candles = [
  {
    id: "heart-bubble",
    name: "Heart Bubble Candle",
    category: "Heart Collection",
    priceBlend: 350,
    pricePure: 490,
    description: "A playful handmade heart-bubble candle that adds a soft, cozy touch to your space or gifting moment.",
    details: ["Handmade in Nepal", "Available in soy-paraffin blend or pure soy wax", "Choose your own colour & scent"],
    images: ["image-ecom/heart-bubble.PNG"]
  },
  {
    id: "bear",
    name: "Bear Candle",
    category: "Animal Collection",
    priceBlend: 200,
    pricePure: 270,
    description: "An adorable handmade bear candle — cute for gifting, décor and cozy corners.",
    details: ["Handmade in Nepal", "Available in soy-paraffin blend or pure soy wax", "Choose your own colour & scent"],
    images: ["image-ecom/bear.PNG", "image-ecom/bear1.PNG", "image-ecom/bear2.PNG"]
  },
  {
    id: "peony",
    name: "Peony Candle",
    category: "Flower Collection",
    priceBlend: 165,
    pricePure: 215,
    description: "A flower-inspired candle with a delicate shape that works beautifully for gifting and décor.",
    details: ["Handmade in Nepal", "Available in soy-paraffin blend or pure soy wax", "Choose your own colour & scent"],
    images: ["image-ecom/peony.PNG", "image-ecom/peony1.PNG", "image-ecom/peony2.PNG", "image-ecom/peony3.PNG"]
  },
  {
    id: "rose",
    name: "Rose Candle",
    category: "Flower Collection",
    priceBlend: 110,
    pricePure: 140,
    description: "A pretty handmade rose candle, perfect as a small gift or a little touch of romance.",
    details: ["Handmade in Nepal", "Available in soy-paraffin blend or pure soy wax", "Choose your own colour & scent"],
    images: ["image-ecom/rose.PNG"]
  },
  {
    id: "heart",
    name: "Heart Candle",
    category: "Heart Collection",
    priceBlend: 110,
    pricePure: 140,
    description: "A sweet handmade heart candle made with love — lovely for gifting and special occasions.",
    details: ["Handmade in Nepal", "Available in soy-paraffin blend or pure soy wax", "Choose your own colour & scent"],
    images: ["image-ecom/heart.PNG"]
  },
  {
    id: "tulip",
    name: "Tulip Candle",
    category: "Flower Collection",
    priceBlend: 135,
    pricePure: 175,
    description: "A handmade tulip candle with a soft, fresh look for gifting and décor.",
    details: ["Handmade in Nepal", "Available in soy-paraffin blend or pure soy wax", "Choose your own colour & scent"],
    images: ["image-ecom/tulip.PNG"]
  },
  {
    id: "spiral-taper-plain",
    name: "Spiral Taper Candle (Without Fragrance)",
    category: "Taper Candles",
    priceBlend: 115,
    pricePure: 170,
    noScent: true,
    description: "An elegant spiral taper candle, unscented — beautiful for dinner tables and décor.",
    details: ["Handmade in Nepal", "Available in soy-paraffin blend or pure soy wax", "Choose your own colour", "Unscented"],
    images: ["image-ecom/spiral-taper-unscented.jpg"]
  },
  {
    id: "spiral-taper-scented",
    name: "Spiral Taper Candle (With Fragrance)",
    category: "Taper Candles",
    priceBlend: 160,
    pricePure: 215,
    description: "An elegant spiral taper candle with your choice of fragrance.",
    details: ["Handmade in Nepal", "Available in soy-paraffin blend or pure soy wax", "Choose your own colour & scent"],
    images: ["image-ecom/spiral-taper.PNG"]
  },
  {
    id: "tealight-white",
    name: "Basic White Tealights (9 pcs)",
    category: "Tealights",
    priceBlend: 130,
    pricePure: 200,
    noScent: true,
    description: "A pack of 9 classic white tealights for everyday use, décor and diyas.",
    details: ["Pack of 9 tealights", "Handmade in Nepal", "Available in soy-paraffin blend or pure soy wax", "Classic white"],
    images: ["image-ecom/basic-white-tealight.PNG"]
  },
  {
    id: "tealight-flower-scented",
    name: "Flower Tealights With Fragrance (9 pcs)",
    category: "Tealights",
    priceBlend: 250,
    pricePure: 345,
    description: "A pack of 9 flower-shaped tealights with your choice of fragrance.",
    details: ["Pack of 9 tealights", "Handmade in Nepal", "Available in soy-paraffin blend or pure soy wax", "Choose your own colour & scent"],
    images: ["image-ecom/flower-tea1.PNG","image-ecom/flower-tea3.PNG"]
  },
  {
    id: "tealight-color-scented",
    name: "Colourful Tealights With Fragrance (9 pcs)",
    category: "Tealights",
    priceBlend: 250,
    pricePure: 345,
    description: "A pack of 9 colourful tealights with your choice of fragrance.",
    details: ["Pack of 9 tealights", "Handmade in Nepal", "Available in soy-paraffin blend or pure soy wax", "Choose your own colour & scent"],
    images: ["image-ecom/colorful-tea1.PNG", "image-ecom/colorful-tea3.PNG"]
  },
  {
    id: "tealight-flower-plain",
    name: "Flower Tealights Without Fragrance (9 pcs)",
    category: "Tealights",
    priceBlend: 210,
    pricePure: 290,
    noScent: true,
    description: "A pack of 9 flower-shaped tealights, unscented.",
    details: ["Pack of 9 tealights", "Handmade in Nepal", "Available in soy-paraffin blend or pure soy wax", "Choose your own colour", "Unscented"],
    images: ["image-ecom/flower-tea2.PNG"]
  },
  {
    id: "tealight-color-plain",
    name: "Colourful Tealights Without Fragrance (9 pcs)",
    category: "Tealights",
    priceBlend: 210,
    pricePure: 290,
    noScent: true,
    description: "A pack of 9 colourful tealights, unscented.",
    details: ["Pack of 9 tealights", "Handmade in Nepal", "Available in soy-paraffin blend or pure soy wax", "Choose your own colour", "Unscented"],
    images: ["image-ecom/colorful-tea2.PNG"]
  },
  {
    id: "custom",
    name: "Custom Candle",
    category: "Custom Orders",
    priceBlend: null,
    pricePure: null,
    description: "Looking for a particular shape, colour, scent, quantity or gifting idea? Tell us and we'll make it for you.",
    details: ["Colour options available", "Scent options available", "Bulk / gifting orders", "Contact us for availability"],
    images: []
  }
];

const combos = [
  {
    id: "combo-peony-rose-tealight",
    name: "Peony, Rose & Tealight Combo",
    category: "Combo Pack",
    priceBlend: 250,
    pricePure: 325,
    description: "A gift-ready set of 3 handmade candles: Peony, Rose and Tealight.",
    details: ["Peony candle", "Rose candle", "Tealight (pack)", "Handmade in Nepal", "Choose your own colour & scent"],
    images: ["image-ecom/peony-rose-tea.PNG","image-ecom/peony-rose-tea1.PNG"]
  },
  {
    id: "combo-peony-tulip-tealight",
    name: "Peony, Tulip & Tealight Combo",
    category: "Combo Pack",
    priceBlend: 270,
    pricePure: 360,
    description: "A gift-ready set of 3 handmade candles: Peony, Tulip and Tealight.",
    details: ["Peony candle", "Tulip candle", "Tealight (pack)", "Handmade in Nepal", "Choose your own colour & scent"],
    images: ["image-ecom/peony-rose-tulip.PNG"]
  },
  {
    id: "combo-bear-rose-tealight",
    name: "Bear, Rose & Tealight Combo",
    category: "Combo Pack",
    priceBlend: 290,
    pricePure: 370,
    description: "A gift-ready set of 3 handmade candles: Bear, Rose and Tealight.",
    details: ["Bear candle", "Rose candle", "Tealight (pack)", "Handmade in Nepal", "Choose your own colour & scent"],
    images: ["image-ecom/bear-rose-tea.PNG"]
  },
  {
    id: "combo-peony-rose-heart",
    name: "Peony, Rose & Heart Combo",
    category: "Combo Pack",
    priceBlend: 265,
    pricePure: 365,
    description: "A gift-ready set of 3 handmade candles: Peony, Rose and Heart.",
    details: ["Peony candle", "Rose candle", "Heart candle", "Handmade in Nepal", "Choose your own colour & scent"],
    images: ["image-ecom/peony-rose-heart.PNG"]
  },
  {
    id: "combo-bear-peony-tulip",
    name: "Bear, Peony & Tulip Combo",
    category: "Combo Pack",
    priceBlend: 375,
    pricePure: 520,
    description: "A gift-ready set of 3 handmade candles: Bear, Peony and Tulip.",
    details: ["Bear candle", "Peony candle", "Tulip candle", "Handmade in Nepal", "Choose your own colour & scent"],
    images: ["image-ecom/bear-rose-tea.PNG"]
  },
  {
    id: "combo-bear-rose-peony-heart",
    name: "Bear, Rose, Peony & Heart Combo",
    category: "Combo Pack",
    priceBlend: 400,
    pricePure: 565,
    description: "A gift-ready set of 4 handmade candles: Bear, Rose, Peony and Heart.",
    details: ["Bear candle", "Rose candle", "Peony candle", "Heart candle", "Handmade in Nepal", "Choose your own colour & scent"],
    images: ["image-ecom/bear-peony-rose-heart.PNG"]
  }
];

/* Raw materials.
   - Simple item:      price: "Rs. 25 (per pc)"
   - Item with sizes / types: use variants: [{ label, price }]
       price can be a number (Rs.) or null (= "Message for price")
   - note: optional line shown under the price (good for "more sizes available")  */
const materials = [
  {
    id: "mat-tealight-container",
    name: "Tealight Container (with wick)",
    category: "Containers",
    price: "Rs. 6 (per pc)",
    description: "Ready-to-pour tealight container with a wick already fitted — just add your wax.",
    details: ["Wick included", "Sold per piece"],
    images: ["image-ecom/tealight.png"]
  },

  {
    id: "mat-sized-item",
    name: "Self Adhesive Clear Plastic Seal Pouch",
    category: "Packaging",
    variants: [
      { label: "5 × 5 inch", price: 3 },
      { label: "Your required size", price: null }   // shows "Message for price"
    ],
    unit: "per pc",
    note: "More sizes available — message us on WhatsApp for size & price.",
    description: "Describe the item here.",
    details: ["Transparent plastic bag perfect for packaging with adhesive on one side for self seal"],
    images: ["image-ecom/adhesive-packaging.jpg"]
  },

  {
    id: "mat-wax",
    name: "Candle Wax",
    category: "Wax",
    variants: [
      { label: "Pure soy wax", price: 800 },
      { label: "Soy-paraffin blend", price: 500 },
      { label: "Paraffin wax", price: 450 }
    ],
    unit: "per kg",   // TODO: change if your wax price is not per kg
    description: "Wax for making your own candles. Choose from pure soy, soy-paraffin blend or paraffin.",
    details: ["Pure soy wax — Rs. 800", "Soy-paraffin blend — Rs. 500", "Paraffin wax — Rs. 450"],
    images: ["image-ecom/pure-soy-wax-mold.jpeg", "image-ecom/soy-paraffin-blend-wax.jpeg","image-ecom/paraffin-wax.jpg"]
  },
  {
    id: "mat-diyo",
    name: "Designer Diyo",
    category: "Diyo",
    price: "Rs. 25 (per pc)",
    description: "Not your basic clay diyo — these have very fine detailing and carved-style designs. Beautiful for Tihar, Diwali, gifting and décor, or as a candle container.",
    details: ["Fine detailed, carved-style design", "Perfect for Tihar / Diwali", "Sold per piece"],
    images: ["image-ecom/diyo1.jpeg", "image-ecom/diyo2.jpeg", "image-ecom/diyo3.jpeg"]
  },
  {
    id: "mat-scale-compact",
    name: "Electronic Compact Scale",
    category: "Weighing Scales",
    price: "Rs. 600 (per pc)",
    description: "Compact and portable electronic scale with a tare (zero) function.",
    details: [
      "Max capacity: 10 kg (10000 g / 1 g accuracy)",
      "Size (L × W × H): 225 × 155 × 43 mm",
      "Weight: 440 / 580 g",
      "In the box: 1 × 10 kg electronic compact scale, 2 × AA batteries"
    ],
    images: ["image-ecom/electronic-compact-scale.jpg"]
  },
  {
    id: "mat-scale-kitchen",
    name: "Electronic Kitchen Scale",
    category: "Weighing Scales",
    price: "Rs. 500 (per pc)",
    description: "Compact and portable electronic kitchen scale with a tare (zero) function.",
    details: [
      "Max capacity: 10 kg (10000 g / 1 g accuracy)",
      "Size (L × W × H): 24 × 16.5 × 3.5 cm",
      "In the box: 1 × 10 kg electronic digital kitchen food portable weighing scale, 2 × AA batteries"
    ],
    images: ["image-ecom/electronic-kitchen-scale.webp"]
  },
  {
    id: "mat-thermometer",
    name: "Thermometer",
    category: "Thermometer",
    price: "Rs. 650",
    description: "Can be used for candle making as well as cooking.",
    details: ["comes with battery, can measure extremely high temperatures"],
    images: ["image-ecom/thermometer.webp"]
  }
];

/* =====================================================
   CODE BELOW — you normally don't need to change this
   ===================================================== */
const WA = `https://wa.me/${CONFIG.whatsapp}`;
const waLink = text => text ? `${WA}?text=${encodeURIComponent(text)}` : WA;
const rs = n => "Rs. " + Number(n).toLocaleString("en-IN");

// header / footer links
const setHref = (sel, href) => document.querySelectorAll(sel).forEach(el => el.href = href);
setHref("#lnkFacebook, .fFacebook", CONFIG.facebook);
setHref("#lnkTiktok, .fTiktok", CONFIG.tiktok);
setHref("#lnkInstagram, .fInstagram", CONFIG.instagram);
setHref("#lnkWhatsApp, #heroWhatsApp, #footWhatsApp, #noticePhone", waLink("Hi Aromaya! I'd like to know more about your candles."));
setHref("#ctaWhatsApp", waLink("Hi Aromaya! I'd like to place an order."));
document.getElementById("year").textContent = new Date().getFullYear();

const sections = {
  candles:   { items: candles,   type: "candle",   filterable: true },
  combos:    { items: combos,    type: "combo",    filterable: false },
  materials: { items: materials, type: "material", filterable: false }
};
const allItems = [...candles, ...combos, ...materials];
const typeOf = id => Object.values(sections).find(s => s.items.some(p => p.id === id)).type;

const photoMarkup = p => {
  const ph = `<div class="photo-placeholder">Add your<br>product photo</div>`;
  return p.images[0]
    ? `<img src="${p.images[0]}" alt="${p.name}" loading="lazy" onerror="this.outerHTML='<div class=&quot;photo-placeholder&quot;>Add your<br>product photo</div>'">`
    : ph;
};

function cardPrice(p, type) {
  if (type === "material") {
    if (!p.variants) return p.price;
    const nums = p.variants.map(v => v.price).filter(v => v != null);
    return nums.length ? (p.variants.length > 1 ? "From " : "") + rs(Math.min(...nums)) + (p.unit ? ` (${p.unit})` : "") : "Message for price";
  }
  if (p.priceBlend == null) return "Message for price";
  return `From ${rs(p.priceBlend)}`;
}

function renderGrid(key, category = "All") {
  const { items, type } = sections[key];
  const visible = category === "All" ? items : items.filter(p => p.category === category);
  const grid = document.getElementById("grid-" + key);
  grid.innerHTML = visible.map(p => `
    <article class="product-card" data-id="${p.id}" tabindex="0" role="button" aria-label="${p.name}">
      <div class="product-photo">${photoMarkup(p)}</div>
      <div class="product-body">
        <div class="product-cat">${p.category}</div>
        <div class="product-name">${p.name}</div>
        <div class="product-price">${cardPrice(p, type)}</div>
        <div class="product-hint">Tap to view close-ups →</div>
      </div>
    </article>`).join("");
  grid.querySelectorAll(".product-card").forEach(card => {
    const open = () => openProduct(card.dataset.id);
    card.addEventListener("click", open);
    card.addEventListener("keydown", e => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); open(); } });
  });
}

// candle category filters
const filtersEl = document.getElementById("filters-candles");
const cats = ["All", ...new Set(candles.map(p => p.category))];
filtersEl.innerHTML = cats.map((c, i) => `<button class="filter ${i === 0 ? "active" : ""}" data-category="${c}">${c}</button>`).join("");
filtersEl.addEventListener("click", e => {
  if (!e.target.matches(".filter")) return;
  filtersEl.querySelectorAll(".filter").forEach(b => b.classList.remove("active"));
  e.target.classList.add("active");
  renderGrid("candles", e.target.dataset.category);
});

Object.keys(sections).forEach(k => renderGrid(k));

/* ---------- Modal ---------- */
const modal = document.getElementById("productModal");
const mainFrame = document.getElementById("mainFrame");
const thumbs = document.getElementById("thumbs");
const optionsBox = document.getElementById("modalOptions");
const colorInput = document.getElementById("optColor");
const scentInput = document.getElementById("optScent");
const waRadios = document.querySelectorAll('input[name="wax"]');
const orderBtn = document.getElementById("modalWhatsApp");
let current = null, currentType = null;

const selectedWax = () => document.querySelector('input[name="wax"]:checked').value;

function setMainImage(src, alt) {
  mainFrame.innerHTML = `<img src="${src}" alt="${alt}" onerror="this.outerHTML='<div class=&quot;photo-placeholder&quot;>Add your<br>product photo</div>'">`;
  mainFrame.querySelector("img")?.addEventListener("click", () => window.open(src, "_blank", "noopener"));
}

function updateOrder() {
  const p = current;
  const priced = currentType !== "material" && p.priceBlend != null;
  let price = p.price;
  let msg;

  if (currentType === "material") {
    if (p.variants) {
      const v = p.variants[Number(document.querySelector('input[name="variant"]:checked')?.value || 0)];
      price = v.price == null ? "Message for price" : rs(v.price) + (p.unit ? ` (${p.unit})` : "");
      msg = `Hi Aromaya! I'd like to order: ${p.name} — ${v.label} (${price}).`;
    } else {
      msg = `Hi Aromaya! I'd like to order: ${p.name} (${p.price}).`;
    }
  } else {
    const wax = selectedWax();
    const waxName = wax === "pure" ? "Pure soy wax" : "Soy-paraffin blend";
    price = priced ? rs(wax === "pure" ? p.pricePure : p.priceBlend) : "Message for price";
    const lines = [
      `Hi Aromaya! I'd like to order the ${p.name}.`,
      `Wax: ${waxName}${priced ? ` (${price})` : ""}`,
      `Colour: ${colorInput.value.trim() || "—"}`
    ];
    if (!p.noScent) lines.push(`Scent: ${scentInput.value.trim() || "—"}`);
    msg = lines.join("\n");
  }
  document.getElementById("modalPrice").textContent = price;
  orderBtn.href = waLink(msg);
}

function openProduct(id) {
  const p = allItems.find(x => x.id === id);
  if (!p) return;
  current = p; currentType = typeOf(id);

  document.getElementById("modalCategory").textContent = p.category;
  document.getElementById("modalName").textContent = p.name;
  document.getElementById("modalDescription").textContent = p.description;
  document.getElementById("modalDetails").innerHTML = p.details.map(x => `<div class="detail-item">${x}</div>`).join("");

  // extra UI for raw materials with sizes / types
  document.getElementById("variantBox")?.remove();
  document.getElementById("modalNote")?.remove();
  if (p.note) {
    const n = document.createElement("p");
    n.id = "modalNote";
    n.textContent = p.note;
    n.style.cssText = "background:var(--peach);border-left:4px solid var(--terracotta);padding:10px 14px;border-radius:8px;font-size:14px;font-weight:600;color:var(--brown);margin:0 0 16px";
    document.getElementById("modalDescription").after(n);
  }
  if (p.variants) {
    const box = document.createElement("fieldset");
    box.id = "variantBox";
    box.className = "wax-choice";
    box.style.margin = "0 0 8px";
    box.innerHTML = `<legend>${p.variants.length > 1 ? "Choose an option" : "Option"}</legend>` + p.variants.map((v, i) => `
      <label class="wax-card">
        <input type="radio" name="variant" value="${i}" ${i === 0 ? "checked" : ""}>
        <span class="wax-body"><strong>${v.label}</strong><em>${v.price == null ? "Message for price" : rs(v.price)}</em></span>
      </label>`).join("");
    box.addEventListener("change", updateOrder);
    document.getElementById("modalDetails").before(box);
  }

  // options only for candles & combos
  const showOptions = currentType !== "material";
  optionsBox.style.display = showOptions ? "" : "none";
  if (showOptions) {
    colorInput.value = ""; scentInput.value = "";
    scentInput.closest(".field").style.display = p.noScent ? "none" : "";
    waRadios[0].checked = true;
    const priced = p.priceBlend != null;
    document.getElementById("priceBlend").textContent = priced ? rs(p.priceBlend) : "Ask for price";
    document.getElementById("pricePure").textContent = priced ? rs(p.pricePure) : "Ask for price";
  }
  orderBtn.textContent = currentType === "material" ? "Order this on WhatsApp ↗"
    : currentType === "combo" ? "Order this combo on WhatsApp ↗" : "Order this candle on WhatsApp ↗";

  // gallery
  const imgs = p.images;
  if (imgs.length) setMainImage(imgs[0], p.name);
  else mainFrame.innerHTML = `<div class="photo-placeholder">Add your<br>product photo</div>`;
  thumbs.innerHTML = imgs.length > 1 ? imgs.map((src, i) =>
    `<img class="thumb ${i === 0 ? "active" : ""}" src="${src}" alt="${p.name} photo ${i + 1}" onerror="this.style.display='none'">`).join("") : "";
  thumbs.querySelectorAll(".thumb").forEach((t, i) => t.addEventListener("click", () => {
    setMainImage(imgs[i], p.name);
    thumbs.querySelectorAll(".thumb").forEach(x => x.classList.remove("active"));
    t.classList.add("active");
  }));

  updateOrder();
  modal.classList.add("open");
  modal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
  modal.querySelector(".modal-panel").scrollTop = 0;
}

function closeModal() {
  modal.classList.remove("open");
  modal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}

[colorInput, scentInput].forEach(el => el.addEventListener("input", updateOrder));
waRadios.forEach(r => r.addEventListener("change", updateOrder));
modal.addEventListener("click", e => { if (e.target.matches("[data-close]")) closeModal(); });
document.addEventListener("keydown", e => { if (e.key === "Escape") closeModal(); });
