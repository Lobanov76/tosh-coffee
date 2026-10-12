/* Тексты сайта и меню на трёх языках: ru — русский, uz — узбекский (латиница), en — английский.
   Чтобы поменять цену или название — правьте здесь, разметку трогать не нужно.
   В узбекском: oʻ и gʻ пишутся со знаком ʻ (U+02BB), разделительный знак — ’. */

(() => {
const t = (ru, uz, en) => ({ ru, uz, en });

window.TOSH_TEXT = {
  "meta.title": t(
    "Tosh — спешелти-кофейня в Ташкенте",
    "Tosh — Toshkentdagi specialty qahvaxona",
    "Tosh — specialty coffee in Tashkent"
  ),
  "meta.description": t(
    "Tosh qahvaxona на Авлиё-Ата, 128 — кофейня про кофе, город и детали: спешелти-кофе из зерна своей обжарки, десерты и завтраки весь день. Меню на русском, узбекском и английском.",
    "Tosh qahvaxona, Avliyo Ota koʻchasi, 128: oʻzimiz qovurgan donlardan specialty qahva, desertlar va kun boʻyi nonushta.",
    "Tosh qahvaxona at 128 Avliyo Ota St: specialty coffee roasted in-house, desserts and all-day breakfast in Tashkent."
  ),
  "lang.label": t("Язык сайта", "Sayt tili", "Site language"),
  "nav.about": t("О нас", "Biz haqimizda", "About"),
  "nav.menu": t("Меню", "Menyu", "Menu"),
  "nav.visit": t("Адрес", "Manzil", "Find us"),

  "hero.lead": t(
    "Спешелти-кофе из зерна своей обжарки, десерты и завтраки весь день.",
    "Oʻzimiz qovurgan donlardan specialty qahva, desertlar va kun boʻyi nonushta.",
    "Specialty coffee from beans we roast ourselves, desserts and breakfast all day."
  ),
  "hero.menu": t("Смотреть меню", "Menyuni koʻrish", "See the menu"),
  "hero.route": t("Как добраться", "Qanday borish", "Get directions"),
  "hero.alt": t("Светлый зал Tosh: стена гипсовых барельефов с надписью tosh, кресла и барные табуреты", "Tosh yorugʻ zali: tosh yozuvli gips barelyeflar devori, kreslolar va bar kursilari", "The bright Tosh hall: a wall of plaster reliefs with the word tosh, armchairs and bar stools"),

  "status.open": t("Открыто до 21:00", "Ochiq, 21:00 gacha", "Open until 21:00"),
  "status.kitchen": t("кухня до 20:00", "oshxona 20:00 gacha", "kitchen until 20:00"),
  "status.closedToday": t("Закрыто, откроемся в {time}", "Yopiq, {time} da ochamiz", "Closed, opening at {time}"),
  "status.closedTomorrow": t("Закрыто, откроемся завтра в {time}", "Yopiq, ertaga {time} da ochamiz", "Closed, opening tomorrow at {time}"),

  "about.title": t("Ташкент, который мы любим", "Biz sevgan Toshkent", "The Tashkent we love"),
  "about.text": t(
    "Tosh — кофейня про кофе, город и детали. Пространство вдохновлено ташкентским модернизмом: дерево, металл, зелень, мебель в духе mid‑century, городские барельефы и виниловые пластинки.",
    "Tosh — qahva, shahar va mayda detallar haqidagi qahvaxona. Makon Toshkent modernizmidan ilhomlangan: yogʻoch, metall, koʻkalamzor, mid‑century uslubidagi mebel, shahar barelyeflari va vinil plastinkalar.",
    "Tosh is a café about coffee, the city and the details. The space draws on Tashkent modernism: wood, metal, greenery, mid‑century furniture, city reliefs and vinyl records."
  ),
  "about.name": t(
    "«Тош» по-узбекски — камень, а Тошкент — каменный город.",
    "«Tosh» — tosh, Toshkent esa — tosh shahar.",
    "In Uzbek, tosh means stone, and Toshkent is the city of stone."
  ),
  "about.alt": t("Яйца TOSH и кофе на столе, рядом синие кресла mid‑century", "Stolda TOSH tuxumlari va qahva, yonida koʻk mid‑century kreslolar", "TOSH eggs and coffee on the table, with blue mid‑century armchairs"),
  "f1.title": t("Своя обжарка", "Oʻzimiz qovuramiz", "Roasted in-house"),
  "f1.text": t(
    "В основе — зерно собственной обжарки и современное оборудование. Эспрессо, V60, батч-брю и фильтр-шот.",
    "Asosida — oʻzimiz qovurgan don va zamonaviy uskunalar. Espresso, V60, batch brew va filtr-shot.",
    "Built on beans we roast ourselves and modern equipment. Espresso, V60, batch brew and filter shots."
  ),
  "f2.title": t("Завтраки весь день", "Kun boʻyi nonushta", "All-day breakfast"),
  "f2.text": t(
    "Завтраки, салаты и лёгкие блюда — пока работает кухня, до 20:00.",
    "Nonushtalar, salatlar va yengil taomlar — oshxona ishlaguncha, 20:00 gacha.",
    "Breakfasts, salads and light dishes while the kitchen is open, until 20:00."
  ),
  "f3.title": t("Авторские напитки", "Mualliflik ichimliklari", "Signature drinks"),
  "f3.text": t(
    "Урик шарбати, лимонад из фейхоа, колд-брю с арбузом и матча «Банановое облако».",
    "Oʻrik sharbati, feyxoa limonadi, tarvuzli cold brew va «Bananli matcha buluti».",
    "Dried apricot sharbat, feijoa lemonade, watermelon cold brew and a banana matcha cloud."
  ),
  "f4.title": t("Винил и зелень", "Vinil va koʻkalamzor", "Vinyl and greenery"),
  "f4.text": t(
    "Играют виниловые пластинки, в зале много света и растений, есть столы с розетками.",
    "Vinil plastinkalar yangraydi, zalda yorugʻlik va oʻsimliklar koʻp, rozetkali stollar bor.",
    "Vinyl on the turntable, plenty of light and plants, and tables with power outlets."
  ),

  "atmos.title": t("Атмосфера", "Atmosfera", "Atmosphere"),
  "atmos.lead": t(
    "Дерево, металл, зелень и мебель в духе mid‑century. Барельефы с городскими сюжетами, винил и стальные подносы. Днём здесь работают и встречаются, вечером пьют кофе под пластинки.",
    "Yogʻoch, metall, koʻkalamzor va mid‑century uslubidagi mebel. Shahar syujetli barelyeflar, vinil va poʻlat patnislar. Kunduzi bu yerda ishlashadi va uchrashishadi, kechqurun plastinkalar ostida qahva ichishadi.",
    "Wood, metal, greenery and mid‑century furniture. Reliefs of city scenes, vinyl and steel trays. By day people work and meet here; in the evening, it is coffee and records."
  ),
  "atmos.relief": t("Барельефы и гости", "Barelyeflar va mehmonlar", "Reliefs and guests"),
  "atmos.bar": t("Бар с утра", "Ertalabki bar", "The bar in the morning"),
  "atmos.hall": t("Светлый зал у окон", "Deraza yonidagi yorugʻ zal", "The bright hall by the windows"),
  "atmos.lamps": t("Днём в зале", "Kunduzi zalda", "The hall by day"),
  "atmos.evening": t("Вечером", "Kechqurun", "In the evening"),
  "atmos.terrace": t("Летняя терраса", "Yozgi ayvon", "Summer terrace"),

  "kitchen.title": t("Кухня", "Oshxona", "Kitchen"),
  "kitchen.lead": t(
    "Завтраки весь день, салаты и лёгкие блюда. Фишка меню — завтрак TOSH: горячая лепёшка, каймак и джем. Всё дело в простоте.",
    "Kun boʻyi nonushta, salatlar va yengil taomlar. Menyuning oʻziga xosligi — TOSH nonushtasi: issiq non, qaymoq va jem. Butun sir soddalikda.",
    "Breakfast all day, salads and light dishes. The signature is the TOSH breakfast: hot flatbread, kaymak and jam. It is all about simplicity."
  ),
  "kitchen.all": t("Всё меню кухни", "Oshxona menyusi", "Full kitchen menu"),
  "d1.name": t("Завтрак TOSH", "TOSH nonushtasi", "TOSH breakfast"),
  "d1.text": t("Горячая лепёшка, каймак и джем. Фишка — в простоте", "Issiq non, qaymoq va jem. Butun sir — soddalikda", "Hot flatbread, kaymak and jam. Simplicity is the point"),
  "d2.name": t("Шакшука TOSH", "TOSH shakshukasi", "TOSH shakshuka"),
  "d2.text": t("Яйца в томатном соусе с куртом и чёрным тмином, к ней лепёшка", "Qurt va sedana bilan pomidor sousidagi tuxum, yonida non", "Eggs in tomato sauce with kurt and nigella seeds, with flatbread"),
  "d3.name": t("Кофейный йогурт с чиа", "Chia bilan qahvali yogurt", "Coffee yogurt with chia"),
  "d3.text": t("Жареный банан, гранола, орехи, мёд и корица", "Qovurilgan banan, granola, yongʻoq, asal va dolchin", "Fried banana, granola, nuts, honey and cinnamon"),
  "d4.name": t("Карамельный тост с сыром", "Karamelli pishloqli tost", "Caramel toast with cheese"),
  "d4.text": t("Бриошь, моцарелла и гауда, карамель из мёда, сметана", "Brioch, motsarella va gauda, asalli karamel, smetana", "Brioche, mozzarella and gouda, honey caramel, sour cream"),

  "desserts.title": t("Десерты", "Desertlar", "Desserts"),
  "desserts.lead": t(
    "Печём к кофе: печенье, рулеты, брауни и торты. Ассортимент на витрине меняется — спросите у бариста, что есть сегодня.",
    "Qahvaga pishiramiz: pechenye, rulet, brauni va tortlar. Vitrinadagi tanlov oʻzgarib turadi — bugun nima borligini baristadan soʻrang.",
    "Baked to go with coffee: cookies, rolls, brownies and cakes. The counter changes, so ask the barista what is on today."
  ),
  "desserts.note": t("цены — на витрине", "narxlar vitrinada", "prices at the counter"),
  "ds1": t("Шоколадное печенье с карамелью и куртом", "Karamel va qurt bilan shokoladli pechenye", "Chocolate cookie with caramel and kurt"),
  "ds2": t("Овсяное печенье без пшеничной муки", "Bugʻdoy unisiz suli pechenyesi", "Oat cookie without wheat flour"),
  "ds3": t("Маковый рулет с апельсином", "Apelsinli makli rulet", "Poppy seed roll with orange"),
  "ds4": t("Чиз-брауни с халвой и чёрным тмином", "Holva va qora sedana bilan chiz-brauni", "Cheese brownie with halva and nigella seeds"),
  "ds5": t("Медовый торт", "Asalli tort", "Honey cake"),


  "menu.title": t("Меню", "Menyu", "Menu"),
  "menu.note": t("Цены в сумах.", "Narxlar soʻmda.", "Prices in Uzbek soʻm."),

  "reviews.title": t("Гости о нас", "Mehmonlar fikri", "What guests say"),
  "reviews.rating": t("4,7 на Яндекс Картах", "Yandex Xaritalarda 4,7", "4.7 on Yandex Maps"),
  "reviews.all": t("Все отзывы", "Barcha sharhlar", "All reviews"),
  "reviews.translated": t("", "Rus tilidan tarjima", "Translated from Russian"),
  "visit.title": t("Как нас найти", "Bizni qayerdan topish mumkin", "Find us"),
  "visit.address": t(
    "Ташкент, Мирабадский район, улица Авлиё‑Ата, 128",
    "Toshkent, Mirobod tumani, Avliyo Ota koʻchasi, 128",
    "128 Avliyo Ota Street, Mirobod district, Tashkent"
  ),
  "visit.hours": t("Часы работы", "Ish vaqti", "Opening hours"),
  "visit.weekdays": t("Пн–Сб", "Du–Sha", "Mon–Sat"),
  "visit.sunday": t("Вс", "Yak", "Sun"),
  "visit.kitchen": t("Кухня работает до 20:00.", "Oshxona 20:00 gacha ishlaydi.", "The kitchen closes at 20:00."),
  "visit.phone": t("Телефон", "Telefon", "Phone"),
  "visit.yandex": t("Яндекс Карты", "Yandex Xaritalar", "Yandex Maps"),
  "visit.call": t("Позвонить", "Qoʻngʻiroq qilish", "Call"),
  "visit.map": t("Tosh на карте", "Tosh xaritada", "Tosh on the map"),

  "footer.city": t("Ташкент", "Toshkent", "Tashkent"),
};

/* Отзывы гостей с Яндекс Карт (оригиналы на русском, немного сокращены) */
window.TOSH_REVIEWS = [
  ["Ольга Матяш", t(
    "С чего точно стоит начать — кофе. Это самый вкусный кофе в Ташкенте, который я пробовала. Идеальный! Брала карамелизированные тосты с сыром — очень вкусно и сытно.",
    "Albatta qahvadan boshlash kerak. Toshkentda tatib koʻrganlarim ichida eng mazali qahva. Mukammal! Pishloqli karamel tost oldim — juda mazali va toʻyimli.",
    "Start with the coffee. It is the best coffee I’ve had in Tashkent. Perfect! I had the caramel toast with cheese, delicious and filling."
  )],
  ["Анна Загуменникова", t(
    "Очень уютное место с красивым интерьером — всё продумано до мелочей, атмосфера располагает, и хочется остаться подольше. Еда вкусная, всё свежее и красиво подано.",
    "Chiroyli interyerli juda shinam joy — hamma narsa mayda detallargacha oʻylangan, uzoqroq qolging keladi. Taomlar mazali, hammasi yangi va chiroyli tortilgan.",
    "A very cosy place with a beautiful interior, thought through to the details. You want to stay longer. The food is tasty, fresh and beautifully served."
  )],
  ["Артём Г.", t(
    "Отличное место, где можно попробовать кофе, приготовленный альтернативными способами на разном зерне. Крутой дизайн и живой винил.",
    "Turli donlarda muqobil usullar bilan tayyorlangan qahvani tatib koʻrish mumkin boʻlgan ajoyib joy. Zoʻr dizayn va jonli vinil.",
    "A great place to try coffee brewed by alternative methods on different beans. Great design and live vinyl."
  )],
  ["Василина А.", t(
    "Самая вкусная V60 в Ташкенте. Драники со страчателлой — очень вкусные! Атмосфера — восторг!",
    "Toshkentdagi eng mazali V60. Strachatellali dranikilar juda mazali! Atmosfera — ajoyib!",
    "The best V60 in Tashkent. The pancakes with stracciatella are delicious! The atmosphere is a delight!"
  )],
  ["Зоя Коваленко", t(
    "Место уютное, всё выглядит аккуратно и со вкусом. Еда вкусная, чувствуется, что готовят с вниманием. Пробовала матча-латте — очень понравился.",
    "Joy shinam, hamma narsa did bilan qilingan. Taomlar mazali, e’tibor bilan tayyorlanishi sezilib turadi. Matcha-latte ichib koʻrdim — juda yoqdi.",
    "Cosy, neat and tasteful. The food is good and you can tell it is made with care. I tried the matcha latte and loved it."
  )],
  ["Ангелина", t(
    "Вкусный капучино, нереальная творожно-маковая запеканка. Можно собрать хороший завтрак, ну и лепёшки с каймаком и джемом — в самое ♥",
    "Mazali kapuchino, aql bovar qilmas makli zapekanka. Yaxshi nonushta yigʻish mumkin, qaymoq va jemli non esa — yurakka ♥",
    "Tasty cappuccino and an unreal poppy seed cottage cheese bake. You can put together a great breakfast, and the flatbread with kaymak and jam goes straight to the ♥"
  )],
  ["Eva T.", t(
    "Исключительно высокое качество кофе, интересный сорт зерна. Еда очень вкусная, продукты свежие. Порекомендовала бы друзьям и вернулась бы сама.",
    "Qahva sifati juda yuqori, qiziqarli don navi. Taomlar juda mazali, mahsulotlar yangi. Doʻstlarimga tavsiya qilardim va oʻzim ham qaytardim.",
    "Exceptional coffee quality and an interesting bean. The food is very good and fresh. I would recommend it to friends and come back myself."
  )],
  ["Виталина Мельцова", t(
    "Очень стильное место Ташкента. Кофе один из самых достойных. Красивый интерьер, пропитанный любовью к Ташкенту.",
    "Toshkentning juda didli maskani. Qahvasi eng munosiblaridan. Toshkentga muhabbat bilan yoʻgʻrilgan chiroyli interyer.",
    "One of the most stylish places in Tashkent, with some of its best coffee. A beautiful interior steeped in love for the city."
  )],
  ["Александр Дорогов", t(
    "Стильно, современно. Ташкент, каким он должен быть.",
    "Didli, zamonaviy. Toshkent qanday boʻlishi kerak boʻlsa, xuddi shunday.",
    "Stylish and modern. Tashkent as it should be."
  )],
  ["Neda Golshan", t(
    "Очень приятная атмосфера: можно часами сидеть и наслаждаться работой и встречами.",
    "Juda yoqimli atmosfera: soatlab oʻtirib, ish va uchrashuvlardan zavqlanish mumkin.",
    "A really pleasant atmosphere. You can sit for hours, working or meeting people."
  )],
];

/* Фото позиций меню (из сторис Tosh): русское название → файл в img/menu/ */
window.TOSH_PHOTOS = {
  "Эспрессо": "espresso", "Эспрессо макиато": "macchiato", "Американо": "americano", "V60": "v60",
  "Бариста-сет": "barista-set", "Флэт уайт": "flat-white", "Капучино": "cappuccino", "Латте": "latte",
  "Раф ванильный": "raf", "Колд-брю арбуз": "cb-tarvuz", "Колд-брю шарбат": "cb-sharbat",
  "Эспрессо-тоник": "espresso-tonic", "Айс латте": "iced-latte", "Оранжино": "orangino", "Протеиновый кофе": "protein",
  "Матча-латте, горячий": "matcha-hot", "Матча-латте, холодный": "matcha-iced", "Ходзича-латте, горячий": "hojicha-hot",
  "Ходзича-латте, холодный": "hojicha-iced", "Матча-тоник": "matcha-tonic", "Матча «Банановое облако»": "banana-matcha",
  "Урик шарбати": "orik", "Лимонад «Фейхоа»": "feijoa", "Райхон шарбати": "rayhon", "Зелёный детокс": "detox",
  "Завтрак TOSH": "tosh-breakfast",
  "Сыр гауда": "gouda", "Мортаделла": "mortadella", "Куриная грудка": "chicken", "Филе тунца жареное": "tuna",
  "Креветки": "shrimp", "Лосось слабосолёный": "salmon", "Яйцо": "egg", "Авокадо": "avocado", "Салатный микс": "salad-mix", "Батат фри": "batat",
  "Шакшука TOSH": "shakshuka", "Яйца TOSH с йогуртом и солёной гранолой": "tosh-eggs",
  "Блинчики с курицей и грибами": "chicken-crepes", "Гречневая каша с яйцом и соусом песто": "buckwheat",
  "Овсяная каша с шоколадом и бананом": "oatmeal", "Кофейный йогурт с чиа и жареным бананом": "yogurt",
  "Карамельный тост с сыром": "toast", "Творожная запеканка с маком": "zapekanka",
  "Сырники из рикотты с черничным кремом": "syrniki", "Блинчики с яблоком и корицей": "apple-crepes",
  "Зелёный салат": "green-salad", "Протеиновый боул с курицей": "bowl-chicken", "Протеиновый боул с филе тунца": "bowl-tuna",
  "С тунцом": "sandwich-tuna", "С курицей": "sandwich-chicken",
  "С мортаделлой": "fb-mortadella", "С лососем": "fb-salmon", "Со страчателлой и трюфельной пастой": "fb-stracciatella",
  "С домашней баклажанной икрой": "fb-eggplant", "С паштетом из куриной печени": "fb-pate", "С авокадо и солёной гранолой": "fb-avocado",
  "Шоколадное печенье с карамелью и куртом": "cookie-kurt", "Овсяное печенье без пшеничной муки": "cookie-oat",
  "Маковый рулет с апельсином": "poppy-roll", "Чиз-брауни с халвой и чёрным тмином": "brownie", "Медовый торт": "honey-cake",
};

/* Единицы объёма и веса */
window.TOSH_UNITS = {
  ml: t("мл", "ml", "ml"),
  g: t("г", "g", "g"),
  pc: t("шт.", "dona", "pc"),
};

/* Меню. Строка блюда: [название, объём или вес, цена, пояснение (необязательно)].
   Объём: [число, "ml" | "g" | "pc"] или null. Цена — в сумах. */
window.TOSH_MENU = [
  {
    id: "coffee",
    pattern: "rose",
    label: t("Кофе", "Qahva", "Coffee"),
    groups: [
      {
        title: t("Чёрный кофе", "Qora qahva", "Black coffee"),
        items: [
          [t("Эспрессо", "Espresso", "Espresso"), [40, "ml"], 35000],
          [t("Эспрессо макиато", "Espresso makiato", "Espresso macchiato"), [50, "ml"], 45000],
          [t("Американо", "Americano", "Americano"), [200, "ml"], 35000],
          [t("Батч-брю", "Batch brew", "Batch brew"), [200, "ml"], 35000],
          [t("Фильтр-шот", "Filtr-shot", "Filter shot"), [50, "ml"], 60000],
          [t("V60", "V60", "V60"), [250, "ml"], 60000],
          [t("Бариста-сет", "Barista set", "Barista tasting set"), [370, "ml"], 80000,
            t("эспрессо, фильтр и флэт уайт", "espresso, filtr va flat white", "espresso, filter and flat white")],
        ],
      },
      {
        title: t("Кофе с молоком", "Sutli qahva", "Coffee with milk"),
        items: [
          [t("Флэт уайт", "Flat white", "Flat white"), [180, "ml"], 50000],
          [t("Капучино", "Cappuccino", "Cappuccino"), [250, "ml"], 50000],
          [t("Латте", "Latte", "Latte"), [250, "ml"], 50000],
          [t("Раф ванильный", "Vanilli raf", "Vanilla raf"), [250, "ml"], 55000],
          [t("Какао", "Kakao", "Cocoa"), [250, "ml"], 45000],
        ],
      },
      {
        title: t("Холодный кофе", "Sovuq qahva", "Cold coffee"),
        items: [
          [t("Колд-брю арбуз", "Cold brew tarvuz", "Cold brew watermelon"), [230, "ml"], 45000],
          [t("Колд-брю шарбат", "Cold brew sharbat", "Cold brew sharbat"), [230, "ml"], 45000,
            t("", "", "with dried fruits")],
          [t("Колд батч вишня-бергамот", "Sovuq olchali batch", "Cold batch brew cherry–bergamot"), [230, "ml"], 45000],
          [t("Эспрессо-тоник", "Espresso-tonik", "Espresso tonic"), [350, "ml"], 50000],
          [t("Айс латте", "Ays-latte", "Iced latte"), [350, "ml"], 50000],
          [t("Айс капучино", "Ays-cappuccino", "Iced cappuccino"), [350, "ml"], 50000],
          [t("Оранжино", "Orangino", "Orangino"), [350, "ml"], 60000],
          [t("Протеиновый кофе", "Proteinli qahva", "Protein coffee"), [350, "ml"], 60000],
        ],
      },
    ],
  },
  {
    id: "drinks",
    pattern: "ochre",
    label: t("Матча и чай", "Matcha va choy", "Matcha & tea"),
    groups: [
      {
        title: t("Матча", "Matcha", "Matcha"),
        items: [
          [t("Матча-латте, горячий", "Matcha-latte (issiq)", "Matcha latte, hot"), [200, "ml"], 50000],
          [t("Матча-латте, холодный", "Matcha-latte (sovuq)", "Matcha latte, iced"), [350, "ml"], 50000],
          [t("Ходзича-латте, горячий", "Hojicha-latte (issiq)", "Hojicha latte, hot"), [200, "ml"], 50000],
          [t("Ходзича-латте, холодный", "Hojicha-latte (sovuq)", "Hojicha latte, iced"), [350, "ml"], 50000],
          [t("Матча-тоник", "Matcha-tonik", "Matcha tonic"), [350, "ml"], 55000],
          [t("Матча «Банановое облако»", "Bananli matcha buluti", "Banana matcha cloud"), [350, "ml"], 60000],
        ],
      },
      {
        title: t("Авторские холодные напитки", "Mualliflik sovuq ichimliklari", "Signature cold drinks"),
        items: [
          [t("Урик шарбати", "Oʻrik sharbati", "Dried fruit compote"), [230, "ml"], 40000,
            t("яблоко, курага, кишмиш, специи, мёд", "olma, quritilgan oʻrik, kishmish, ziravorlar, asal", "apple, dried apricot, raisins, spices, honey")],
          [t("Лимонад «Фейхоа»", "Feyxoa limonadi", "Feijoa lemonade"), [230, "ml"], 40000,
            t("фейхоа, банан, ананас, газированная вода", "feyxoa, banan, ananas, gazlangan suv", "feijoa, banana, pineapple, sparkling water")],
          [t("Райхон шарбати", "Rayhon sharbati", "Rayhon drink"), [230, "ml"], 40000,
            t("райхон, красная смородина, клюква, алоэ", "rayhon, qizil smorodina, klyukva, aloe", "basil, redcurrant, cranberry, aloe")],
          [t("Зелёный детокс", "Yashil detoks", "Green detox"), [230, "ml"], 45000,
            t("щавель, лимон, яблоко, апельсин", "shovul, limon, olma, apelsin", "sorrel, lemon, apple, orange")],
        ],
      },
      {
        title: t("Чай", "Choy", "Tea"),
        note: t("чайник 500 мл", "choynak 500 ml", "500 ml pot"),
        items: [
          [t("Горный чай", "Togʻ choyi", "Mountain tea"), null, 40000],
          [t("Зелёный османтус", "Yashil osmantus", "Green osmanthus"), null, 50000],
          [t("Ганпаудер", "Ganpauder", "Gunpowder"), null, 40000],
          [t("Да Хун Пао", "Da Hong Pao", "Da Hong Pao"), null, 50000],
          [t("Эрл Грей", "Earl Grey", "Earl Grey"), null, 40000],
          [t("Шир чай", "Shir choy", "Shir choy"), null, 50000,
            t("", "", "Central Asian tea with milk and butter")],
        ],
      },
    ],
  },
  {
    id: "kitchen",
    pattern: "lattice",
    label: t("Кухня", "Oshxona", "Kitchen"),
    groups: [
      {
        title: t("Завтрак TOSH", "TOSH nonushtasi", "TOSH breakfast"),
        items: [
          [t("Завтрак TOSH", "TOSH nonushtasi", "TOSH breakfast"), null, 35000,
            t("горячая лепёшка ½, каймак, джем", "issiq non, qaymoq, jem", "hot flatbread, kaymak (Uzbek clotted cream), jam")],
        ],
      },
      {
        title: t("Добавки к завтраку или салату", "Nonushta yoki salatga qoʻshimchalar", "Add-ons for breakfast or salad"),
        items: [
          [t("Сыр гауда", "Gauda pishlogʻi", "Gouda cheese"), [50, "g"], 20000],
          [t("Мортаделла", "Mortadella", "Mortadella"), [50, "g"], 20000],
          [t("Куриная грудка", "Tovuq goʻshti", "Baked chicken breast"), [100, "g"], 30000],
          [t("Филе тунца жареное", "Qovurilgan tunets filesi", "Fried tuna fillet"), [80, "g"], 45000],
          [t("Креветки", "Krevetkalar", "Fried shrimp"), [50, "g"], 70000],
          [t("Лосось слабосолёный", "Yengil tuzlangan losos", "Lightly salted salmon"), [50, "g"], 60000],
          [t("Яйцо", "Tuxum", "Egg"), [1, "pc"], 10000,
            t("всмятку, омлет или глазунья", "yumshoq qaynatilgan, omlet yoki quymoq", "soft-boiled, omelette or sunny-side up")],
          [t("Авокадо", "Avokado", "Avocado"), ["½", "pc"], 40000],
          [t("Салатный микс", "Salat miksi", "Salad mix"), [80, "g"], 40000],
          [t("Батат фри", "Batat fri", "Sweet potato fries"), [150, "g"], 60000,
            t("с трюфельным майонезом", "trufelli mayonez bilan", "with truffle mayo")],
        ],
      },
      {
        title: t("Завтраки", "Nonushtalar", "Breakfast"),
        items: [
          [t("Горячая катлама, каймак, джем", "Qatlama, qaymoq, jem", "Hot katlama, kaymak, jam"), null, 35000],
          [t("Шакшука TOSH", "TOSH shakshukasi", "TOSH shakshuka"), null, 70000,
            t("яйца в томатном соусе, курт, чёрный тмин", "pomidor sousidagi tuxum, qurt, sedana", "eggs in tomato sauce, kurt, nigella seeds")],
          [t("Яйца TOSH с йогуртом и солёной гранолой", "TOSH tuxumlari", "TOSH eggs with yogurt sauce"), null, 70000,
            t("", "yogurt sousi va shoʻr granola bilan", "and savoury granola")],
          [t("Блинчики с курицей и грибами", "Tovuq va qoʻziqorinli blinchiklar", "Chicken and mushroom crepes"), null, 65000,
            t("в сливочном соусе", "qaymoqli sousda", "in cream sauce")],
          [t("Драники из кабачка со страчателлой", "Qovoqli draniki strachatella bilan", "Zucchini pancakes with stracciatella"), null, 65000],
          [t("Пшённая каша с трюфельным кремом", "Trufel kremli tariq boʻtqasi", "Millet porridge with truffle cream"), null, 65000,
            t("с грибами и луком", "qoʻziqorin va piyoz bilan", "with mushrooms and onion")],
          [t("Гречневая каша с яйцом и соусом песто", "Tuxum va pesto sousi bilan grechka boʻtqasi", "Buckwheat porridge with egg and pesto"), null, 65000,
            t("пармезан, кефир", "parmezan, kefir", "parmesan, kefir")],
        ],
      },
      {
        title: t("Сладкие завтраки", "Shirin nonushtalar", "Sweet breakfast"),
        items: [
          [t("Овсяная каша с шоколадом и бананом", "Shokoladli suli boʻtqasi", "Chocolate oatmeal with fried banana"), null, 65000],
          [t("Кофейный йогурт с чиа и жареным бананом", "Chia va qovurilgan banan bilan qahvali yogurt", "Coffee yogurt with chia and fried banana"), null, 85000,
            t("гранола, орехи, мёд, корица", "granola, yongʻoq, asal, dolchin", "granola, nuts, honey, cinnamon")],
          [t("Карамельный тост с сыром", "Karamelli pishloqli tost", "Caramel toast with cheese"), null, 75000,
            t("бриошь, моцарелла и гауда, сметана", "brioch, motsarella va gauda, smetana", "brioche, mozzarella and gouda, sour cream")],
          [t("Творожная запеканка с маком", "Tvorog va makli zapekanka", "Cottage cheese bake with poppy seeds"), null, 60000,
            t("соус из вишни и клюквы", "olcha va klyukva sousi", "cherry and cranberry sauce")],
          [t("Сырники из рикотты с черничным кремом", "Rikottali sirniklar", "Ricotta pancakes with blueberry cream"), null, 65000,
            t("", "chernika kremi bilan", "")],
          [t("Блинчики с яблоком и корицей", "Olma va dolchinli blinchiklar", "Apple and cinnamon crepes"), null, 60000],
        ],
      },
      {
        title: t("Салаты и боулы", "Salatlar va boullar", "Salads and bowls"),
        items: [
          [t("Зелёный салат", "Yashil salat", "Green salad"), null, 90000,
            t("кабачок, редис, авокадо, брокколи, эдамаме", "qovoqcha, rediska, avokado, brokkoli, edamame", "courgette, radish, avocado, broccoli, edamame")],
          [t("Протеиновый боул с курицей", "Tovuqli protein boul", "Protein bowl with chicken"), null, 90000,
            t("булгур, брокколи, нут, кунжутно-имбирный соус", "bulgur, brokkoli, noʻxat, kunjut-zanjabil sousi", "bulgur, broccoli, chickpeas, sesame-ginger dressing")],
          [t("Протеиновый боул с филе тунца", "Tunetsli protein boul", "Protein bowl with tuna"), null, 150000,
            t("киноа, батат, авокадо, брокколи", "kinoa, batat, avokado, brokkoli", "quinoa, sweet potato, avocado, broccoli")],
        ],
      },
      {
        title: t("Сэндвичи", "Sendvichlar", "Sandwiches"),
        items: [
          [t("С тунцом", "Tunetsli sendvich", "Tuna sandwich"), null, 100000,
            t("бриошь, крем-чиз, яйцо, вяленые томаты", "brioch, krem-chiz, tuxum, quritilgan pomidor", "brioche, cream cheese, egg, sun-dried tomatoes")],
          [t("С курицей", "Tovuqli sendvich", "Chicken sandwich"), null, 100000,
            t("бриошь, крем-чиз, огурец, грецкий орех, оливки", "brioch, krem-chiz, bodring, yongʻoq, zaytun", "brioche, cream cheese, cucumber, walnuts, olives")],
        ],
      },
      {
        title: t("Бутерброды на лепёшке", "Non buterbrodlar", "Uzbek flatbread sandwiches"),
        items: [
          [t("С мортаделлой", "Mortadellali", "With mortadella"), null, 45000],
          [t("С лососем", "Lososli", "With salmon"), null, 85000],
          [t("Со страчателлой и трюфельной пастой", "Strachatella va trufel bilan", "With stracciatella and truffle paste"), null, 95000],
          [t("С домашней баклажанной икрой", "Baqlajon ikrasi bilan", "With homemade aubergine spread"), null, 45000],
          [t("С паштетом из куриной печени", "Tovuq jigaridan pashtet bilan", "With chicken liver pâté"), null, 50000],
          [t("С авокадо и солёной гранолой", "Avokado va shoʻr granola bilan", "With avocado and savoury granola"), null, 80000],
        ],
      },
    ],
  },
  {
    id: "desserts",
    pattern: "cocoa",
    label: t("Десерты", "Desertlar", "Desserts"),
    groups: [
      {
        title: t("Десерты", "Desertlar", "Desserts"),
        note: t("цены — на витрине", "narxlar vitrinada", "prices at the counter"),
        items: [
          [t("Шоколадное печенье с карамелью и куртом", "Karamel va qurt bilan shokoladli pechenye", "Chocolate cookie with caramel and kurt"), null, null],
          [t("Овсяное печенье без пшеничной муки", "Bugʻdoy unisiz suli pechenyesi", "Oat cookie without wheat flour"), null, null],
          [t("Маковый рулет с апельсином", "Apelsinli makli rulet", "Poppy seed roll with orange"), null, null],
          [t("Чиз-брауни с халвой и чёрным тмином", "Holva va qora sedana bilan chiz-brauni", "Cheese brownie with halva and nigella seeds"), null, null],
          [t("Медовый торт", "Asalli tort", "Honey cake"), null, null],
        ],
      },
    ],
  },
];
})();
