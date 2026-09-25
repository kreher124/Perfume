// Perfume collection viewer.
// Reads a Google Sheet (exported as .xlsx so cell colors survive) and shows it as cards.
// Green-filled house/name cells = full bottle owned. Rows with no rating = queue.

const DEFAULT_SHEET = "12AmGW9_MBxdZCXNwdcMNNCuvSB7K1oTWx1hCNo9raH8";
const DEFAULT_NAME = "Jason";
const SNAPSHOT = "data/FRAGRANCES.xlsx";
const IMG = (id) => `https://fimgs.net/mdimg/perfume/375x500.${id}.jpg`;

// Obvious house-name misspellings, applied when a perfume has no Fragrantica match.
const HOUSE_FIXES = {
  "Andy Tauer": "Tauer Perfumes",
  "Aqua di Parma": "Acqua di Parma",
  "Arko": "Akro",
  "Armani Priv\u0113": "Armani Priv\u00e9",
  "Beaufort": "BeauFort London",
  "BOHOBOCO": "Bohoboco",
  "Bon Parfumer": "Bon Parfumeur",
  "Borntostandout": "BORNTOSTANDOUT",
  "BORNTOSTANDOUT\u00ae": "BORNTOSTANDOUT",
  "bvlgari": "Bvlgari",
  "By Kilian": "Kilian",
  "By Killian": "Kilian",
  "Chloe": "Chlo\u00e9",
  "Clue": "Clue Perfumery",
  "Comme des Garcons": "Comme des Gar\u00e7ons",
  "Comme des Gar\u00e7on": "Comme des Gar\u00e7ons",
  "Commes des Garcons": "Comme des Gar\u00e7ons",
  "Commes des Gar\u00e7on": "Comme des Gar\u00e7ons",
  "Commes des Gar\u00e7ons": "Comme des Gar\u00e7ons",
  "Dolce and Gabbana": "Dolce & Gabbana",
  "DSH": "DSH Perfumes",
  "Ecscentric Molecules": "Escentric Molecules",
  "EDLO": "Etat Libre d'Orange",
  "ELDO": "Etat Libre d'Orange",
  "Eris": "Eris Parfums",
  "Floraiku": "Flora\u00efku",
  "Frederic Malle": "Fr\u00e9d\u00e9ric Malle",
  "Fueguia": "Fueguia 1833",
  "Fzotic": "FZOTIC",
  "Heretic": "Heretic Parfum",
  "Hermes": "Herm\u00e8s",
  "Histories des Parfums": "Histoires de Parfums",
  "J.F. SCHWARZLOSE": "J.F. Schwarzlose Berlin",
  "Jorum Studios": "Jorum Studio",
  "Killian": "Kilian",
  "L'Artisan Perfumier": "L'Artisan Parfumeur",
  "L'occetaine": "L'Occitane",
  "Lancome": "Lanc\u00f4me",
  "Laurel Bathhouse": "Laurel Bath House",
  "Les Liquides Imaginaires": "Liquides Imaginaires",
  "Maison Francis K": "Maison Francis Kurkdjian",
  "Malka Sina": "Malka Sima",
  "Margiela": "Maison Margiela",
  "Matiere Premier": "Mati\u00e8re Premi\u00e8re",
  "Maya Nije": "Maya Njie",
  "Memo": "Memo Paris",
  "MFK": "Maison Francis Kurkdjian",
  "Molecule": "Escentric Molecules",
  "Moscino": "Moschino",
  "Nasomotto": "Nasomatto",
  "Neanderthal": "Neandertal",
  "Olfactive Studios": "Olfactive Studio",
  "ONE DAY": "One Day",
  "Paco Rabonne": "Paco Rabanne",
  "Parfumeur d'Empire": "Parfum d'Empire",
  "Parfums de Marley": "Parfums de Marly",
  "Particuliere": "Parfumerie Particuli\u00e8re",
  "Penhaligons": "Penhaligon's",
  "Penihaligons": "Penhaligon's",
  "Penilaligons": "Penhaligon's",
  "Perfumes Quartana": "Parfums Quartana",
  "Perris": "Perris Monte Carlo",
  "Precious Liquids": "Precious Liquid",
  "Raconteur": "The Raconteur",
  "Ranger's Station": "Ranger Station",
  "Regime des Fleurs": "R\u00e9gime des Fleurs",
  "Rogue": "Rogue Perfumery",
  "Senyoko": "Senyok\u00f4",
  "Sept 28": "September 28th",
  "Serge lutens": "Serge Lutens",
  "Stephanie Humbert Lucas 777": "St\u00e9phane Humbert Lucas 777",
  "Stora Stuggan": "Stora Skuggan",
  "Strangers": "Strangers Parfumerie",
  "to Summer": "To Summer",
  "Toskovot": "Toskovat'",
  "Une Nuite Nomade": "Une Nuit Nomade",
  "UNN": "Une Nuit Nomade",
  "Viktor and Rolf": "Viktor & Rolf",
  "Villa Urbatium": "Villa Erbatium",
  "Xinu": "Xin\u00fa",
  "Zyrena": "Xyrena",
};
const houseFix = {};
for (const [k, v] of Object.entries(HOUSE_FIXES)) houseFix[k.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().replace(/[^a-z0-9]+/g, " ").trim()] = v;

