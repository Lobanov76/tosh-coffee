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

  const langToggle = document.querySelector(".lang__toggle");
  const langCode = document.querySelector(".lang__code");
  const langList = document.getElementById("lang-list");

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
    document.querySelectorAll("[data-i18n-title]").forEach((el) => {
      el.setAttribute("title", tr(el.dataset.i18nTitle));
    });
    document.querySelectorAll(".lang__list button").forEach((btn) => {
      const on = btn.dataset.lang === lang;
      if (on) btn.setAttribute("aria-current", "true"); else btn.removeAttribute("aria-current");
      if (on) {
        langCode.textContent = btn.dataset.code;
        langToggle.setAttribute("aria-label", `${tr("lang.label")}: ${btn.textContent}`);
      }
    });

    renderMenu();
    renderReviews();
    updateStatus();
  }

  /* Переключатель языка: виден только текущий, остальные — в выпадающем списке */
  function setLangOpen(open) {
    langList.hidden = !open;
    langToggle.setAttribute("aria-expanded", String(open));
  }
  langToggle.addEventListener("click", () => setLangOpen(langList.hidden));
  document.addEventListener("click", (e) => {
    if (!langList.hidden && !e.target.closest(".lang")) setLangOpen(false);
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && !langList.hidden) { setLangOpen(false); langToggle.focus(); }
  });
  langList.querySelectorAll("button").forEach((btn) => {
    btn.addEventListener("click", () => {
      applyLang(btn.dataset.lang);
      try { window.localStorage.setItem(STORE_KEY, lang); } catch (e) { /* без сохранения */ }
      setLangOpen(false);
      langToggle.focus();
    });
  });

  /* ——— Меню ——— */

  const tabsEl = document.getElementById("menu-tabs");
  const panelsEl = document.getElementById("menu-panels");


  const formatPrice =(n) => String(n).replace(/\B(?=(\d{3})+(?!\d))/g, " ");

  function el(tag, className, text) {
    const node = document.createElement(tag);
    if (className) node.className = className;
    if (text) node.textContent = text;
    return node;
  }

  // Строка меню: фото (или квадратик узора раздела, если фото нет), название, цена, пояснение
  function renderItem(item, pattern) {
    const li = el("li", "item");

    if (item.img) {
      const img = el("img", "item__photo");
      img.src = `img/menu/${item.img}.webp`;
      img.width = 240;
      img.height = 240;
      img.loading = "lazy";
      img.decoding = "async";
      img.alt = "";
      li.append(img);
    } else {
      const ph = el("span", `item__photo item__photo--empty band--${pattern}`);
      ph.setAttribute("aria-hidden", "true");
      li.append(ph);
    }

    const text = el("div", "item__text");
    const head = el("div", "item__head");
    const name = el("span", "item__name", item.n[lang]);
    if (item.isNew) name.append(" ", el("span", "item__new", tr("menu.new")));
    head.append(name);
    if (item.p) head.append(el("span", "item__price", formatPrice(item.p)));
    text.append(head);

    const parts = [];
    if (item.a) parts.push(`${item.a[0]} ${UNITS[item.a[1]][lang]}`);
    if (item.d && item.d[lang]) parts.push(item.d[lang]);
    if (parts.length) text.append(el("span", "item__meta", parts.join(", ")));
    li.append(text);
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

      const groups = el("div", "groups");
      section.groups.forEach((group) => {
        const box = el("section", "group");
        const head = el("div", "group__head");
        head.append(el("h3", "", group.title[lang]));
        if (group.note) head.append(el("span", "group__note", group.note[lang]));
        box.append(head);

        const list = el("ul", "items");
        list.setAttribute("role", "list");
        group.items.forEach((item) => list.append(renderItem(item, section.pattern)));
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

  // Кнопка «Всё меню кухни» сразу открывает нужную вкладку
  document.querySelectorAll("[data-open-tab]").forEach((link) => {
    link.addEventListener("click", () => selectTab(link.dataset.openTab, false));
  });

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

  /* ——— Отзывы ——— */

  const reviewsEl = document.getElementById("reviews");

  function renderReviews() {
    reviewsEl.replaceChildren();
    window.TOSH_REVIEWS.forEach(([name, text]) => {
      const fig = el("figure", "review");
      const quote = el("blockquote");
      quote.append(el("p", "", text[lang]));
      const cap = el("figcaption", "", name);
      const note = tr("reviews.translated");
      if (note) cap.append(el("span", "review__note", note));
      fig.append(quote, cap);
      reviewsEl.append(fig);
    });
  }

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
