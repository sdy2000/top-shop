const headerNavbar = [
  {
    title: [
      { lan: "EN", text: "Home" },
      { lan: "DE", text: "Startseite" },
      { lan: "HI", text: "होम" },
      { lan: "TR", text: "Ana Sayfa" },
      { lan: "FA", text: "خانه" },
    ],
    slug: "/",
    order: 1,
    new: false,
  },
  {
    title: [
      { lan: "EN", text: "Shop" },
      { lan: "DE", text: "Geschäft" },
      { lan: "HI", text: "दुकान" },
      { lan: "TR", text: "Mağaza" },
      { lan: "FA", text: "فروشگاه" },
    ],
    slug: "/shop",
    order: 2,
    new: false,
  },
  {
    title: [
      { lan: "EN", text: "Women" },
      { lan: "DE", text: "Frauen" },
      { lan: "HI", text: "महिलाएँ" },
      { lan: "TR", text: "Kadınlar" },
      { lan: "FA", text: "زنان" },
    ],
    slug: "/shop/women",
    order: 3,
    new: false,
    sub_cat: [
      {
        header: [
          { lan: "EN", text: "Women Clothing" },
          { lan: "DE", text: "Damenbekleidung" },
          { lan: "HI", text: "महिलाओं के कपड़े" },
          { lan: "TR", text: "Kadın Giyim" },
          { lan: "FA", text: "پوشاک زنانه" },
        ],
        categories: [
          {
            title: [
              { lan: "EN", text: "Dresses" },
              { lan: "DE", text: "Kleider" },
              { lan: "HI", text: "पोशाकें" },
              { lan: "TR", text: "Elbiseler" },
              { lan: "FA", text: "لباس‌ها" },
            ],
            slug: "/shop/dresses",
            order: 1,
            new: false,
          },
          {
            title: [
              { lan: "EN", text: "Tops & Tees" },
              { lan: "DE", text: "Oberteile & T-Shirts" },
              { lan: "HI", text: "शीर्ष और टीस" },
              { lan: "TR", text: "Üstler ve Tişörtler" },
              { lan: "FA", text: "بالاها و تی‌شرت‌ها" },
            ],
            slug: "/shop/tops&tees",
            order: 2,
            new: false,
          },
          {
            title: [
              { lan: "EN", text: "Jackets & Coats" },
              { lan: "DE", text: "Jacken & Mäntel" },
              { lan: "HI", text: "जैकेट और कोट" },
              { lan: "TR", text: "Ceketler ve Kabanlar" },
              { lan: "FA", text: "ژاکت‌ها و پالتوها" },
            ],
            slug: "/shop/jackets&coats",
            order: 3,
            new: false,
          },
          {
            title: [
              { lan: "EN", text: "Pants & Capris" },
              { lan: "DE", text: "Hosen & Capris" },
              { lan: "HI", text: "पैंट और कैप्रिस" },
              { lan: "TR", text: "Pantolonlar ve Caprisler" },
              { lan: "FA", text: "شلوارها و کپری‌ها" },
            ],
            slug: "/shop/pants&capris",
            order: 4,
            new: false,
          },
          {
            title: [
              { lan: "EN", text: "Sweaters" },
              { lan: "DE", text: "Pullover" },
              { lan: "HI", text: "स्वेटर" },
              { lan: "TR", text: "Kazaklar" },
              { lan: "FA", text: "سوییشرت‌ها" },
            ],
            slug: "/shop/sweaters",
            order: 5,
            new: false,
          },
          {
            title: [
              { lan: "EN", text: "Costumes" },
              { lan: "DE", text: "Kostüme" },
              { lan: "HI", text: "कॉस्ट्यूम" },
              { lan: "TR", text: "Kostümler" },
              { lan: "FA", text: "کاستوم‌ها" },
            ],
            slug: "/shop/costumes",
            order: 6,
            new: false,
          },
          {
            title: [
              { lan: "EN", text: "Hoodies & Sweatshirts" },
              { lan: "DE", text: "Kapuzenpullover & Sweatshirts" },
              { lan: "HI", text: "हुडीज़ और स्वेटशर्ट" },
              { lan: "TR", text: "Kapüşonlu Kazaklar & Sweatshirtler" },
              { lan: "FA", text: "هودی‌ها و سوییشرت‌ها" },
            ],
            slug: "/shop/sweatshirts",
            order: 7,
            new: false,
          },
          {
            title: [
              { lan: "EN", text: "Pajamas & Robes" },
              { lan: "DE", text: "Schlafanzüge & Mäntel" },
              { lan: "HI", text: "पजामा और रोब" },
              { lan: "TR", text: "Pijama & Bornozlar" },
              { lan: "FA", text: "پیجاماها و لباس‌های استراحت" },
            ],
            slug: "/shop/pajamas&robes",
            order: 8,
            new: false,
          },
          {
            title: [
              { lan: "EN", text: "Shorts" },
              { lan: "DE", text: "Kurze Hosen" },
              { lan: "HI", text: "शॉर्ट" },
              { lan: "TR", text: "Şortlar" },
              { lan: "FA", text: "شلوارهای کوتاه" },
            ],
            slug: "/shop/shorts",
            order: 9,
            new: false,
          },
          {
            title: [
              { lan: "EN", text: "Swimwear" },
              { lan: "DE", text: "Badebekleidung" },
              { lan: "HI", text: "स्विमवियर" },
              { lan: "TR", text: "Yüzme Kıyafetleri" },
              { lan: "FA", text: "لباس‌های شنا" },
            ],
            slug: "/shop/swimwear",
            order: 10,
            new: true,
          },
        ],
      },
      {
        header: [
          { lan: "EN", text: "Jewelry" },
          { lan: "DE", text: "Schmuck" },
          { lan: "HI", text: "आभूषण" },
          { lan: "TR", text: "Takı" },
          { lan: "FA", text: "جواهرات" },
        ],
        categories: [
          {
            title: [
              { lan: "EN", text: "Accessories" },
              { lan: "DE", text: "Zubehör" },
              { lan: "HI", text: "सहायक उपकरण" },
              { lan: "TR", text: "Aksesuarlar" },
              { lan: "FA", text: "اکسسوری‌ها" },
            ],
            slug: "/shop/accessories",
            order: 1,
            new: false,
          },
          {
            title: [
              { lan: "EN", text: "Bags & Purses" },
              { lan: "DE", text: "Taschen & Geldbörsen" },
              { lan: "HI", text: "बैग और पर्स" },
              { lan: "TR", text: "Çantalar ve Cüzdanlar" },
              { lan: "FA", text: "کیف و کیف پول" },
            ],
            slug: "/shop/bags&purses",
            order: 2,
            new: false,
          },
          {
            title: [
              { lan: "EN", text: "Rings" },
              { lan: "DE", text: "Ringe" },
              { lan: "HI", text: "अंगूठियाँ" },
              { lan: "TR", text: "Yüzükler" },
              { lan: "FA", text: "انگشترها" },
            ],
            slug: "/shop/rings",
            order: 3,
            new: false,
          },
          {
            title: [
              { lan: "EN", text: "Earrings" },
              { lan: "DE", text: "Ohrringe" },
              { lan: "HI", text: "बाली" },
              { lan: "TR", text: "Küpeler" },
              { lan: "FA", text: "گوشواره‌ها" },
            ],
            slug: "/shop/earrings",
            order: 4,
            new: false,
          },
          {
            title: [
              { lan: "EN", text: "Bracelets" },
              { lan: "DE", text: "Armbänder" },
              { lan: "HI", text: "कंगन" },
              { lan: "TR", text: "Bilezikler" },
              { lan: "FA", text: "دستبندها" },
            ],
            slug: "/shop/bracelets",
            order: 5,
            new: false,
          },
          {
            title: [
              { lan: "EN", text: "Body Jewelry" },
              { lan: "DE", text: "Körperschmuck" },
              { lan: "HI", text: "शरीर के आभूषण" },
              { lan: "TR", text: "Vücut Takıları" },
              { lan: "FA", text: "جواهرات بدن" },
            ],
            slug: "/shop/body-jewelry",
            order: 6,
            new: false,
          },
        ],
      },
      {
        header: [
          { lan: "EN", text: "Beauty" },
          { lan: "DE", text: "Schönheit" },
          { lan: "HI", text: "सौंदर्य" },
          { lan: "TR", text: "Güzellik" },
          { lan: "FA", text: "زیبایی" },
        ],
        categories: [
          {
            title: [
              { lan: "EN", text: "Bath Accessories" },
              { lan: "DE", text: "Badezubehör" },
              { lan: "HI", text: "स्नान सहायक" },
              { lan: "TR", text: "Banyo Aksesuarları" },
              { lan: "FA", text: "لوازم حمام" },
            ],
            slug: "/shop/bath-accessories",
            order: 1,
            new: false,
          },
          {
            title: [
              { lan: "EN", text: "Makeup & Cosmetics" },
              { lan: "DE", text: "Make-up & Kosmetika" },
              { lan: "HI", text: "मेकअप और कॉस्मेटिक्स" },
              { lan: "TR", text: "Makyaj & Kozmetik" },
              { lan: "FA", text: "آرایش و لوازم آرایشی" },
            ],
            slug: "/shop/makeup&cosmetics",
            order: 2,
            new: false,
          },
          {
            title: [
              { lan: "EN", text: "Skin Care" },
              { lan: "DE", text: "Hautpflege" },
              { lan: "HI", text: "त्वचा की देखभाल" },
              { lan: "TR", text: "Cilt Bakımı" },
              { lan: "FA", text: "مراقبت از پوست" },
            ],
            slug: "/shop/skin-care",
            order: 3,
            new: false,
          },
          {
            title: [
              { lan: "EN", text: "Hair Care" },
              { lan: "DE", text: "Haarpflege" },
              { lan: "HI", text: "बाल संरक्षण" },
              { lan: "TR", text: "Saç Bakımı" },
              { lan: "FA", text: "مراقبت از مو" },
            ],
            slug: "/shop/hair-care",
            order: 4,
            new: false,
          },
          {
            title: [
              { lan: "EN", text: "Essential Oils" },
              { lan: "DE", text: "Ätherische Öle" },
              { lan: "HI", text: "आवश्यक तेल" },
              { lan: "TR", text: "Esansiyel Yağlar" },
              { lan: "FA", text: "روغن‌های ضروری" },
            ],
            slug: "/shop/essential-oils",
            order: 5,
            new: false,
          },
          {
            title: [
              { lan: "EN", text: "Fragrances" },
              { lan: "DE", text: "Düfte" },
              { lan: "HI", text: "सुगंध" },
              { lan: "TR", text: "Parfümler" },
              { lan: "FA", text: "عطرها" },
            ],
            slug: "/shop/fragrances",
            order: 6,
            new: false,
          },
          {
            title: [
              { lan: "EN", text: "Soaps & Bath Bombs" },
              { lan: "DE", text: "Seifen & Badebomben" },
              { lan: "HI", text: "साबुन और स्नान बम्ब्स" },
              { lan: "TR", text: "Sabunlar ve Banyo Bombaları" },
              { lan: "FA", text: "صابون و بمب‌های حمام" },
            ],
            slug: "/shop/soaps&bath-bombs",
            order: 7,
            new: false,
          },
          {
            title: [
              { lan: "EN", text: "Face Masks & Coverings" },
              { lan: "DE", text: "Gesichtsmasken & Abdeckungen" },
              { lan: "HI", text: "चेहरा मास्क और कवरिंग" },
              { lan: "TR", text: "Yüz Maskeleri ve Kaplamalar" },
              { lan: "FA", text: "ماسک‌ها و روکش‌های صورت" },
            ],
            slug: "/shop/face-masks&coverings",
            order: 8,
            new: false,
          },
          {
            title: [
              { lan: "EN", text: "Spa Kits & Gifts" },
              { lan: "DE", text: "Spa-Kits & Geschenke" },
              { lan: "HI", text: "स्पा किट और उपहार" },
              { lan: "TR", text: "Spa Kitleri ve Hediyeler" },
              { lan: "FA", text: "کیت‌های اسپا و هدایا" },
            ],
            slug: "/shop/spa-kits&gifts",
            order: 9,
            new: false,
          },
        ],
      },
    ],
  },
  {
    title: [
      { lan: "EN", text: "Man" },
      { lan: "DE", text: "Mann" },
      { lan: "HI", text: "पुरुष" },
      { lan: "TR", text: "Erkek" },
      { lan: "FA", text: "مردانه" },
    ],
    slug: "/shop/man",
    order: 4,
    new: false,
  },
  {
    title: [
      { lan: "EN", text: "Sports" },
      { lan: "DE", text: "Sport" },
      { lan: "HI", text: "खेल" },
      { lan: "TR", text: "Spor" },
      { lan: "FA", text: "ورزشی" },
    ],
    slug: "/shop/sport",
    order: 5,
    new: true,
  },
];

export default headerNavbar;