const params = new URLSearchParams(location.search);
const sheetId = params.get("sheet") || DEFAULT_SHEET;
const ownerName = params.get("name") || (params.get("sheet") ? "" : DEFAULT_NAME);
const isDefault = sheetId === DEFAULT_SHEET;

const state = { items: [], view: "ranked", sort: "score-desc", query: "", queueFilter: "all" };
let matches = {};

// matches.json is keyed by the names as first typed in the sheet. Also file each
// entry under its corrected names, so rows fixed in the sheet keep their photo.
function addCorrectedNames() {
  for (const [key, m] of Object.entries(matches)) {
    const [house, name] = key.split("|");
    const fixed = norm(m.h || houseFix[house] || house) + "|" + norm(m.n || name);
    if (!(fixed in matches)) matches[fixed] = m;
  }
}

// ---------- text helpers ----------
const norm = (s) =>
  String(s ?? "").normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase().replace(/[^a-z0-9]+/g, " ").trim();
const clean = (s) => String(s ?? "").replace(/\s+/g, " ").trim();
const esc = (s) => String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]);
const firstLine = (s) => { const m = clean(s).match(/^.*?[.!?](\s|$)/); return m ? m[0].trim() : clean(s); };

// ---------- xlsx reading ----------
function colorKind(rgb) {
  if (!rgb || rgb.length < 6) return null;
  const hex = rgb.slice(-6);
  const r = parseInt(hex.slice(0, 2), 16), g = parseInt(hex.slice(2, 4), 16), b = parseInt(hex.slice(4, 6), 16);
  if (g > r + 20 && g > b + 20) return "green";
  if (b > r + 30 && b > g + 10) return "blue";
  return null;
}

