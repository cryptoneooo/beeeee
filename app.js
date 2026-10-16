// 攤位座標（依官方攤位圖量測，單位為 SVG 座標）
// [編號, x, y, 寬, 高]
const GEOMETRY = [
  [1, 172, 384, 144, 23], [2, 172, 471, 144, 24],
  [3, 425, 428, 86, 23], [4, 511, 428, 86, 23], [5, 597, 428, 30, 23],
  [6, 425, 451, 86, 24], [7, 511, 451, 59, 24], [8, 570, 451, 28, 24], [9, 598, 451, 29, 24],
  [10, 426, 536, 172, 24], [11, 598, 536, 29, 24],
  [12, 426, 560, 172, 24], [13, 598, 560, 29, 24],
  [14, 428, 642, 115, 24], [15, 543, 642, 86, 24],
  [16, 428, 666, 28, 24], [17, 456, 666, 29, 24], [18, 485, 666, 29, 24], [19, 514, 666, 29, 24],
  [20, 543, 666, 29, 24], [21, 572, 666, 57, 24],
  [22, 425, 748, 58, 48], [23, 483, 748, 87, 24], [24, 570, 748, 57, 24],
  [25, 483, 772, 29, 24], [26, 512, 772, 29, 24], [27, 541, 772, 29, 24], [28, 570, 772, 57, 24],
  [29, 426, 852, 29, 24], [30, 455, 852, 29, 24], [31, 484, 852, 28, 24], [32, 512, 852, 29, 24],
  [33, 541, 852, 29, 24], [34, 570, 852, 29, 24], [35, 599, 852, 29, 24],
  [36, 426, 876, 58, 24], [37, 484, 876, 28, 24], [38, 512, 876, 29, 24], [39, 541, 876, 29, 24], [40, 570, 876, 58, 24],
  [41, 348, 584, 24, 57], [42, 348, 641, 24, 29], [43, 348, 670, 24, 28],
  [44, 348, 698, 24, 58], [45, 348, 756, 24, 29], [46, 348, 785, 24, 57],
  [47, 676, 584, 23, 202], [48, 676, 786, 23, 27], [49, 676, 813, 23, 28],
  [50, 749, 388, 57, 23], [51, 806, 388, 29, 23], [52, 835, 388, 29, 23], [53, 864, 388, 29, 23],
  [54, 749, 475, 57, 23], [55, 806, 475, 29, 23], [56, 835, 475, 29, 23], [57, 864, 475, 29, 23],
  [58, 930, 397, 55, 92]
];

const CAT_LABEL = { beetle: "甲蟲", reptile: "爬蟲", other: "其他" };
const NS = "http://www.w3.org/2000/svg";

const svg = document.getElementById("map");
const tip = document.getElementById("tip");
const panel = document.getElementById("panel");
const list = document.getElementById("list");
const search = document.getElementById("search");
const wrap = document.querySelector(".map-wrap");

const byNo = new Map(window.BOOTHS.map(b => [b.no, b]));
const cats = b => (Array.isArray(b.cat) ? b.cat : [b.cat]);
const catClass = b => (cats(b).length > 1 ? "mixed" : cats(b)[0]);

let filter = "all";
let selected = null;

function el(tag, attrs = {}, parent) {
  const node = document.createElementNS(NS, tag);
  for (const [k, v] of Object.entries(attrs)) node.setAttribute(k, v);
  if (parent) parent.appendChild(node);
  return node;
}

function escapeHtml(s) {
  return String(s).replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
}

// ── 繪製場地 ──────────────────────────────────
function drawVenue() {
  const defs = el("defs", {}, svg);
  const pat = el("pattern", { id: "mix", width: 8, height: 8, patternUnits: "userSpaceOnUse", patternTransform: "rotate(45)" }, defs);
  el("rect", { width: 4, height: 8, fill: "#fbd8c4" }, pat);
  el("rect", { x: 4, width: 4, height: 8, fill: "#cbe8d4" }, pat);
  const head = el("marker", { id: "head", viewBox: "0 0 10 10", refX: 5, refY: 5, markerWidth: 6, markerHeight: 6, orient: "auto-start-reverse" }, defs);
  el("path", { d: "M0 0 L10 5 L0 10 z", fill: "#1d1a14" }, head);

  const walls = [
    "M345 376 H48 V515 H343 V945 H707 V515 H1003 V376 H700",
    "M400 376 H645"
  ];
  walls.forEach(d => el("path", { d, class: "wall" }, svg));
  el("rect", { x: 339, y: 430, width: 6, height: 30, class: "pillar" }, svg);
  el("rect", { x: 700, y: 430, width: 6, height: 30, class: "pillar" }, svg);

  el("line", { x1: 370, y1: 405, x2: 370, y2: 345, class: "arrow", "marker-end": "url(#head)" }, svg);
  el("line", { x1: 673, y1: 338, x2: 673, y2: 398, class: "arrow", "marker-end": "url(#head)" }, svg);

  const desk = el("g", { class: "desk" }, svg);
  el("rect", { x: 585, y: 331, width: 57, height: 22, rx: 2 }, desk);
  const dt = el("text", { x: 613.5, y: 342 }, desk);
  dt.textContent = "服務台";
}

