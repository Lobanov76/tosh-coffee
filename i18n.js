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
    "Tosh qahvaxona на Авлиё-Ата, 128: спешелти-кофе из зерна своей обжарки, десерты и завтраки весь день. Меню на русском, узбекском и английском.",
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
  "hero.alt": t(
    "Гипсовые барельефы с надписью tosh во всю стену зала",
    "Zal devoridagi tosh yozuvli gips barelyeflar",
    "Plaster reliefs with the word tosh across the café wall"
  ),

  "status.open": t("Открыто до 21:00", "Ochiq, 21:00 gacha", "Open until 21:00"),
  "status.kitchen": t("кухня до 20:00", "oshxona 20:00 gacha", "kitchen until 20:00"),
  "status.closedToday": t("Закрыто, откроемся в {time}", "Yopiq, {time} da ochamiz", "Closed, opening at {time}"),
  "status.closedTomorrow": t("Закрыто, откроемся завтра в {time}", "Yopiq, ertaga {time} da ochamiz", "Closed, opening tomorrow at {time}"),

  "about.title": t("Ташкент, который мы любим", "Biz sevgan Toshkent", "The Tashkent we love"),
  "about.text": t(
    "«Тош» по-узбекски — камень, а Тошкент — каменный город. Наша кофейня о нём: гипсовые барельефы во всю стену, как на фасадах старых ташкентских домов, стальные подносы, бетон и светлое дерево. И кофе, ради которого хочется задержаться.",
    "«Tosh» — Toshkentning oʻzi. Devor boʻylab gips barelyeflar, xuddi eski Toshkent binolarining peshtoqidagidek, poʻlat patnislar, beton va och rang yogʻoch. Va uzoqroq qolgingiz keladigan qahva.",
    "In Uzbek, tosh means stone, and Toshkent is the city of stone. Our café is about that city: plaster reliefs across the whole wall, like the façades of old Tashkent buildings, steel trays, concrete and pale wood. And coffee worth staying for."
  ),
  "about.alt": t(
    "Барная стойка Tosh с абажурами и вывеской",
    "Tosh bar peshtaxtasi, chiroqlar va yozuv",
    "The Tosh bar with lampshades and sign"
  ),
  "f1.title": t("Своя обжарка", "Oʻzimiz qovuramiz", "Roasted in-house"),
  "f1.text": t(
    "Зерно обжариваем сами. Эспрессо, V60, батч-брю и фильтр-шот — на разном зерне.",
    "Donni oʻzimiz qovuramiz. Espresso, V60, batch brew va filtr-shot — turli donlarda.",
    "We roast our own beans. Espresso, V60, batch brew and filter shots on different coffees."
  ),
  "f2.title": t("Завтраки весь день", "Kun boʻyi nonushta", "All-day breakfast"),
  "f2.text": t(
    "Шакшука, сырники, каши и лепёшка с каймаком — пока работает кухня.",
    "Shakshuka, sirniklar, boʻtqalar va qaymoqli non — oshxona ishlaguncha.",
    "Shakshuka, ricotta pancakes, porridge and flatbread with kaymak while the kitchen is open."
  ),
  "f3.title": t("Десерты к кофе", "Qahvaga desertlar", "Desserts"),
  "f3.text": t(
    "Витрина с выпечкой и десертами. Гости особенно хвалят печенье с куртом.",
    "Pishiriq va desertlar vitrinasi. Mehmonlar ayniqsa qurtli pechenyeni maqtashadi.",
    "A counter of pastries and desserts. Guests especially love the kurt cookie."
  ),
  "f4.title": t("Можно поработать", "Ishlash mumkin", "Room to work"),
  "f4.text": t(
    "Просторный светлый зал и столы с розетками.",
    "Keng yorugʻ zal va rozetkali stollar.",
    "A bright, spacious hall and tables with power outlets."
  ),

  "kitchen.title": t("Кухня", "Oshxona", "Kitchen"),
  "kitchen.lead": t(
    "Подаём на стальных подносах, как в старых ташкентских чайханах и столовых.",
    "Eski Toshkent choyxonalari va oshxonalaridagidek poʻlat patnislarda tortamiz.",
    "Served on steel trays, the way old Tashkent teahouses and canteens did it."
  ),
  "photo.shakshuka": t("Шакшука TOSH", "TOSH shakshukasi", "TOSH Shakshuka"),
  "photo.yogurt": t("Кофейный йогурт с чиа и жареным бананом", "Chia va qovurilgan banan bilan qahvali yogurt", "Coffee yogurt with chia and fried banana"),
  "photo.toast": t("Карамельный тост с сыром", "Karamelli pishloqli tost", "Caramel toast with cheese"),
  "photo.set": t("Бариста-сет: эспрессо, фильтр и флэт уайт", "Barista set: espresso, filtr va flat white", "Barista set: espresso, filter and flat white"),
  "photo.vitrine": t("Витрина с десертами", "Desertlar vitrinasi", "The dessert counter"),

  "menu.title": t("Меню", "Menyu", "Menu"),
  "menu.note": t("Цены в сумах.", "Narxlar soʻmda.", "Prices in Uzbek soʻm."),

  "reviews.title": t("Гости о нас", "Mehmonlar fikri", "What guests say"),
  "reviews.rating": t("4,7 на Яндекс Картах", "Yandex Xaritalarda 4,7", "4.7 on Yandex Maps"),
  "reviews.all": t("Все отзывы", "Barcha sharhlar", "All reviews"),
  "reviews.translated": t("", "Rus tilidan tarjima", "Translated from Russian"),
  "r1.text": t(
    "Это самый вкусный кофе в Ташкенте, который я пробовала. Идеальный!",
    "Toshkentda tatib koʻrganlarim ichida eng mazali qahva. Mukammal!",
    "The best coffee I’ve had in Tashkent. Perfect!"
  ),
  "r2.text": t(
    "Самая вкусная V60 в Ташкенте. Драники со страчателлой — очень вкусные!",
    "Toshkentdagi eng mazali V60. Strachatellali qovoqli dranikilar juda mazali!",
    "The best V60 in Tashkent. The zucchini pancakes with stracciatella are delicious!"
  ),
  "r3.text": t(
    "Очень стильное место Ташкента. Кофе один из самых достойных. Красивый интерьер, пропитанный любовью к Ташкенту.",
    "Toshkentning juda didli maskani. Qahvasi eng munosiblaridan. Toshkentga muhabbat bilan yoʻgʻrilgan chiroyli interyer.",
    "One of the most stylish places in Tashkent, with some of its best coffee. A beautiful interior steeped in love for the city."
  ),

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
  "visit.alt": t(
    "Летняя терраса Tosh со столиками под деревьями",
    "Tosh yozgi ayvoni, daraxtlar ostidagi stollar",
    "The Tosh summer terrace with tables under the trees"
  ),

  "footer.city": t("Ташкент", "Toshkent", "Tashkent"),
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
];
})();