async function readXlsx(buf) {
  const zip = await JSZip.loadAsync(buf);
  const xml = async (p) => { const f = zip.file(p); return f ? new DOMParser().parseFromString(await f.async("string"), "application/xml") : null; };
  const tags = (node, name) => Array.from(node ? node.getElementsByTagName(name) : []);

  const shared = tags(await xml("xl/sharedStrings.xml"), "si").map((si) => tags(si, "t").map((t) => t.textContent).join(""));

  const styles = await xml("xl/styles.xml");
  const fills = tags(styles, "fill").map((f) => {
    const p = f.getElementsByTagName("patternFill")[0];
    const fg = p && p.getAttribute("patternType") === "solid" ? p.getElementsByTagName("fgColor")[0] : null;
    return fg ? fg.getAttribute("rgb") : null;
  });
  const cellXfs = styles.getElementsByTagName("cellXfs")[0];
  const xfFill = tags(cellXfs, "xf").map((x) => fills[+x.getAttribute("fillId") || 0]);

  const rels = {};
  tags(await xml("xl/_rels/workbook.xml.rels"), "Relationship").forEach((r) => (rels[r.getAttribute("Id")] = r.getAttribute("Target")));
  const sheets = [];
  for (const s of tags(await xml("xl/workbook.xml"), "sheet")) {
    const target = rels[s.getAttribute("r:id")] || "";
    const doc = await xml("xl/" + target.replace(/^\/?xl\//, ""));
    const rows = tags(doc, "row").map((row) => {
      const cells = [];
      tags(row, "c").forEach((c) => {
        const col = c.getAttribute("r").replace(/\d+/g, "").split("").reduce((n, ch) => n * 26 + ch.charCodeAt(0) - 64, 0) - 1;
        const t = c.getAttribute("t");
        const v = c.getElementsByTagName("v")[0];
        let value = v ? v.textContent : "";
        if (t === "s") value = shared[+value] ?? "";
        else if (t === "inlineStr") value = tags(c, "t").map((x) => x.textContent).join("");
        cells[col] = { value, color: colorKind(xfFill[+c.getAttribute("s") || 0]) };
      });
      return cells;
    });
    sheets.push({ name: s.getAttribute("name"), rows });
  }
  return sheets;
}

// ---------- turning sheet rows into perfumes ----------
function findCol(header, names) {
  const h = header.map((c) => norm(c && c.value));
  for (const n of names) { const i = h.indexOf(n); if (i >= 0) return i; }
  return -1;
}

function sheetToItems(sheet, kind) {
  const [header = [], ...rows] = sheet.rows;
  const col = {
    house: findCol(header, ["house", "brand"]),
    name: findCol(header, ["name", "perfume", "fragrance"]),
    rating: findCol(header, ["rating", "score", "rank"]),
    notes: findCol(header, kind === "tried" ? ["facts", "notes", "thoughts"] : ["notes", "facts"]),
    where: findCol(header, ["where to buy", "where"]),
    link: findCol(header, ["link", "url"]),
    frag: findCol(header, ["fragrantica"]),
  };
  if (col.house < 0) col.house = 0;
  if (col.name < 0) col.name = 1;
  const get = (r, i) => (i >= 0 && r[i] ? clean(r[i].value) : "");
  const out = [];
  rows.forEach((r, idx) => {
    const house = get(r, col.house), name = get(r, col.name);
    if (!house && !name) return;
    if (!name && house.startsWith("(")) return; // a note, not a perfume
    const ratingText = get(r, col.rating);
    const rating = ratingText !== "" && !isNaN(+ratingText) ? Math.round(+ratingText) : null;
    const colors = [r[col.house], r[col.name]].map((c) => c && c.color);
    const item = {
      house, name, rating,
      notes: get(r, col.notes),
      where: get(r, col.where),
      link: get(r, col.link),
      owned: colors.includes("green"),
      list: kind === "wish" ? "wish" : rating === null ? "untried" : "ranked",
      order: idx,
    };
    const m = matches[norm(house) + "|" + norm(name)];
    const fragUrl = get(r, col.frag);
    const fromCol = fragUrl.match(/fragrantica\.[a-z.]+\/perfume\/([^?#\s]+?)(?:\.html)?(?:[?#]|$)/i);
    if (fromCol) item.path = fromCol[1];
    else if (m) item.path = m.p;
    if (m && m.h) item.house = m.h;
    else if (houseFix[norm(house)]) item.house = houseFix[norm(house)];
    if (m && m.n) item.name = m.n;
    const id = item.path && item.path.match(/-(\d+)$/);
    if (id) item.img = IMG(id[1]);
    else if (m && m.i) item.img = m.i; // photo found on a product page by the Find bottle photos action
    item.search = norm([item.house, item.name, house, name, item.notes, item.where].join(" "));
    out.push(item);
  });
  return out;
}

function workbookToItems(sheets) {
  const pick = (re) => sheets.find((s) => re.test(norm(s.name)));
  const tried = pick(/^tried$|collection|ranked|rated/) || sheets[0];
  const wish = pick(/to try|wish|want/);
  return [...sheetToItems(tried, "tried"), ...(wish && wish !== tried ? sheetToItems(wish, "wish") : [])];
}

// ---------- loading ----------
async function fetchBuf(url) {
  const res = await fetch(url, { cache: "no-store" });
  if (!res.ok) throw new Error("HTTP " + res.status);
  const buf = await res.arrayBuffer();
  if (new Uint8Array(buf)[0] !== 0x50) throw new Error("not a spreadsheet (is the sheet shared?)");
  return buf;
}

async function load() {
  try { matches = await (await fetch("matches.json", { cache: "no-store" })).json(); } catch { matches = {}; }
  addCorrectedNames();
  const live = `https://docs.google.com/spreadsheets/d/${sheetId}/export?format=xlsx`;
  let buf, source = "live";
  try { buf = await fetchBuf(live); }
  catch (e) {
    if (!isDefault) return showError(e);
    try { buf = await fetchBuf(SNAPSHOT); source = "saved"; } catch (e2) { return showError(e2); }
  }
  try { state.items = workbookToItems(await readXlsx(buf)); }
  catch (e) { return showError(e); }
  document.getElementById("status").textContent =
    source === "live" ? "" : "Showing the last saved copy. The live sheet could not be reached.";
  render();
}

function showError(e) {
  document.getElementById("grid").innerHTML = `<div class="empty">
    <p><strong>Couldn't read this Google Sheet.</strong></p>
    <p>In Google Sheets, tap Share and set General access to “Anyone with the link” (Viewer).</p>
    <p class="muted">${esc(e.message)}</p></div>`;
}

// ---------- rendering ----------
const sorters = {
  "score-desc": (a, b) => (b.rating ?? -1) - (a.rating ?? -1) || a.house.localeCompare(b.house),
  "score-asc": (a, b) => (a.rating ?? 999) - (b.rating ?? 999) || a.house.localeCompare(b.house),
  "house": (a, b) => a.house.localeCompare(b.house) || a.name.localeCompare(b.name),
  "name": (a, b) => a.name.localeCompare(b.name),
};

function visible() {
  const q = norm(state.query).split(" ").filter(Boolean);
  let list = state.items.filter((it) => {
    if (state.view === "ranked" && it.list !== "ranked") return false;
    if (state.view === "owned" && !it.owned) return false;
    if (state.view === "queue") {
      if (it.list === "ranked") return false;
      if (state.queueFilter !== "all" && it.list !== state.queueFilter) return false;
    }
    return q.every((w) => it.search.includes(w));
  });
  const sort = state.view === "queue" && state.sort.startsWith("score") ? "house" : state.sort;
  return list.sort(sorters[sort]);
}

function placeholder(it) {
  return `<div class="ph"><span>${esc((it.house || it.name).slice(0, 1).toUpperCase())}</span></div>`;
}

function card(it, i) {
  const score = it.rating !== null
    ? `<div class="score${it.rating >= 90 ? " top" : ""}">${it.rating}</div>`
    : `<div class="tag">${it.list === "wish" ? "Want to try" : "Untried"}</div>`;
  return `<button class="card" data-i="${i}">
    <div class="bottle">${it.img ? `<img src="${it.img}" alt="" loading="lazy" referrerpolicy="no-referrer" data-letter="${esc((it.house || "?").slice(0, 1).toUpperCase())}">` : placeholder(it)}
      ${score}${it.owned ? `<div class="owned">Full bottle</div>` : ""}</div>
    <div class="meta"><div class="house">${esc(it.house)}</div><div class="name">${esc(it.name)}</div>
    ${it.notes ? `<p class="note">${esc(firstLine(it.notes))}</p>` : ""}</div></button>`;
}

let current = [];
function render() {
  const all = state.items;
  const counts = { ranked: all.filter((x) => x.list === "ranked").length, owned: all.filter((x) => x.owned).length, queue: all.filter((x) => x.list !== "ranked").length };
  document.querySelectorAll("[data-view]").forEach((b) => {
    b.classList.toggle("on", b.dataset.view === state.view);
    b.querySelector("small").textContent = counts[b.dataset.view];
  });
  document.getElementById("queue-filter").hidden = state.view !== "queue";
  document.querySelectorAll("[data-qf]").forEach((b) => b.classList.toggle("on", b.dataset.qf === state.queueFilter));
  current = visible();
  const grid = document.getElementById("grid");
  grid.innerHTML = current.length ? current.map(card).join("") : `<div class="empty"><p>Nothing matches.</p></div>`;
}

function openDetail(it) {
  const d = document.getElementById("detail");
  const frag = it.path
    ? `https://www.fragrantica.com/perfume/${it.path}.html`
    : `https://www.fragrantica.com/search/?query=${encodeURIComponent(it.house + " " + it.name)}`;
  d.querySelector(".sheet-body").innerHTML = `
    <div class="d-bottle">${it.img ? `<img src="${it.img}" alt="" referrerpolicy="no-referrer" data-letter="${esc((it.house || "?").slice(0, 1).toUpperCase())}">` : placeholder(it)}</div>
    <div class="d-head">
      ${it.rating !== null ? `<div class="d-score">${it.rating}</div>` : `<div class="tag static">${it.list === "wish" ? "Want to try" : "Untried"}</div>`}
      <div><div class="house">${esc(it.house)}</div><h2>${esc(it.name)}</h2>${it.owned ? `<div class="owned static">Full bottle</div>` : ""}</div>
    </div>
    ${it.notes ? `<p class="d-notes">${esc(it.notes)}</p>` : ""}
    ${it.where ? `<p class="muted">Where to buy: ${esc(it.where)}</p>` : ""}
    <div class="d-links">
      ${it.link ? `<a href="${esc(it.link)}" target="_blank" rel="noopener">Shop link</a>` : ""}
      <a href="${frag}" target="_blank" rel="noopener">${it.path ? "View on Fragrantica" : "Search Fragrantica"}</a>
    </div>`;
  d.showModal();
}

// ---------- setup + sharing ----------
function buildLink(sheetUrl, name) {
  const m = sheetUrl.match(/\/d\/([a-zA-Z0-9_-]{20,})/) || sheetUrl.match(/^([a-zA-Z0-9_-]{20,})$/);
  if (!m) return null;
  const u = new URL(location.href.split("?")[0]);
  u.searchParams.set("sheet", m[1]);
  if (name.trim()) u.searchParams.set("name", name.trim());
  return u.toString();
}

function init() {
  document.getElementById("title").textContent = ownerName ? `${ownerName}’s Fragrances` : "Fragrances";
  document.title = ownerName ? `${ownerName}’s Fragrances` : "Fragrances";

  document.querySelectorAll("[data-view]").forEach((b) => b.addEventListener("click", () => { state.view = b.dataset.view; render(); scrollTo(0, 0); }));
  document.querySelectorAll("[data-qf]").forEach((b) => b.addEventListener("click", () => { state.queueFilter = b.dataset.qf; render(); }));
  const search = document.getElementById("search");
  search.addEventListener("input", () => { state.query = search.value; render(); });
  const sort = document.getElementById("sort");
  sort.addEventListener("change", () => { state.sort = sort.value; render(); });
  document.getElementById("grid").addEventListener("click", (e) => { const c = e.target.closest(".card"); if (c) openDetail(current[+c.dataset.i]); });

  // Missing bottle photo: swap in a letter tile.
  document.addEventListener("error", (e) => {
    const img = e.target;
    if (img.tagName !== "IMG") return;
    const ph = document.createElement("div");
    ph.className = "ph";
    ph.innerHTML = `<span>${esc(img.dataset.letter || "")}</span>`;
    img.replaceWith(ph);
  }, true);

  document.querySelectorAll("dialog").forEach((d) => d.addEventListener("click", (e) => { if (e.target === d || e.target.closest(".close")) d.close(); }));

  document.getElementById("share").addEventListener("click", async () => {
    const url = location.href;
    if (navigator.share) { try { await navigator.share({ title: document.title, url }); } catch {} }
    else { await navigator.clipboard.writeText(url); alert("Link copied."); }
  });
  document.getElementById("own").addEventListener("click", () => document.getElementById("setup").showModal());
  document.getElementById("setup-form").addEventListener("submit", (e) => {
    e.preventDefault();
    const f = e.target;
    const link = buildLink(f.sheet.value.trim(), f.name.value);
    const out = document.getElementById("setup-out");
    if (!link) { out.innerHTML = `<p class="err">That doesn't look like a Google Sheets link.</p>`; return; }
    out.innerHTML = `<p>Your page is ready. Bookmark it or add it to your home screen.</p><a class="btn" href="${esc(link)}">Open my collection</a>`;
  });

  load();
}

init();