// ── 繪製攤位 ──────────────────────────────────
function drawBooths() {
  for (const [no, x, y, w, h] of GEOMETRY) {
    const b = byNo.get(no);
    if (!b) continue;
    const g = el("g", { class: `booth ${catClass(b)}`, "data-no": no, tabindex: 0, role: "button", "aria-label": `${no} ${b.name}` }, svg);
    el("rect", { x, y, width: w, height: h }, g);
    const t = el("text", { x: x + w / 2, y: y + h / 2 }, g);
    t.textContent = b.lottery === true ? `${no}★` : no;

    g.addEventListener("mouseenter", e => showTip(b, e));
    g.addEventListener("mousemove", e => moveTip(e));
    g.addEventListener("mouseleave", hideTip);
    g.addEventListener("click", () => select(no));
    g.addEventListener("keydown", e => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); select(no); } });
    g.addEventListener("focus", () => {
      const r = g.getBoundingClientRect();
      showTip(b, { clientX: r.right, clientY: r.top });
    });
    g.addEventListener("blur", hideTip);
  }
}

function spTip(b) {
  const sp = b.species || [];
  if (!sp.length) return "";
  const names = sp.slice(0, 3).map(x => escapeHtml(x.name)).join("、");
  return `<div class="sp-tip">🪲 ${names}${sp.length > 3 ? ` 等 ${sp.length} 種` : ""}</div>`;
}
function spPanel(b) {
  const sp = b.species || [];
  if (!sp.length) return "";
  return `<h4>現場蟲種（${sp.length}）</h4><ul class="species">${sp.map(x => {
    const meta = [x.stage, x.size, x.price].filter(Boolean).map(escapeHtml).join("・");
    return `<li><span class="sp-name">${escapeHtml(x.name)}</span>${x.sci ? ` <i class="sci">${escapeHtml(x.sci)}</i>` : ""}${meta ? `<div class="sp-meta">${meta}</div>` : ""}</li>`;
  }).join("")}</ul>`;
}
function spText(b) {
  return (b.species || []).map(x => `${x.name} ${x.sci || ""}`).join(" ");
}

// ── 提示框 ────────────────────────────────────
function showTip(b, e) {
  const lottery = b.lottery === true ? `<div>🎰 有抽抽樂</div>` : "";
  tip.innerHTML =
    `<strong><span class="no">${b.no}</span>${escapeHtml(b.name)}</strong>` +
    `<div>${cats(b).map(c => CAT_LABEL[c]).join("・")}</div>` +
    `<ul>${b.items.map(i => `<li>${escapeHtml(i)}</li>`).join("")}</ul>` + spTip(b) + lottery;
  tip.hidden = false;
  moveTip(e);
}
function moveTip(e) {
  const r = wrap.getBoundingClientRect();
  let x = e.clientX - r.left + 14;
  let y = e.clientY - r.top + 14;
  const tw = tip.offsetWidth, th = tip.offsetHeight;
  if (x + tw > r.width - 8) x = e.clientX - r.left - tw - 14;
  if (y + th > r.height - 8) y = e.clientY - r.top - th - 14;
  tip.style.left = `${Math.max(8, x)}px`;
  tip.style.top = `${Math.max(8, y)}px`;
}
function hideTip() { tip.hidden = true; }

