/* Tosh qahvaxona — поведение страницы:
   1) переключение языка (ру / oʻz / en), выбор запоминается в браузере;
   2) меню с вкладками собирается из данных в i18n.js;
   3) статус «Открыто до 21:00» по ташкентскому времени. */

(() => {
  "use strict";

  // Защита: сайт нельзя встроить в чужую страницу
  if (window.top !== window.self) {
    try { window.top.location.href = window.location.href; } catch (e) { document.documentElement.hidden = true; }
  }

  const TEXT = window.TOSH_TEXT;
  const MENU = window.TOSH_MENU;
  const UNITS = window.TOSH_UNITS;
  const LANGS = ["ru", "uz", "en"];
  const STORE_KEY = "tosh-lang";

  let lang = "ru";
  let activeTab = MENU[0].id;

  const tr = (key) => (TEXT[key] ? TEXT[key][lang] : "");

  /* ——— Язык ——— */

  function detectLang() {
    const fromUrl = new URLSearchParams(window.location.search).get("lang");
    if (LANGS.includes(fromUrl)) return fromUrl;
    try {
      const saved = window.localStorage.getItem(STORE_KEY);
      if (LANGS.includes(saved)) return saved;
    } catch (e) { /* хранилище недоступно — не страшно */ }
    for (const l of navigator.languages || [navigator.language || ""]) {
      const code = l.slice(0, 2).toLowerCase();
      if (LANGS.includes(code)) return code;
    }
    return "ru";
  }

  function applyLang(next) {
    lang = next;
    document.documentElement.lang = lang;
    document.title = tr("meta.title");
    const desc = document.querySelector('meta[name="description"]');
    if (desc) desc.setAttribute("content", tr("meta.description"));

    document.querySelectorAll("[data-i18n]").forEach((el) => {
      el.textContent = tr(el.dataset.i18n);
    });
    document.querySelectorAll("[data-i18n-alt]").forEach((el) => {
      el.setAttribute("alt", tr(el.dataset.i18nAlt));
    });
    document.querySelectorAll("[data-i18n-aria]").forEach((el) => {
      el.setAttribute("aria-label", tr(el.dataset.i18nAria));
    });
    document.querySelectorAll(".lang button").forEach((btn) => {
      btn.setAttribute("aria-pressed", String(btn.dataset.lang === lang));
    });

    renderMenu();
    updateStatus();
  }

  document.querySelectorAll(".lang button").forEach((btn) => {
    btn.addEventListener("click", () => {
      applyLang(btn.dataset.lang);
      try { window.localStorage.setItem(STORE_KEY, lang); } catch (e) { /* без сохранения */ }
    });
  });

  /* ——— Меню ——— */

  const tabsEl = document.getElementById("menu-tabs");
  const panelsEl = document.getElementById("menu-panels");

  const formatPrice = (n) => String(n).replace(/\B(?=(\d{3})+(?!\d))/g, " ");

  function el(tag, className, text) {
    const node = document.createElement(tag);
    if (className) node.className = className;
    if (text) node.textContent = text;
    return node;
  }

  function renderItem([name, amount, price, desc]) {
    const li = el("li", "item");
    li.append(el("span", "item__name", name[lang]));
    li.append(el("span", "item__price", formatPrice(price)));

    const parts = [];
    if (amount) parts.push(`${amount[0]} ${UNITS[amount[1]][lang]}`);
    if (desc && desc[lang]) parts.push(desc[lang]);
    if (parts.length) li.append(el("span", "item__meta", parts.join(", ")));
    return li;
  }

  function renderMenu() {
    tabsEl.replaceChildren();
    panelsEl.replaceChildren();

    MENU.forEach((section) => {
      const selected = section.id === activeTab;

      const tab = el("button", "tab", section.label[lang]);
      tab.type = "button";
      tab.id = `tab-${section.id}`;
      tab.setAttribute("role", "tab");
      tab.setAttribute("aria-controls", `panel-${section.id}`);
      tab.setAttribute("aria-selected", String(selected));
      tab.tabIndex = selected ? 0 : -1;
      tab.addEventListener("click", () => selectTab(section.id, false));
      tabsEl.append(tab);

      const panel = el("div", "panel");
      panel.id = `panel-${section.id}`;
      panel.setAttribute("role", "tabpanel");
      panel.setAttribute("aria-labelledby", tab.id);
      panel.tabIndex = 0;
      panel.hidden = !selected;

      const band = el("div", `band band--${section.pattern}`);
      band.setAttribute("aria-hidden", "true");
      panel.append(band);

      const groups = el("div", "groups");
      section.groups.forEach((group) => {
        const box = el("section", "group");
        const head = el("div", "group__head");
        head.append(el("h3", "", group.title[lang]));
        if (group.note) head.append(el("span", "group__note", group.note[lang]));
        box.append(head);

        const list = el("ul", "items");
        list.setAttribute("role", "list");
        group.items.forEach((item) => list.append(renderItem(item)));
        box.append(list);
        groups.append(box);
      });
      panel.append(groups);
      panelsEl.append(panel);
    });
  }

  function selectTab(id, focus) {
    activeTab = id;
    tabsEl.querySelectorAll(".tab").forEach((tab) => {
      const on = tab.id === `tab-${id}`;
      tab.setAttribute("aria-selected", String(on));
      tab.tabIndex = on ? 0 : -1;
      if (on && focus) tab.focus();
    });
    panelsEl.querySelectorAll(".panel").forEach((panel) => {
      panel.hidden = panel.id !== `panel-${id}`;
    });
  }

  // Стрелки влево/вправо, Home и End переключают вкладки
  tabsEl.addEventListener("keydown", (e) => {
    const ids = MENU.map((s) => s.id);
    const i = ids.indexOf(activeTab);
    let next = null;
    if (e.key === "ArrowRight") next = ids[(i + 1) % ids.length];
    if (e.key === "ArrowLeft") next = ids[(i - 1 + ids.length) % ids.length];
    if (e.key === "Home") next = ids[0];
    if (e.key === "End") next = ids[ids.length - 1];
    if (next) {
      e.preventDefault();
      selectTab(next, true);
    }
  });

  /* ——— Открыто или закрыто ———
     Пн–Сб 8:00–21:00, Вс 10:00–21:00, кухня до 20:00. Время — ташкентское. */

  const statusEl = document.getElementById("status");
  const statusText = statusEl.querySelector(".status__text");
  const CLOSE = 21 * 60;
  const KITCHEN_CLOSE = 20 * 60;
  const openAt = (day) => (day === "Sun" ? 10 * 60 : 8 * 60);
  const DAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const fmt = (min) => `${Math.floor(min / 60)}:${String(min % 60).padStart(2, "0")}`;

  function tashkentNow() {
    const parts = new Intl.DateTimeFormat("en-GB", {
      timeZone: "Asia/Tashkent",
      weekday: "short",
      hour: "2-digit",
      minute: "2-digit",
      hourCycle: "h23",
    }).formatToParts(new Date());
    const get = (type) => parts.find((p) => p.type === type).value;
    return { day: get("weekday"), minutes: Number(get("hour")) * 60 + Number(get("minute")) };
  }

  function updateStatus() {
    let now;
    try { now = tashkentNow(); } catch (e) { return; }

    const opens = openAt(now.day);
    let text;
    let open = false;

    if (now.minutes >= opens && now.minutes < CLOSE) {
      open = true;
      text = tr("status.open");
      if (now.minutes < KITCHEN_CLOSE) text += `, ${tr("status.kitchen")}`;
    } else if (now.minutes < opens) {
      text = tr("status.closedToday").replace("{time}", fmt(opens));
    } else {
      const tomorrow = DAYS[(DAYS.indexOf(now.day) + 1) % 7];
      text = tr("status.closedTomorrow").replace("{time}", fmt(openAt(tomorrow)));
    }

    statusText.textContent = text;
    statusEl.classList.toggle("status--closed", !open);
    statusEl.hidden = false;
  }

  window.setInterval(updateStatus, 60 * 1000);

  applyLang(detectLang());
})();
