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
  "atmos.bar": t("Световой куб над баром", "Bar ustidagi yorugʻ kub", "The light box over the bar"),
  "atmos.hall": t("Светлый зал у окон", "Deraza yonidagi yorugʻ zal", "The bright hall by the windows"),
  "atmos.lamps": t("За длинным столом", "Uzun stol atrofida", "At the long table"),
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
    "Печём к кофе: печенье, канеле, рулеты, брауни, тирамису и медовый торт. Полный список — в меню.",
    "Qahvaga pishiramiz: pechenye, kanele, rulet, brauni, tiramisu va asalli tort. Toʻliq roʻyxat — menyuda.",
    "Baked to go with coffee: cookies, canelés, rolls, brownies, tiramisu and honey cake. The full list is in the menu."
  ),
  "desserts.note": t("цены — на витрине", "narxlar vitrinada", "prices at the counter"),
  "ds1": t("Шоколадное печенье с карамелью и куртом", "Karamel va qurt bilan shokoladli pechenye", "Chocolate cookie with caramel and kurt"),
  "ds2": t("Овсяное печенье без пшеничной муки", "Bugʻdoy unisiz suli pechenyesi", "Oat cookie without wheat flour"),
  "ds3": t("Маковый рулет с апельсином", "Apelsinli makli rulet", "Poppy seed roll with orange"),
  "ds4": t("Чиз-брауни с халвой и чёрным тмином", "Holva va qora sedana bilan chiz-brauni", "Cheese brownie with halva and nigella seeds"),
  "ds5": t("Медовый торт", "Asalli tort", "Honey cake"),


  "menu.title": t("Меню", "Menyu", "Menu"),
  "order.title": t("Заказать с собой или с доставкой", "Olib ketish yoki yetkazib berish", "Order for pickup or delivery"),
  "order.tg": t("Заказать в Telegram", "Telegramda buyurtma", "Order on Telegram"),
  "order.yandex": t("Доставка — Яндекс Еда", "Yetkazish — Yandex Eda", "Delivery — Yandex Eats"),
  "bar.label": t("Быстрые действия", "Tezkor amallar", "Quick actions"),
  "bar.menu": t("Меню", "Menyu", "Menu"),
  "bar.order": t("Заказать", "Buyurtma", "Order"),
  "bar.route": t("Маршрут", "Yoʻnalish", "Directions"),
  "bar.call": t("Позвонить", "Qoʻngʻiroq", "Call"),
  "menu.new": t("Новинка", "Yangi", "New"),
  "menu.note": t("Цены в сумах.", "Narxlar soʻmda.", "Prices in Uzbek soʻm."),

  "reviews.title": t("Гости о нас", "Mehmonlar fikri", "What guests say"),
  "reviews.rating": t("4,7 на Яндекс Картах", "Yandex Xaritalarda 4,7", "4.7 on Yandex Maps"),
  "reviews.all": t("Все отзывы", "Barcha sharhlar", "All reviews"),
  "reviews.more": t("Ещё 6 отзывов", "Yana 6 ta sharh", "6 more reviews"),
  "reviews.less": t("Свернуть", "Yigʻish", "Show less"),
  "reviews.stars": t("Оценка 5 из 5", "Baho: 5 dan 5", "Rated 5 out of 5"),
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
  ), 5],
  ["Василина А.", t(
    "Самая вкусная V60 в Ташкенте. Драники со страчателлой — очень вкусные! Атмосфера — восторг!",
    "Toshkentdagi eng mazali V60. Strachatellali dranikilar juda mazali! Atmosfera — ajoyib!",
    "The best V60 in Tashkent. The pancakes with stracciatella are delicious! The atmosphere is a delight!"
  ), 5],
  ["Александр Дорогов", t(
    "Стильно, современно. Ташкент, каким он должен быть.",
    "Didli, zamonaviy. Toshkent qanday boʻlishi kerak boʻlsa, xuddi shunday.",
    "Stylish and modern. Tashkent as it should be."
  ), 5],
  ["Анна Загуменникова", t(
    "Очень уютное место с красивым интерьером — всё продумано до мелочей, атмосфера располагает, и хочется остаться подольше. Еда вкусная, всё свежее и красиво подано.",
    "Chiroyli interyerli juda shinam joy — hamma narsa mayda detallargacha oʻylangan, uzoqroq qolging keladi. Taomlar mazali, hammasi yangi va chiroyli tortilgan.",
    "A very cosy place with a beautiful interior, thought through to the details. You want to stay longer. The food is tasty, fresh and beautifully served."
  ), 5],
  ["Артём Г.", t(
    "Отличное место, где можно попробовать кофе, приготовленный альтернативными способами на разном зерне. Крутой дизайн и живой винил.",
    "Turli donlarda muqobil usullar bilan tayyorlangan qahvani tatib koʻrish mumkin boʻlgan ajoyib joy. Zoʻr dizayn va jonli vinil.",
    "A great place to try coffee brewed by alternative methods on different beans. Great design and live vinyl."
  ), 5],
  ["Зоя Коваленко", t(
    "Место уютное, всё выглядит аккуратно и со вкусом. Еда вкусная, чувствуется, что готовят с вниманием. Пробовала матча-латте — очень понравился.",
    "Joy shinam, hamma narsa did bilan qilingan. Taomlar mazali, e’tibor bilan tayyorlanishi sezilib turadi. Matcha-latte ichib koʻrdim — juda yoqdi.",
    "Cosy, neat and tasteful. The food is good and you can tell it is made with care. I tried the matcha latte and loved it."
  ), 5],
  ["Ангелина", t(
    "Вкусный капучино, нереальная творожно-маковая запеканка. Можно собрать хороший завтрак, ну и лепёшки с каймаком и джемом — в самое ♥",
    "Mazali kapuchino, aql bovar qilmas makli zapekanka. Yaxshi nonushta yigʻish mumkin, qaymoq va jemli non esa — yurakka ♥",
    "Tasty cappuccino and an unreal poppy seed cottage cheese bake. You can put together a great breakfast, and the flatbread with kaymak and jam goes straight to the ♥"
  ), 5],
  ["Eva T.", t(
    "Исключительно высокое качество кофе, интересный сорт зерна. Еда очень вкусная, продукты свежие. Порекомендовала бы друзьям и вернулась бы сама.",
    "Qahva sifati juda yuqori, qiziqarli don navi. Taomlar juda mazali, mahsulotlar yangi. Doʻstlarimga tavsiya qilardim va oʻzim ham qaytardim.",
    "Exceptional coffee quality and an interesting bean. The food is very good and fresh. I would recommend it to friends and come back myself."
  ), 5],
  ["Виталина Мельцова", t(
    "Очень стильное место Ташкента. Кофе один из самых достойных. Красивый интерьер, пропитанный любовью к Ташкенту.",
    "Toshkentning juda didli maskani. Qahvasi eng munosiblaridan. Toshkentga muhabbat bilan yoʻgʻrilgan chiroyli interyer.",
    "One of the most stylish places in Tashkent, with some of its best coffee. A beautiful interior steeped in love for the city."
  ), 5],
  ["Neda Golshan", t(
    "Очень приятная атмосфера: можно часами сидеть и наслаждаться работой и встречами.",
    "Juda yoqimli atmosfera: soatlab oʻtirib, ish va uchrashuvlardan zavqlanish mumkin.",
    "A really pleasant atmosphere. You can sit for hours, working or meeting people."
  ), 5],
];

/* Единицы объёма и веса */
window.TOSH_UNITS = {
  ml: t("мл", "ml", "ml"),
  g: t("г", "g", "g"),
  pc: t("шт.", "dona", "pc"),
};

})();