// ── 詳細面板 ──────────────────────────────────
function renderPanel(b) {
  const tags = cats(b).map(c => `<span class="tag ${c}">${CAT_LABEL[c]}</span>`);
  if (b.lottery === true) tags.push(`<span class="tag lottery-yes">🎰 抽抽樂</span>`);
  else if (b.lottery === null) tags.push(`<span class="tag lottery-unknown">抽抽樂未確認</span>`);
  if (b.fromEventPost) tags.push(`<span class="tag event-post">本次活動貼文</span>`);
  if (!b.verified) tags.push(`<span class="tag guess">依名稱推測</span>`);

  const links = (b.links || []).map(l =>
    `<a href="${escapeHtml(l.url)}" target="_blank" rel="noopener">${escapeHtml(l.label)} ↗</a>`).join("");

  panel.innerHTML = `
    <span class="no-badge">攤位 ${b.no}</span>
    <h3>${escapeHtml(b.name)}</h3>
    <div class="tags">${tags.join("")}</div>
    <h4>參展品項</h4>
    <ul>${b.items.map(i => `<li>${escapeHtml(i)}</li>`).join("")}</ul>
    ${spPanel(b)}
    ${b.otherItems && b.otherItems.length ? `<h4>其他品項</h4><ul>${b.otherItems.map(i => `<li>${escapeHtml(i)}</li>`).join("")}</ul>` : ""}
    ${b.lotteryNote ? `<h4>抽抽樂</h4><p class="note">${escapeHtml(b.lotteryNote)}</p>` : ""}
    ${b.note ? `<h4>備註</h4><p class="note">${escapeHtml(b.note)}</p>` : ""}
    ${links ? `<h4>連結</h4><div class="links">${links}</div>` : ""}
  `;
}

function select(no) {
  selected = no;
  document.querySelectorAll(".booth").forEach(g => g.classList.toggle("selected", +g.dataset.no === no));
  document.querySelectorAll(".list li").forEach(li => li.classList.toggle("selected", +li.dataset.no === no));
  renderPanel(byNo.get(no));
  if (window.matchMedia("(max-width: 900px)").matches) panel.scrollIntoView({ behavior: "smooth", block: "start" });
}

// ── 清單 ──────────────────────────────────────
function drawList() {
  list.innerHTML = window.BOOTHS.map(b => `
    <li class="${catClass(b)}" data-no="${b.no}" tabindex="0">
      <span class="n">${b.no}</span>
      <span>
        <span class="nm">${escapeHtml(b.name)}${b.lottery === true ? " 🎰" : ""}</span><br>
        <span class="it">${escapeHtml(b.items.join("、"))}</span>
      </span>
    </li>`).join("");
  list.querySelectorAll("li").forEach(li => {
    const go = () => { select(+li.dataset.no); wrap.scrollIntoView({ behavior: "smooth", block: "start" }); };
    li.addEventListener("click", go);
    li.addEventListener("keydown", e => { if (e.key === "Enter") go(); });
  });
}

// ── 篩選 ──────────────────────────────────────
function matches(b) {
  const q = search.value.trim().toLowerCase();
  const passFilter =
    filter === "all" ? true :
    filter === "lottery" ? b.lottery === true :
    cats(b).includes(filter);
  const passSearch = !q || `${b.no} ${b.name} ${b.items.join(" ")} ${spText(b)} ${b.note || ""}`.toLowerCase().includes(q);
  return passFilter && passSearch;
}

function applyFilter() {
  document.querySelectorAll(".booth").forEach(g => g.classList.toggle("dim", !matches(byNo.get(+g.dataset.no))));
  document.querySelectorAll(".list li").forEach(li => { li.hidden = !matches(byNo.get(+li.dataset.no)); });
}

function drawCounts() {
  const n = {
    all: window.BOOTHS.length,
    beetle: window.BOOTHS.filter(b => cats(b).includes("beetle")).length,
    reptile: window.BOOTHS.filter(b => cats(b).includes("reptile")).length,
    other: window.BOOTHS.filter(b => cats(b).includes("other")).length,
    lottery: window.BOOTHS.filter(b => b.lottery === true).length
  };
  document.querySelectorAll("[data-count]").forEach(s => { s.textContent = n[s.dataset.count]; });
}

document.querySelectorAll(".chip").forEach(btn => {
  btn.addEventListener("click", () => {
    filter = btn.dataset.filter;
    document.querySelectorAll(".chip").forEach(c => c.classList.toggle("active", c === btn));
    applyFilter();
  });
});
search.addEventListener("input", applyFilter);

drawVenue();
drawBooths();
drawList();
drawCounts();
applyFilter();
