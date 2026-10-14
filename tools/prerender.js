/* Записывает меню и отзывы (на русском) прямо в index.html, чтобы их видели
   поисковики, превью ссылок и браузеры без JavaScript. На сайте script.js потом
   перерисовывает их на выбранном языке.
   Запуск после любой правки menu.js или отзывов в i18n.js:
     node tools/prerender.js */

const fs = require("fs");
const path = require("path");
const root = path.join(__dirname, "..");

global.window = {};
require(path.join(root, "i18n.js"));
require(path.join(root, "menu.js"));
const { TOSH_MENU, TOSH_REVIEWS, TOSH_UNITS, TOSH_TEXT } = window;

const esc = (s) => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
const price = (n) => String(n).replace(/\B(?=(\d{3})+(?!\d))/g, "&nbsp;");
const pad = (n) => " ".repeat(n);

function item(it, ind) {
  const meta = [];
  if (it.a) meta.push(`${it.a[0]}&nbsp;${TOSH_UNITS[it.a[1]].ru}`);
  if (it.d && it.d.ru) meta.push(esc(it.d.ru));
  const img = it.img
    ? `<img class="item__photo" src="img/menu/${it.img}.webp" width="240" height="240" loading="lazy" alt="">`
    : `<span class="item__photo item__photo--empty" aria-hidden="true"></span>`;
  const badge = it.isNew ? ` <span class="item__new">${TOSH_TEXT["menu.new"].ru}</span>` : "";
  return `${pad(ind)}<li class="item">${img}<div class="item__text"><div class="item__head"><span class="item__name">${esc(it.n.ru)}${badge}</span>`
    + (it.p ? `<span class="item__price">${price(it.p)}</span>` : "")
    + `</div>${meta.length ? `<span class="item__meta">${meta.join(", ")}</span>` : ""}</div></li>`;
}

let menu = "";
for (const s of TOSH_MENU) {
  menu += `${pad(10)}<div class="panel" id="panel-${s.id}">\n${pad(12)}<h3 class="panel__title">${esc(s.label.ru)}</h3>\n${pad(12)}<div class="groups">\n`;
  for (const g of s.groups) {
    menu += `${pad(14)}<section class="group">\n${pad(16)}<div class="group__head"><h3>${esc(g.title.ru)}</h3>`
      + (g.note ? `<span class="group__note">${esc(g.note.ru)}</span>` : "") + `</div>\n`;
    menu += `${pad(16)}<ul class="items">\n${g.items.map((it) => item(it, 18)).join("\n")}\n${pad(16)}</ul>\n${pad(14)}</section>\n`;
  }
  menu += `${pad(12)}</div>\n${pad(10)}</div>\n`;
}

const reviews = TOSH_REVIEWS.slice(0, 9).map(([name, text, stars], i) =>
  `${pad(8)}<figure class="review${i < 3 ? "" : " review--more"}"><div class="review__stars" role="img" aria-label="${TOSH_TEXT["reviews.stars"].ru}">${"★".repeat(stars)}</div><blockquote><p>${esc(text.ru)}</p></blockquote><figcaption>${esc(name)}</figcaption></figure>`
).join("\n");

const file = path.join(root, "index.html");
let html = fs.readFileSync(file, "utf8");
const put = (name, body, ind) => {
  const re = new RegExp(`(<!-- ${name}:START -->)[\\s\\S]*?(<!-- ${name}:END -->)`);
  if (!re.test(html)) throw new Error(`Нет меток ${name}:START / ${name}:END в index.html`);
  html = html.replace(re, `$1\n${body}\n${pad(ind)}$2`);
};
put("MENU", menu.trimEnd(), 8);
put("REVIEWS", reviews, 6);
fs.writeFileSync(file, html);
console.log(`Готово: ${TOSH_MENU.reduce((n, s) => n + s.groups.reduce((m, g) => m + g.items.length, 0), 0)} позиций меню и ${Math.min(TOSH_REVIEWS.length, 9)} отзывов записаны в index.html`);
