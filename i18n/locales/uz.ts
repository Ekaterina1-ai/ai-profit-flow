import type { Messages } from '../types';

const messages = {
  nav: {
    solutions: 'Yechimlar',
    cases: 'Keyslar',
    contacts: 'Kontaktlar',
    consultation: 'Konsultatsiya',
    writeUs: 'Bizga yozing',
    openMenu: 'Menyuni ochish',
  },
  hero: {
    status: 'AI tizimlari onlayn · avtomatlashtirish tayyor',
    titleLine1: 'AQLLI TEXNOLOGIYALAR',
    titleLine2: 'BIZNESINGIZ UCHUN',
    subtitle: 'Individual AI yechimlari yordamida rutinani avtomatlashtiramiz, savdoni oshiramiz va vaqtingizni tejaymiz.',
    cta: 'Batafsil bilish',
  },
  workBoost: {
    titleBefore: 'Aqlli texnologiyalar bilan ishni qanday soddalashtirish va',
    titleAccent: 'xarajatlarni kamaytirish',
    titleAfter: 'mumkin?',
    card1Title: 'Rutin vazifalardan xalos bo‘ling',
    card1Text: 'Tizim hujjatlarni o‘zi qayta ishlaydi, mijozlar savollariga javob beradi va ishni tezlashtiradi.',
    card2Title: 'Ko‘proq ma’lumot — ko‘proq foyda',
    card2Text: 'Avtomatik tahlil o‘sish uchun yangi imkoniyatlarni topishga va to‘g‘ri qarorlar qabul qilishga yordam beradi.',
  },
  solutions: {
    title: 'Bizning yechimlar',
    subtitle: 'Yechimlar lentasi o‘zi aylanadi — to‘xtatish uchun ikonka ustiga olib boring yoki to‘liq ro‘yxatni oching',
    showAll: 'Hammasini ko‘rsatish',
    hideList: 'Ro‘yxatni yashirish',
    priceFrom: 'Narxi',
    details: 'Tafsilotlar',
  },
  automationHelp: {
    titleBefore: 'Avtomatlashtirish xodimlaringizga qanday yordam beradi:',
    titleAccent: 'tezroq va samaraliroq ishlash',
    items: [
      {
        t: 'Kechikishlarsiz ish',
        d: 'Avtomatlashtirish takrorlanuvchi jarayonlarni o‘z zimmasiga oladi, xodimlar esa bu vazifalarga kamroq vaqt sarflaydi.',
      },
      {
        t: 'Xatolar minimumi',
        d: 'Inson omili kamayadi: tizim o‘zi tekshiradi, tahlil qiladi va aniq ma’lumot beradi.',
      },
      {
        t: 'Ko‘proq natija',
        d: 'Xodimlar rutinadan bo‘shaydi va biznes o‘sishi hamda yangi g‘oyalarga e’tibor qaratadi.',
      },
    ],
  },
  income: {
    titleBefore: 'Avtomatlashtirish biznesingiz',
    titleAccent: 'daromadini',
    titleAfter: 'qanday oshiradi',
    steps: [
      {
        n: '01',
        t: 'Aqlli biznes',
        d: 'zamonaviy AI yechimlari kompaniyangizni raqobatchilardan ancha kuchli qiladi.',
      },
      {
        n: '02',
        t: 'Ishni tezlashtirish',
        d: 'jarayonlarni avtomatlashtirish vaqt yo‘qotishlarini minimumga tushiradi.',
      },
      {
        n: '03',
        t: 'Savdoni oshirish',
        d: 'joriy shtatni kengaytirmasdan mijozlar va bitimlar sonini bir necha baravar ko‘paytirish.',
      },
      {
        n: '04',
        t: 'Foyda o‘sishi',
        d: 'xarajatlarni kamaytirish va samaradorlikni bir necha baravar oshirish hisobiga yakuniy natija.',
      },
    ],
  },
  cases: {
    title: 'Bizning loyihalar',
    subtitle: 'Turli bizneslar uchun muvaffaqiyatli avtomatlashtirish yechimlari',
    learnMore: 'Batafsil bilish',
    hide: 'Yashirish',
    benefits: 'Afzalliklar',
    productUi: 'Mahsulot interfeysi',
    watchPresentation: 'Taqdimotni ko‘rish',
    sitePrefix: 'Sayt',
  },
  experts: {
    title: 'Bizning ekspertlar',
    subtitle: 'AI va avtomatlashtirish bo‘yicha professionallar jamoasi',
    more: 'Batafsil',
  },
  aiIntegration: {
    title: 'AI texnologiyalarini biznes jarayonlariga joriy qilish',
    steps: [
      {
        t: 'Audit o‘tkazamiz',
        d: 'AI eng katta foyda beradigan tor joylarni aniqlaymiz.',
      },
      {
        t: 'Yechimni kelishamiz',
        d: 'Kompaniyangizga individual moslashtiriladi.',
      },
      {
        t: 'Integratsiya',
        d: 'AI mavjud tizimlarga silliq joriy qilinadi.',
      },
      {
        t: 'O‘qitish',
        d: 'Xodimlarni yangi vositalar bilan ishlashga o‘rgatamiz.',
      },
      {
        t: 'Qo‘llab-quvvatlash',
        d: 'Texnik yordam va mutaxassislar konsultatsiyasi.',
      },
    ],
  },
  plan: {
    titleBefore: 'Vazifalaringiz uchun bosqichma-bosqich',
    titleAccent: 'ish rejasi',
    show: 'Bosqichma-bosqich rejani ochish',
    hide: 'Rejani yashirish',
    steps: [
      {
        t: 'Siz ariza qoldirasiz',
        d: 'biz siz bilan bog‘lanib, vazifalarni muhokama qilamiz',
      },
      {
        t: 'Audit o‘tkazamiz',
        d: 'AI eng katta foyda beradigan tor joylarni aniqlaymiz',
      },
      {
        t: 'Yechimni kelishamiz',
        d: 'kompaniyangizga individual moslashtiramiz',
      },
      {
        t: 'Test qilamiz va joriy qilamiz',
        d: 'risklarni kamaytiramiz va xodimlarni o‘qitamiz',
      },
      {
        t: 'Kuzatamiz va optimallashtiramiz',
        d: 'yangi avtomatlashtirish darajasiga moslashishga yordam beramiz',
      },
    ],
    footerNote:
      'Agar biznes jarayonlaringiz murakkab va rutin vazifalar ko‘p bo‘lsa, AI ishni tezroq va samaraliroq qilishga yordam beradi.',
  },
  cta: {
    titleLine1: 'RAQAMLI',
    titleLine2: 'TRANSFORMATSIYAGA TAYYORMISIZ?',
    subtitle:
      'Ariza qoldiring, biz biznes jarayonlaringizni bepul tahlil qilib, AI yordamida kamida 3 ta o‘sish nuqtasini topamiz.',
    namePh: 'Ismingiz?',
    phonePh: '+7 (___) ___-__-__',
    agreePrefix: 'Men roziman:',
    agreeLink: 'shaxsiy ma’lumotlarni qayta ishlashga rozilik',
    submit: 'Ariza qoldirish',
    submitting: 'Yuborilmoqda...',
    orWrite: 'Yoki bizga yozing',
  },
  footer: {
    blurb: 'AI texnologiyalarini biznesga professional joriy qilish. Vaqtni qadrlaydiganlar uchun aqlli yechimlar.',
    contacts: 'Kontaktlar',
    messengers: 'Messenjerlar',
    rights: '© 2025 Barcha huquqlar himoyalangan.',
    privacy: 'Ma’lumotlarni qayta ishlash siyosati',
    legalName: 'YaTT Georgieva E.V.',
    inn: 'STIR 344692466070',
  },
  faq: {
    support: 'Texnik yordam',
    online: 'Onlayn · tez-tez so‘raladigan savollar',
    leaveRequest: 'Ariza qoldirish',
    haveQuestions: 'Savollaringiz bormi?',
    close: 'Yopish',
    openAria: 'Tez-tez so‘raladigan savollarni ochish',
    closeAria: 'Texnik yordamni yopish',
    items: [
      {
        q: 'Ish nimadan boshlanadi?',
        a: 'Jarayonlaringizni bepul ko‘rib chiqishdan boshlaymiz: vaqt va pul qayerda yo‘qolayotganini aniqlaymiz va AI bilan 2-3 ta o‘sish nuqtasini taklif qilamiz. Kelishuvdan so‘ng pilot yoki to‘liq joriy qilishni boshlaymiz.',
      },
      {
        q: 'Joriy qilish qancha turadi?',
        a: 'Audit 15 000 ₽ dan boshlanadi. Tayyor yechimlar (HR, analitika, botlar, integratsiyalar) 30 000 dan 75 000 ₽ gacha. Aniq smeta vazifalar hajmi va mavjud tizimlarga bog‘liq.',
      },
      {
        q: 'Natija qanchalik tez ko‘rinadi?',
        a: 'Dastlabki effektlar odatda birinchi oydayoq ko‘rinadi: rutina kamayadi, mijozlarga javoblar tezlashadi, hisobotlar shaffofroq bo‘ladi. To‘liq joriy qilish sikli vazifaga qarab 1 haftadan 4 haftagacha.',
      },
      {
        q: 'CRM yoki saytni almashtirish kerakmi?',
        a: 'Yo‘q. Biz AI ni siz allaqachon ishlatayotgan Bitrix24, AmoCRM, Telegram, jadvallar va ichki servislaringizga joylaymiz. Yangi platformalarga ko‘chish shart emas.',
      },
      {
        q: 'Bu kichik biznesga mos keladimi?',
        a: 'Ha. Arizalar, yollash, qo‘llab-quvvatlash yoki hisobotlar kabi aniq og‘riqli nuqtadan boshlaymiz va faqat vaqtni tejaydigan hamda foydani oshiradigan qismini kengaytiramiz.',
      },
      {
        q: 'Ma’lumotlar xavfsizligi-chi?',
        a: 'Faqat zarur kirish huquqlari bilan ishlaymiz, ortiqcha ma’lumot saqlamaymiz va xodimlar faqat o‘z mas’uliyat zonasini ko‘radigan qilib rollarni sozlaymiz. Barcha tafsilotlar shartnomada qayd etiladi.',
      },
      {
        q: 'Xodimlarni o‘qitasizmi?',
        a: 'Ha. Joriy qilingandan so‘ng trening o‘tkazamiz va sodda yo‘riqnomalar qoldiramiz. Zarur bo‘lsa, oylik texnik yordam va yechimlarni yangilashni ulaymiz.',
      },
      {
        q: 'Siz bilan qanday bog‘lanish mumkin?',
        a: 'Telegram, Max yoki VK orqali yozing, +7 (961) 675-06-54 raqamiga qo‘ng‘iroq qiling yoki saytdagi shaklda ariza qoldiring — ish vaqtida o‘sha kuniyoq javob beramiz.',
      },
    ],
  },
  forms: {
    fillBoth: 'Iltimos, ikkala maydonni ham to‘ldiring',
    agreeRequired: 'Iltimos, shaxsiy ma’lumotlarni qayta ishlashga rozilik bering',
    sendError: 'Yuborishda xatolik',
    thankYou: '✅ Rahmat! Arizangiz yuborildi. Tez orada siz bilan bog‘lanamiz.',
    serviceApplication: 'Xizmat uchun ariza',
    serviceCallHint: 'Kontaktlaringizni qoldiring — qo‘ng‘iroq qilib, ishga tushirishni muhokama qilamiz',
    launchProcess: 'Ushbu jarayonni ishga tushirish',
    backToDesc: '← Tavsifga qaytish',
    orWriteNow: 'Yoki darhol yozing',
    applicationSent: 'Ariza yuborildi',
    thanksService: 'Rahmat! Xizmat bo‘yicha tez orada siz bilan bog‘lanamiz.',
  },
  services: [
    {
      id: 1,
      title: 'Jarayonlar auditi',
      shortDesc: 'AI biznesingizga eng katta foyda beradigan tor joylarni aniqlaymiz.',
      features: [
        'Joriy hujjat aylanishini tahlil qilish',
        'Menejerlarning rutin vazifalarini topish',
        'Vaqtni tejash potensialini baholash',
        'Joriy qilish bo‘yicha tavsiyalar bilan hisobot',
      ],
    },
    {
      id: 2,
      title: 'HR va yollash (AI)',
      shortDesc: 'Anketalar va rezyumelar soniyalar ichida qayta ishlanadi. Yollash sifatini nazorat qilish uchun AI assistent.',
      features: [
        'Nomzodlarni avtomatik scoring qilish',
        'AI intervyuer: dastlabki saralash',
        'Rekruter qo‘ng‘iroqlari tonalligini tahlil qilish',
        'Natija: yollash samaradorligi +30%',
      ],
    },
    {
      id: 3,
      title: 'AI integratsiyasi',
      shortDesc: 'AI texnologiyalarini mavjud CRM va biznes tizimlaringizga silliq joriy qilamiz.',
      features: [
        'AI ni Bitrix24 / AmoCRM bilan bog‘lash',
        'Messenjerlarda avtomatik javoblarni sozlash',
        'Kiruvchi arizalarni qayta ishlashni avtomatlashtirish',
        'Inson xatolarini kamaytirish',
      ],
    },
    {
      id: 4,
      title: 'Savdo analitikasi',
      shortDesc: 'AI mijozlar xulq-atvorini tahlil qiladi va foyda bo‘yicha aniq prognozlar beradi.',
      features: [
        'Asosiy metrikalar bilan dashboardlar',
        'Mijozlar rad etish sabablarini tahlil qilish',
        'Qo‘shimcha savdo uchun shaxsiy tavsiyalar',
        'Rahbariyat uchun hisobotlarni avtomatlashtirish',
      ],
    },
    {
      id: 5,
      title: 'Xodimlarni o‘qitish',
      shortDesc: 'Jamoangizni yangi vositalar va neyrotarmoqlar bilan ishlashga o‘rgatamiz.',
      features: [
        'Prompt-injiniring bo‘yicha vorkshoplar',
        'AI botlar bilan ishlash bo‘yicha yo‘riqnomalar',
        'Moslashuv davrida xodimlarni qo‘llab-quvvatlash',
        'Ma’lumotlaringiz asosida bilimlar bazasi',
      ],
    },
    {
      id: 6,
      title: 'E-commerce AI',
      shortDesc: 'Aqlli mahsulot tavsiyalari. AI assistent hisobiga o‘rtacha chek +15%.',
      features: [
        'Saytda takliflarni shaxsiylashtirish',
        'Bazani avtomatik segmentatsiya qilish',
        'Qaytarishlarni qayta ishlash uchun AI bot',
        'Narxlarni dinamik boshqarish',
      ],
    },
    {
      id: 7,
      title: 'Tur assistenti',
      shortDesc: 'Budjet va yo‘nalish bo‘yicha turlarni tezkor tanlash. Menejerlar vaqtining 50% ini bo‘shatadi.',
      features: [
        'Turoperator bazalari bilan integratsiya',
        'Ekskursiyalarni avtomatik tanlash',
        'Telegram dagi AI konsultant 24/7',
        'Bot orqali viza yordami',
      ],
    },
    {
      id: 8,
      title: 'Texnik yordam',
      shortDesc: 'Joriy qilingan yechimlarni kuzatish va optimallashtirish. Doimiy monitoring.',
      features: [
        'Modellarni har oy yangilash',
        'Mutaxassislar konsultatsiyasi',
        'Texnik nosozliklarni tuzatish',
        'AI ni yangi vazifalarga qayta o‘qitish',
      ],
    },
  ],
  caseItems: [
    {
      id: 1,
      name: 'HR platforma',
      result: 'Xodimlarni tanlashni avtomatlashtirish',
      text: 'Yagona yollash ekotizimi: turli manbalardan kelgan nomzodlar bitta oynada, AI scoring va suhbatga tayyorgarlik qo‘l mehnatisiz.',
      benefits: [
        'Barcha HR vositalari bitta AI platformada',
        'Turli manbalardan yagona nomzodlar bazasi',
        'Rezyumelarni AI scoring qilish va dastlabki saralashga yordam',
        'Vakansiya bo‘yicha suhbat savollarini avtomatik tanlash',
        'Shaffof yollash voronkasi va har bir nomzod statusi',
      ],
      screenshotsAlt: [
        'KadroAI HR platformasining bosh ekrani',
        'HR platforma bo‘limi',
        'Yollash ekotizimi interfeysi',
        'Xodimlarni tanlash ish ekrani',
      ],
    },
    {
      id: 2,
      name: 'AI logist',
      result: 'Avtonom logistika',
      text: '24Logist haydovchilarni WhatsApp, MAX va SMS orqali o‘zi nazorat qiladi: jo‘nashdan yuk topshirishgacha, dispetcherning cheksiz qo‘ng‘iroqlarisiz.',
      benefits: [
        'Reysning har bosqichida haydovchi uchun avtomatik bildirishnomalar voronkasi',
        'Har 10 soniyada yangilanadigan reyslar Kanban doskasi',
        'Reyslar va haydovchilarni Excel dan bir klikda import qilish',
        'WhatsApp / MAX / SMS bitta oynadan, ommaviy xabarlar',
        'Haydovchilar, transport kompaniyalari va menejerlar faolligi ishonchliligi analitikasi',
        'Kompaniya ma’lumotlarini izolyatsiya qilish va harakatlar jurnali',
      ],
      screenshotsAlt: ['24Logist sayti — bosh ekran', '24Logist imkoniyatlari'],
    },
    {
      id: 3,
      name: 'AI xaridchi',
      result: 'Xaridlarni optimallashtirish',
      text: 'AI ProfitFlow yetkazib beruvchilar va savdo kanallarini daqiqalarda topadi: kontaktlar, AI tahlil, tijorat taklifi va Gmail orqali yuborish — bitta ish oynasida.',
      benefits: [
        'Ikki rejim: yetkazib beruvchilar va savdo kanallarini qidirish',
        'AI so‘rovlari + hudud bo‘yicha toza natijali qidiruv',
        'Saytlardan telefon va email ma’lumotlarini parsing qilish',
        'Taklifni AI scoring qilish: pluslar, minuslar, risklar',
        'Bir klikda tijorat taklifi va Gmail OAuth orqali yuborish',
        'Excel ga eksport va lokal qidiruv tarixi',
      ],
      screenshotsAlt: [
        'Yetkazib beruvchilarni qidirish interfeysi',
        'AI tahlil va tijorat taklifi',
        'AI ProfitFlow ish stoli',
      ],
    },
    {
      id: 4,
      name: 'Go‘zallik servisi',
      result: 'Salonlar uchun kompleks yechim',
      text: 'Salon brendi uchun individual platforma: sayt, onlayn yozilish, mijoz kabineti, admin panel, bonuslar, referallar va eslatmalar.',
      benefits: [
        'Shablon vidjet o‘rniga brendlangan xizmatlar sayti',
        'Onlayn yozilish 24/7: xizmat → usta → vaqt',
        'Mijoz kabineti: bonuslar, aksiyalar, referallar, chat',
        'Admin panel: mijozlar, jadval, ustalar, push va chat',
        'Siz kod, server va ma’lumotlarga egalik qilasiz — CRM ijaraga olmaysiz',
        'Go‘zallik mijozlari smartfonlari uchun adaptiv dizayn va PWA',
      ],
      screenshotsAlt: [
        'Norma Tela saloni sayti',
        'Go‘zallik platformasi bo‘limi',
        'Mobil versiya',
        'Mijoz kabineti',
      ],
    },
  ],
  expertItems: [
    {
      id: 1,
      name: 'Ekaterina Georgieva',
      title: 'AI dasturchi',
      shortDesc: 'Sun’iy intellektni dasturlash va murakkab jarayonlarni avtomatlashtirish bo‘yicha mutaxassis.',
      fullDesc: `Ma’lumotlar xaosini tushunarli tizimga aylantiradi: millionlab satrlardan tayyor hisob-kitoblarga ega bitta aniq va strukturali hisobot yaratadi.
Biznes jarayonlarini yuzaki darajadan chuqurroq ko‘radi — vaqt, pul va resurslar qayerda yo‘qolayotganini topadi va buni avtomatlashtirilgan yechimlarga aylantiradi. Hozirdanoq nimani soddalashtirish, avtomatlashtirish va kuchaytirish mumkinligini ko‘rsatadi. Nafaqat tizimni joriy qiladi, balki undan maksimal natija olish uchun ishlashni ham o‘rgatadi.
Kompaniya vazifalari uchun servislar yaratadi va tez moslashtirib ishga tushirish mumkin bo‘lgan tayyor yechimlarga ega.
Asosiy ko‘nikmalar:
• AI dasturlash va jarayonlarni avtomatlashtirish
• Hisobot va hisob-kitoblar shakllantirish tizimlarini yaratish
• Biznes jarayonlarini tahlil qilish va optimallashtirish
• Kompaniya vazifalari uchun servislar ishlab chiqish
• Avtomatlashtirishlarni o‘qitish va joriy qilish
• Tez start uchun tayyor yechimlar
Ish natijasi:
Siz qo‘l mehnatini almashtiradigan, xatolar sonini kamaytiradigan va murakkab jarayonlarni sodda hamda tushunarli mexanikaga aylantiradigan tizim olasiz.`,
    },
    {
      id: 2,
      name: 'Daria Lemeshevskaya',
      title: 'AI botlar ishlab chiquvchisi',
      shortDesc:
        'Sun’iy intellekt asosida aqlli botlar ishlab chiqish va biznes jarayonlarini avtomatlashtirish bo‘yicha mutaxassis.',
      fullDesc: `Haqiqatan ishlaydigan yechimlar yaratadi: g‘oyadan biznesingizga integratsiya qilingan to‘liq tizimgacha. Kod yozadi, mantiq va arxitekturani quradi, shu sababli botlar barqaror, nosozliklarsiz va vaqtinchalik yechimlarsiz ishlaydi.
Ortida 100 dan ortiq amalga oshirilgan loyiha bor: oddiy assistentlardan tortib savdo, HR jarayonlari, ma’lumotlarni qayta ishlash va mijozlarga xizmat ko‘rsatishni avtomatlashtiradigan murakkab AI agentlargacha.
Asosiy ko‘nikmalar:
• Biznes vazifalari uchun AI botlar ishlab chiqish
• Dasturlash va tizimlar ishlash mantiqini yaratish
• API, CRM va Google servislar bilan integratsiyalar
• Jarayonlarni avtomatlashtirish: savdo, HR, analitika
• Nosozliklarsiz barqaror yechimlar yaratish
Ish natijasi:
Siz shunchaki bot emas, balki vaqtni tejaydigan, jamoa yuklamasini kamaytiradigan va foydani oshiradigan vosita olasiz.`,
    },
    {
      id: 3,
      name: 'Evgeniya Kirillova',
      title: 'AI servislar arxitektori',
      shortDesc:
        'Neyrotarmoqlar asosida servislar yaratish va rivojlantirish bo‘yicha mutaxassis; g‘oyalarni puxta, barqaror va kengayadigan yechimlarga aylantiradi.',
      fullDesc: `AI ning yangi imkoniyatlarini doimiy o‘rganadi va ularni loyihalarga joriy qiladi, shunda siz shunchaki ishlaydigan vosita emas, o‘sish zaxirasiga ega zamonaviy tizim olasiz. Servis tuzilmasini noldan quradi, mantiqni o‘ylab chiqadi va siz hatto o‘ylamagan, ammo natijani keskin kuchaytiradigan funksiyalarni qo‘shadi.
Barqaror va nosozliklarsiz ishlaydigan, biznes vazifalariga oson kengayadigan servislar yaratadi.
Turli yo‘nalishlarda amalga oshirilgan loyihalari bor: HR, tibbiyot, jumladan stomatologiya, servis va tijorat sohalari.
Asosiy ko‘nikmalar:
• AI servislarni loyihalash va rivojlantirish
• Neyrotarmoqlar imkoniyatlarini chuqur tushunish
• Mahsulot tuzilmasi va mantiqini qurish
• Samaradorlikni kuchaytiradigan funksiyalar qo‘shish
• Barqaror va kengayadigan yechimlar yaratish
Ish natijasi:
Siz shunchaki servis emas, balki biznesingiz bilan birga rivojlanadigan, jarayonlarni kuchaytiradigan va raqobat ustunligini beradigan puxta tizim olasiz.`,
    },
  ],
  common: {
    close: 'Yopish',
    currency: '₽',
  },
  lang: {
    label: 'Til',
    choose: 'Tilni tanlang',
  },
} satisfies Messages;

export default messages;
