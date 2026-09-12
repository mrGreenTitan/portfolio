// 0. ПРИБИРАЭМО БЛІКИ, АНІМАЦІЇ І ТД НА ЧАС ЗАВАНТАЖ. СТОРІНКИ
// 0. ПРИБИРАЭМО БЛІКИ, АНІМАЦІЇ І ТД НА ЧАС ЗАВАНТАЖ. СТОРІНКИ
// 0. ПРИБИРАЭМО БЛІКИ, АНІМАЦІЇ І ТД НА ЧАС ЗАВАНТАЖ. СТОРІНКИ

window.addEventListener("load", () => {
  document.body.classList.remove("preload");
});

// 2. КОНТЕНТ ДЛЯ ПОРФОЛІО
// 2. КОНТЕНТ ДЛЯ ПОРФОЛІО
// 2. КОНТЕНТ ДЛЯ ПОРФОЛІО

const worksInfo = [
  // 1й ПРОЄКТ
  // 1й ПРОЄКТ
  // 1й ПРОЄКТ
  {
    id: 0,
    link: "https://mrgreentitan.github.io/portfolio-site-travel",
    image: "w1.webp",
    ua: {
      title: "GoVista — адаптивний сайт для туристичного сервісу",
      description: {
        pOne: "GoVista — адаптивний сайт для туристичного сервісу :",
        pTwo: "Концепт лендингу для компанії, яка організовує авторські подорожі та активні тури. У проєкті зроблено акцент на велику візуальну подачу, зрозумілу структуру, картки турів, блок переваг, форму заявки та мобільну адаптацію.",
        pThree: "Адаптивність та структура :",
        pFour: "Сайт адаптований під desktop та mobile: окреме мобільне меню, зручні картки турів та читабельна структура на невеликих екранах.",
        pFive: "Що зроблено :",
      },
      ul: ["UI/UX дизайн", "Front-End розробка", "Адаптивна верстка (Desktop/Mobile)", "Інтерактивне навігаційне меню", "Інтеграція форми заявки"],
    },
    en: {
      title: "GoVista — Responsive Website for a Travel Service",
      description: {
        pOne: "GoVista — Responsive Website for a Travel Service :",
        pTwo: "Landing page concept for a company organizing custom and active tours. The project focuses on a strong visual presentation, clear structure, tour cards, a benefits section, an application form, and mobile adaptation.",
        pThree: "Responsiveness and structure :",
        pFour: "The site is adapted for desktop and mobile: a separate mobile menu, convenient tour cards, and a readable structure on small screens.",
        pFive: "What was done :",
      },
      ul: ["UI/UX Design", "Front-End Development", "Responsive Layout (Desktop/Mobile)", "Interactive Navigation Menu", "Application Form Integration"],
    },
    pl: {
      title: "GoVista — Responsywna strona dla serwisu turystycznego",
      description: {
        pOne: "GoVista — Responsywna strona dla serwisu turystycznego :",
        pTwo: "Koncepcja landing page dla firmy organizującej autorskie podróże i aktywne wycieczki. W projekcie postawiono nacisk na atrakcyjną oprawę wizualną, czytelną strukturę, karty wycieczek, sekcję korzyści, formularz zgłoszeniowy oraz adaptację mobilną.",
        pThree: "Responsywność i struktura :",
        pFour: "Strona jest dostosowana do komputerów i urządzeń mobilnych: osobne menu mobilne, wygodne karty wycieczek i czytelna struktura na mniejszych ekranach.",
        pFive: "Co zostało zrobione :",
      },
      ul: ["Projektowanie UI/UX", "Rozwój Front-End", "Responsywny układ (Desktop/Mobile)", "Interaktywne menu nawigacyjne", "Integracja formularza zgłoszeniowego"],
    },
    ru: {
      title: "GoVista — адаптивный сайт для туристического сервиса",
      description: {
        pOne: "GoVista — адаптивный сайт для туристического сервиса :",
        pTwo: "Концепт лендинга для компании, организующей авторские путешествия и активные туры. В проекте сделан акцент на крупную визуальную подачу, понятную структуру, карточки туров, блок преимуществ, форму заявки и мобильную адаптацию.",
        pThree: "Адаптивность и структура :",
        pFour: "Сайт адаптирован под desktop и mobile: отдельное мобильное меню, удобные карточки туров и читабельная структура на небольших экранах.",
        pFive: "Что сделано :",
      },
      ul: ["UI/UX дизайн", "Front-End разработка", "Адаптивная верстка (Desktop/Mobile)", "Интерактивное навигационное меню", "Интеграция формы заявки"],
    },
  },
  // 2й ПРОЄКТ
  // 2й ПРОЄКТ
  // 2й ПРОЄКТ
  {
    id: 1,
    link: "https://mrgreentitan.github.io/portfolio-site-Trustworthy-App-Download",
    image: "w2.webp",
    ua: {
      title: "Etran — Адаптивний сайт для фінтех-додатка",
      description: {
        pOne: "Etran — Адаптивний сайт для фінтех-додатка :",
        pTwo: "Концепт лендингу для мобільного додатку, який допомагає простіше й швидше виконувати грошові перекази, керувати витратами та безпечно працювати з фінансами прямо з телефона. У проєкті зроблено акцент на мінімалістичну fintech-подачу, чисту структуру, hero-екран, блок переваг, картки метрик, секції довіри, фінальний CTA-блок та мобільну адаптацію.",
        pThree: "Адаптивність та структура :",
        pFour: "Сайт адаптований під desktop та mobile: зручна подача ключових переваг, картки можливостей, читабельні метрики та комфортна структура на невеликих екранах.",
        pFive: "Що зроблено :",
      },
      ul: ["UI/UX дизайн", "Front-End розробка", "Адаптивна верстка (Desktop/Mobile)", "Архітектура цільової сторінки продукту", "Блок CTA з високою конверсією", "Презентація фінтех-продукту"],
    },
    en: {
      title: "Etran — Responsive Website for a Fintech App",
      description: {
        pOne: "Etran — Responsive Website for a Fintech App :",
        pTwo: "Landing page concept for a mobile app that helps make money transfers easier and faster, manage expenses, and handle finances securely right from your phone. The project focuses on a minimalist fintech layout, clean structure, hero screen, benefits section, metric cards, trust sections, final CTA block, and mobile adaptation.",
        pThree: "Adaptability and structure :",
        pFour: "The site is adapted for desktop and mobile: convenient presentation of key benefits, feature cards, readable metrics, and a comfortable structure on small screens.",
        pFive: "What was done :",
      },
      ul: ["UI/UX Design", "Front-End Development", "Responsive Layout (Desktop/Mobile)", "Product Landing Page Architecture", "High-Conversion CTA Block", "Fintech Product Presentation"],
    },
    pl: {
      title: "Etran — Responsywna strona dla aplikacji fintechowej",
      description: {
        pOne: "Etran — Responsywna strona dla aplikacji fintechowej :",
        pTwo: "Koncepcja landing page dla aplikacji mobilnej, która pomaga łatwiej i szybciej wykonywać przelewy pieniężne, zarządzać wydatkami oraz bezpiecznie operować finansami bezpośrednio z telefonu. W projekcie postawiono na minimalistyczną prezencję fintech, czytelną strukturę, ekran hero, sekcję korzyści, karty metryk, sekcje zaufania, końcowy blok CTA oraz adaptację mobilną.",
        pThree: "Responsywność i struktura :",
        pFour: "Strona jest dostosowana do komputerów i urządzeń mobilnych: wygodna prezentacja kluczowych zalet, karty możliwości, czytelne metryki oraz komfortowa struktura na mniejszych ekranach.",
        pFive: "Co zostało zrobione :",
      },
      ul: ["Projektowanie UI/UX", "Rozwój Front-End", "Responsywny układ (Desktop/Mobile)", "Architektura docelowej strony produktu", "Blok CTA o wysokiej konwersji", "Prezentacja produktu fintech"],
    },
    ru: {
      title: "Etran — адаптивный сайт для финтех-приложения",
      description: {
        pOne: "Etran — адаптивный сайт для финтех-приложения :",
        pTwo: "Концепт лендинга для мобильного приложения, которое помогает проще и быстрее выполнять денежные переводы, управлять расходами и безопасно работать с финансами прямо с телефона. В проекте сделан акцент на минималистичную fintech-подачу, чистую структуру, hero-экран, блок преимуществ, карточки метрик, секции доверия, финальный CTA-блок и мобильную адаптацию.",
        pThree: "Адаптивность и структура :",
        pFour: "Сайт адаптирован под desktop и mobile: удобная подача ключевых преимуществ, карточки возможностей, читабельные метрики и комфортная структура на небольших экранах.",
        pFive: "Что сделано :",
      },
      ul: ["UI/UX дизайн", "Front-End разработка", "Адаптивная верстка (Desktop/Mobile)", "Архитектура целевой страницы продукта", "Блок CTA с высокой конверсией", "Презентация финтех-продукта"],
    },
  },
  // 3й ПРОЄКТ
  // 3й ПРОЄКТ
  // 3й ПРОЄКТ
  {
    id: 2,
    link: "https://mrgreentitan.github.io/portfolio-site-Travel-Agency-Landing-Page",
    image: "w3.webp",
    ua: {
      title: "Travellian — адаптивний лендинг для туристичного агентства",
      description: {
        pOne: "Travellian — адаптивний лендинг для туристичного агентства :",
        pTwo: "Концепт сайту для travel-сервісу, який допомагає користувачам обирати напрямки, переглядати спеціальні пропозиції та планувати подорожі онлайн. У проєкті зроблено акцент на атмосферну візуальну подачу, великий hero-екран, форму пошуку подорожі, популярні напрямки, картки спеціальних пропозицій, блок турів, галерею локацій та мобільну адаптацію.",
        pThree: "Адаптивність та структура :",
        pFour: "Сайт адаптований під desktop та mobile: окрема мобільна навігація, зручна форма вибору подорожі, адаптивні картки напрямків та читабельна структура на невеликих екранах.",
        pFive: "Що зроблено :",
      },
      ul: ["UI/UX дизайн", "Front-End розробка", "Адаптивна верстка (Desktop/Mobile)", "Інтерактивне навігаційне меню", "Форма пошуку та бронювання", "Динамічні каруселі напрямків"],
    },
    en: {
      title: "Travellian — Responsive Landing Page for a Travel Agency",
      description: {
        pOne: "Travellian — Responsive Landing Page for a Travel Agency :",
        pTwo: "Website concept for a travel service that helps users choose destinations, view special offers, and plan trips online. The project focuses on an atmospheric visual presentation, a large hero screen, a trip search form, popular destinations, special offer cards, a tour section, a location gallery, and mobile adaptation.",
        pThree: "Adaptability and structure :",
        pFour: "The site is adapted for desktop and mobile: separate mobile navigation, a convenient trip selection form, responsive destination cards, and a readable structure on small screens.",
        pFive: "What was done :",
      },
      ul: ["UI/UX Design", "Front-End Development", "Responsive Layout (Desktop/Mobile)", "Interactive Navigation Menu", "Search and Booking Form", "Dynamic Destination Carousels"],
    },
    pl: {
      title: "Travellian — Responsywny landing page dla biura podróży",
      description: {
        pOne: "Travellian — Responsywny landing page dla biura podróży :",
        pTwo: "Koncepcja strony dla serwisu turystycznego, która pomaga użytkownikom wybierać kierunki, przeglądać oferty specjalne i planować podróże online. W projekcie postawiono nacisk na klimatyczną oprawę wizualną, duży ekran hero, formularz wyszukiwania podróży, popularne kierunki, karty ofert specjalnych, sekcję wycieczek, galerię lokalizacji oraz adaptację mobilną.",
        pThree: "Responsywność i struktura :",
        pFour:
          "Strona jest dostosowana do komputerów i urządzeń mobilnych: osobna nawigacja mobilna, wygodny formularz wyboru podróży, responsywne karty kierunków oraz czytelna struktura na mniejszych ekranach.",
        pFive: "Co zostało zrobione :",
      },
      ul: ["Projektowanie UI/UX", "Rozwój Front-End", "Responsywny układ (Desktop/Mobile)", "Interaktywne menu nawigacyjne", "Formularz wyszukiwania i rezerwacji", "Dynamiczne karuzele kierunków"],
    },
    ru: {
      title: "Travellian — адаптивный лендинг для туристического агентства",
      description: {
        pOne: "Travellian — адаптивный лендинг для туристического агентства :",
        pTwo: "Концепт сайта для travel-сервиса, который помогает пользователям выбирать направления, просматривать специальные предложения и планировать путешествия онлайн. В проекте сделан акцент на атмосферную визуальную подачу, большой hero-экран, форму поиска путешествия, популярные направления, карточки специальных предложений, блок туров, галерею локаций и мобильную адаптацию.",
        pThree: "Адаптивность и структура :",
        pFour: "Сайт адаптирован под desktop и mobile: отдельная мобильная навигация, удобная форма выбора путешествия, адаптивные карточки направлений и читабельная структура на небольших экранах.",
        pFive: "Что сделано :",
      },
      ul: ["UI/UX дизайн", "Front-End разработка", "Адаптивная верстка (Desktop/Mobile)", "Интерактивное навигационное меню", "Форма поиска и бронирования", "Динамические карусели направлений"],
    },
  },
  // 4й ПРОЄКТ
  // 4й ПРОЄКТ
  // 4й ПРОЄКТ
  {
    id: 3,
    link: "https://mrgreentitan.github.io/portfolio-site-Responsive-Startup-Website-Community-",
    image: "w4.webp",
    ua: {
      title: "Start — адаптивний лендинг для startup/digital-команди",
      description: {
        pOne: "Start — адаптивний лендинг для startup/digital-команди :",
        pTwo: "Концепт сайту для команди, яка допомагає запускати сучасні сайти, digital-кампанії та сервісні сторінки для бізнесу. У проєкті зроблено акцент на чисту startup-подачу, яскравий hero-екран із фірмовою ілюстрацією, блок довіри з партнерами, портфоліо Selected Work, тарифні картки Service, Plans, секцію команди, контактну форму та мобільну адаптацію.",
        pThree: "Адаптивність та структура :",
        pFour: "Сайт адаптований під desktop та mobile: окреме мобільне меню, зручна структура секцій, адаптивні картки портфоліо, тарифів та контактна форма для невеликих екранів.",
        pFive: "Що зроблено :",
      },
      ul: [
        "UI/UX дизайн",
        "Front-End розробка",
        "Адаптивна верстка (Desktop/Mobile)",
        "Інтерактивне навігаційне меню",
        "Блок презентації портфоліо",
        "Картки тарифів та послуг",
        "Інтеграція контактної форми",
      ],
    },
    en: {
      title: "Start — Responsive Landing Page for a Startup/Digital Team",
      description: {
        pOne: "Start — Responsive Landing Page for a Startup/Digital Team :",
        pTwo: "A website concept for a team that helps launch modern websites, digital campaigns, and service pages for businesses. The project focuses on a clean startup presentation, a bright hero screen with a custom illustration, a trust section with partners, a Selected Work portfolio, Service and Plans pricing cards, a team section, a contact form, and mobile adaptation.",
        pThree: "Adaptability and structure :",
        pFour: "The site is adapted for desktop and mobile: a separate mobile menu, a convenient section structure, responsive portfolio and pricing cards, and a contact form for small screens.",
        pFive: "What was done :",
      },
      ul: [
        "UI/UX Design",
        "Front-End Development",
        "Responsive Layout (Desktop/Mobile)",
        "Interactive Navigation Menu",
        "Portfolio Presentation Block",
        "Pricing and Service Cards",
        "Contact Form Integration",
      ],
    },
    pl: {
      title: "Start — Responsywny landing page dla startupu / digital teamu",
      description: {
        pOne: "Start — Responsywny landing page dla startupu / digital teamu :",
        pTwo: "Koncepcja strony dla zespołu, który pomaga uruchamiać nowoczesne strony internetowe, kampanie cyfrowe i strony usługowe dla biznesu. W projekcie postawiono na czystą prezentację w stylu startupu, jasny ekran hero z firmową ilustracją, sekcję zaufania z partnerami, portfolio Selected Work, karty cenowe Service i Plans, sekcję zespołu, formularz kontaktowy oraz adaptację mobilną.",
        pThree: "Responsywność i struktura :",
        pFour:
          "Strona jest dostosowana do komputerów i urządzeń mobilnych: osobne menu mobilne, wygodna struktura sekcji, responsywne karty portfolio i cenników oraz formularz kontaktowy na mniejsze ekrany.",
        pFive: "Co zostało zrobione :",
      },
      ul: [
        "Projektowanie UI/UX",
        "Rozwój Front-End",
        "Responsywny układ (Desktop/Mobile)",
        "Interaktywne menu nawigacyjne",
        "Blok prezentacji portfolio",
        "Karty cenników i usług",
        "Integracja formularza kontaktowego",
      ],
    },
    ru: {
      title: "Start — адаптивный лендинг для startup/digital-команды",
      description: {
        pOne: "Start — адаптивный лендинг для startup/digital-команды :",
        pTwo: "Концепт сайта для команды, которая помогает запускать современные сайты, digital-кампании и сервисные страницы для бизнеса. В проекте сделан акцент на чистую startup-подачу, яркий hero-экран с фирменной иллюстрацией, блок доверия с партнерами, портфолио Selected Work, тарифные карточки Service, Plans, секцию команды, контактную форму и мобильную адаптацию.",
        pThree: "Адаптивность и структура :",
        pFour: "Сайт адаптирован под desktop и mobile: отдельное мобильное меню, удобная структура секций, адаптивные карточки портфолио, тарифов и контактная форма для небольших экранов.",
        pFive: "Что сделано :",
      },
      ul: [
        "UI/UX дизайн",
        "Front-End разработка",
        "Адаптивная верстка (Desktop/Mobile)",
        "Интерактивное навигационное меню",
        "Блок презентации портфолио",
        "Карточки тарифов и услуг",
        "Интеграция контактной формы",
      ],
    },
  },
  // 5й ПРОЄКТ
  // 5й ПРОЄКТ
  // 5й ПРОЄКТ
  {
    id: 4,
    link: "https://mrgreentitan.github.io/portfolio-site-personalCV",
    image: "w5.webp",
    ua: {
      title: "Andriy Bol. — Адаптивний сайт-портфоліо фронт-енд розробника",
      description: {
        pOne: "Андрій Бол. — Адаптивний сайт-портфоліо :",
        pTwo: "Концепт персонального портфоліо для frontend-розробника з можливістю представити навички, досвід, проєкти та залишити заявку через контактну форму. У проєкті зроблено акцент на мінімалістичну чорно-білу візуальну подачу, зрозумілу структуру, блок навичок, досвід роботи, секцію проєктів, форму зв’язку та можливість завантажити резюме/CV.",
        pThree: "Адаптивність та структура :",
        pFour: "Сайт адаптований під desktop та mobile: окреме мобільне меню, зручна подача інформації про розробника, картки навичок, проєкти та читабельна структура на невеликих екранах.",
        pFive: "Що зроблено :",
      },
      ul: ["UI/UX дизайн", "Front-End розробка", "Адаптивна верстка (Mobile/Desktop)", "Інтерактивне навігаційне меню", "Інтеграція контактної форми", "Функціонал завантаження резюме/CV"],
    },
    en: {
      title: "Andriy Bol. — Responsive Portfolio Website for a Frontend Developer",
      description: {
        pOne: "Andriy Bol. — Responsive Portfolio Website :",
        pTwo: "A personal portfolio concept for a frontend developer to showcase skills, experience, projects, and receive inquiries via a contact form. The project focuses on a minimalist black-and-white visual presentation, clear structure, skills section, work experience, projects section, contact form, and a feature to download a resume/CV.",
        pThree: "Adaptability and structure :",
        pFour:
          "The site is adapted for desktop and mobile: a separate mobile menu, convenient presentation of developer information, skill cards, projects, and a readable structure on small screens.",
        pFive: "What was done :",
      },
      ul: ["UI/UX Design", "Front-End Development", "Responsive Layout (Mobile/Desktop)", "Interactive Navigation Menu", "Contact Form Integration", "Resume/CV Download Functionality"],
    },
    pl: {
      title: "Andriy Bol. — Responsywna strona portfolio frontend developera",
      description: {
        pOne: "Andriy Bol. — Responsywna strona portfolio :",
        pTwo: "Koncepcja osobistego portfolio dla frontend developera z możliwością zaprezentowania umiejętności, doświadczenia, projektów i złożenia zapytania przez formularz kontaktowy. W projekcie postawiono na minimalistyczną czarno-białą oprawę wizualną, czytelną strukturę, sekcję umiejętności, doświadczenie zawodowe, sekcję projektów, formularz kontaktowy oraz możliwość pobrania CV.",
        pThree: "Responsywność i struktura :",
        pFour:
          "Strona jest dostosowana do komputerów i urządzeń mobilnych: osobne menu mobilne, wygodne przedstawienie informacji o programiście, karty umiejętności, projekty oraz czytelna struktura na mniejszych ekranach.",
        pFive: "Co zostało zrobione :",
      },
      ul: ["Projektowanie UI/UX", "Rozwój Front-End", "Responsywny układ (Mobile/Desktop)", "Interaktywne menu nawigacyjne", "Integracja formularza kontaktowego", "Funkcja pobierania CV"],
    },
    ru: {
      title: "Andriy Bol. — Адаптивный сайт-портфолио фронтенд-разработчика",
      description: {
        pOne: "Андрей Бол. — адаптивный сайт-портфолио :",
        pTwo: "Концепт персонального портфолио для frontend-разработчика с возможностью представить навыки, опыт, проекты и оставить заявку через контактную форму. В проекте сделан акцент на минималистичную черно-белую визуальную подачу, понятную структуру, блок навыков, опыт работы, секцию проектов, форму связи и возможность скачать резюме/CV.",
        pThree: "Адаптивность и структура :",
        pFour: "Сайт адаптирован под desktop и mobile: отдельное мобильное меню, удобная подача информации о разработчике, карточки навыков, проекты и читабельная структура на небольших экранах.",
        pFive: "Что сделано :",
      },
      ul: ["UI/UX дизайн", "Front-End разработка", "Адаптивная верстка (Mobile/Desktop)", "Интерактивное навигационное меню", "Интеграция контактной формы", "Функционал скачивания резюме/CV"],
    },
  },
  // 6й ПРОЄКТ
  // 6й ПРОЄКТ
  // 6й ПРОЄКТ
  {
    id: 5,
    link: "https://mrgreentitan.github.io/portfolio-site-Modern-Analytics-Product-Launch",
    image: "w6.webp",
    ua: {
      title: "Area — адаптивний сайт для запуску аналітичного продукту",
      description: {
        pOne: "Area — адаптивний сайт для запуску аналітичного продукту :",
        pTwo: "Концепт лендингу для сучасного analytics-продукту, який допомагає презентувати можливості сервісу, показати ключові переваги та підвести користувача до запиту demo. У проєкті зроблено акцент на чисту мінімалістичну візуальну подачу, велику hero-секцію, продуктовий preview, блок переваг, секцію можливостей, порівняльну таблицю, CTA-блок та мобільну адаптацію.",
        pThree: "Адаптивність та структура :",
        pFour: "Сайт адаптований під desktop та mobile: окреме мобільне меню, зручна подача інформації про продукт, читабельні секції переваг та комфортна структура на невеликих екранах.",
        pFive: "Що зроблено :",
      },
      ul: [
        "UI/UX дизайн",
        "Front-End розробка",
        "Адаптивна верстка (Mobile/Desktop)",
        "Інтерактивне навігаційне меню",
        "Архітектура цільової сторінки продукту",
        "Інтеграція CTA-блоку для демо з високою конверсією",
      ],
    },
    en: {
      title: "Area — Responsive Landing Page for an Analytics Product Launch",
      description: {
        pOne: "Area — Responsive Landing Page for an Analytics Product Launch :",
        pTwo: "A landing page concept for a modern analytics product that helps present the service's capabilities, highlight key benefits, and lead the user to request a demo. The project focuses on a clean, minimalist visual presentation, a large hero section, product preview, benefits block, features section, comparison table, CTA block, and mobile adaptation.",
        pThree: "Adaptability and structure :",
        pFour:
          "The site is adapted for desktop and mobile: a separate mobile menu, convenient presentation of product information, readable benefit sections, and a comfortable structure on small screens.",
        pFive: "What was done :",
      },
      ul: ["UI/UX Design", "Front-End Development", "Responsive Layout (Mobile/Desktop)", "Interactive Navigation Menu", "Product Landing Page Architecture", "High-Conversion Demo CTA Integration"],
    },
    pl: {
      title: "Area — Responsywny landing page dla premiery produktu analitycznego",
      description: {
        pOne: "Area — Responsywny landing page dla premiery produktu analitycznego :",
        pTwo: "Koncepcja landing page dla nowoczesnego produktu analitycznego, która pomaga zaprezentować możliwości serwisu, pokazać kluczowe zalety i doprowadzić użytkownika do zapytania o demo. W projekcie postawiono na czystą, minimalistyczną oprawę wizualną, dużą sekcję hero, podgląd produktu, blok korzyści, sekcję możliwości, tabelę porównawczą, blok CTA oraz adaptację mobilną.",
        pThree: "Responsywność i struktura :",
        pFour:
          "Strona jest dostosowana do komputerów i urządzeń mobilnych: osobne menu mobilne, wygodna prezentacja informacji o produkcie, czytelne sekcje korzyści oraz komfortowa struktura na mniejszych ekranach.",
        pFive: "Co zostało zrobione :",
      },
      ul: [
        "Projektowanie UI/UX",
        "Rozwój Front-End",
        "Responsywny układ (Mobile/Desktop)",
        "Interaktywne menu nawigacyjne",
        "Architektura docelowej strony produktu",
        "Integracja bloku CTA dla demo o wysokiej konwersji",
      ],
    },
    ru: {
      title: "Area — адаптивный сайт для запуска аналитического продукта",
      description: {
        pOne: "Area — адаптивный сайт для запуска аналитического продукта :",
        pTwo: "Концепт лендинга для современного analytics-продукта, который помогает презентовать возможности сервиса, показать ключевые преимущества и подвести пользователя к запросу demo. В проекте сделан акцент на чистую минималистичную визуальную подачу, большую hero-секцию, продуктовое preview, блок преимуществ, секцию возможностей, сравнительную таблицу, CTA-блок и мобильную адаптацию.",
        pThree: "Адаптивность и структура :",
        pFour: "Сайт адаптирован под desktop и mobile: отдельное мобильное меню, удобная подача информации о продукте, читабельные секции преимуществ и комфортная структура на небольших экранах.",
        pFive: "Что сделано :",
      },
      ul: [
        "UI/UX дизайн",
        "Front-End разработка",
        "Адаптивная верстка (Mobile/Desktop)",
        "Интерактивное навигационное меню",
        "Архитектура целевой страницы продукта",
        "Интеграция CTA-блока для демо с высокой конверсией",
      ],
    },
  },
  // 7й ПРОЄКТ
  // 7й ПРОЄКТ
  // 7й ПРОЄКТ
  {
    id: 6,
    link: "https://mrgreentitan.github.io/portfolio-site-Alex-Portfolio-page/",
    image: "w7.webp",
    ua: {
      title: "Алекс Портфоліо — адаптивний сайт-портфоліо веброзробника",
      description: {
        pOne: "Алекс Портфоліо — адаптивний сайт-портфоліо веброзробника :",
        pTwo: "Концепт персонального portfolio-сайту для web developer, який створює виразні лендинги, адаптивні інтерфейси та впізнавані бізнес-сайти. У проєкті зроблено акцент на сміливу візуальну подачу, темну преміальну атмосферу, великий hero-екран, 3D-об’єкт, блок із проєктами, секцію послуг, картки клієнтів та контактну форму.",
        pThree: "Адаптивність та анімації :",
        pFour: "Сайт адаптований під desktop та mobile: реалізовано окреме мобільне меню, зручну структуру на невеликих екранах та плавний скрол, який показує роботу сайту в динаміці.",
        pFive: "Що зроблено :",
      },
      ul: [
        "UI/UX дизайн",
        "Front-End розробка",
        "Адаптивна верстка (Mobile/Desktop)",
        "Інтерактивне навігаційне меню",
        "Анімації на основі прокручування (Scroll-Driven Animations)",
        "Інтеграція контактної форми",
      ],
    },
    en: {
      title: "Alex Portfolio — Responsive Web Developer Portfolio Website",
      description: {
        pOne: "Alex Portfolio — Responsive Web Developer Portfolio Website :",
        pTwo: "A personal portfolio website concept for a web developer who creates expressive landing pages, responsive interfaces, and recognizable business websites. The project focuses on a bold visual presentation, a dark premium atmosphere, a large hero screen, a 3D object, a projects block, a services section, client cards, and a contact form.",
        pThree: "Adaptability and animations :",
        pFour:
          "The site is adapted for desktop and mobile: a separate mobile menu is implemented, along with a convenient structure on small screens and smooth scrolling that shows the site's dynamic operation.",
        pFive: "What was done :",
      },
      ul: ["UI/UX Design", "Front-End Development", "Responsive Layout (Mobile/Desktop)", "Interactive Navigation Menu", "Scroll-Driven Animations", "Contact Form Integration"],
    },
    pl: {
      title: "Alex Portfolio — Responsywna strona portfolio web developera",
      description: {
        pOne: "Alex Portfolio — Responsywna strona portfolio web developera :",
        pTwo: "Koncepcja osobistej strony portfolio dla web developera, który tworzy wyraziste landing page'e, responsywne interfejsy i rozpoznawalne strony biznesowe. W projekcie postawiono na odważną oprawę wizualną, ciemną atmosferę premium, duży ekran hero, obiekt 3D, blok z projektami, sekcję usług, karty klientów oraz formularz kontaktowy.",
        pThree: "Responsywność i animacje :",
        pFour:
          "Strona jest dostosowana do komputerów i urządzeń mobilnych: zaimplementowano osobne menu mobilne, wygodną strukturę na mniejszych ekranach oraz płynne przewijanie, które pokazuje działanie strony w dynamice.",
        pFive: "Co zostało zrobione :",
      },
      ul: [
        "Projektowanie UI/UX",
        "Rozwój Front-End",
        "Responsywny układ (Mobile/Desktop)",
        "Interaktywne menu nawigacyjne",
        "Animacje oparte na przewijaniu (Scroll-Driven Animations)",
        "Integracja formularza kontaktowego",
      ],
    },
    ru: {
      title: "Alex Portfolio — адаптивный сайт-портфолио веб-разработчика",
      description: {
        pOne: "Alex Portfolio — адаптивный сайт-портфолио веб-разработчика :",
        pTwo: "Концепт персонального portfolio-сайта для web developer, который создает выразительные лендинги, адаптивные интерфейсы и узнаваемые бизнес-сайты. В проекте сделан акцент на смелую визуальную подачу, темную премиальную атмосферу, большой hero-экран, 3D-объект, блок с проектами, секцию услуг, карточки клиентов и контактную форму.",
        pThree: "Адаптивность и анимации :",
        pFour: "Сайт адаптирован под desktop и mobile: реализовано отдельное мобильное меню, удобная структура на небольших экранах и плавный скролл, который показывает работу сайта в динамике.",
        pFive: "Что сделано :",
      },
      ul: [
        "UI/UX дизайн",
        "Front-End разработка",
        "Адаптивная верстка (Mobile/Desktop)",
        "Интерактивное навигационное меню",
        "Анимации на основе прокрутки (Scroll-Driven Animations)",
        "Интеграция контактной формы",
      ],
    },
  },
  // 8й ПРОЄКТ
  // 8й ПРОЄКТ
  // 8й ПРОЄКТ
  {
    id: 7,
    link: "https://mrgreentitan.github.io/portfolio-site-travel-alphine/",
    image: "w8.webp",
    ua: {
      title: "WANDER.gig — адаптивний сайт для туристичного сервісу по Філіппінах",
      description: {
        pOne: "WANDER.gig — адаптивний сайт для туристичного сервісу по Філіппінах :",
        pTwo: "Концепт лендингу для сервісу, який допомагає планувати подорожі по Філіппінах: підбирати напрямки, турпакети та маршрути під різні формати відпочинку. У проєкті зроблено акцент на велику атмосферну візуальну подачу, зручний пошук, інтерактивну карусель з картками напрямків, блок переваг, турпакети, блог та мобільну адаптацію.",
        pThree: "Адаптивність та структура :",
        pFour: "Сайт адаптований під desktop та mobile: окреме мобільне меню, зручна подача туристичних напрямків та читабельна структура на невеликих екранах.",
        pFive: "Що зроблено :",
      },
      ul: ["UI/UX дизайн", "Front-End розробка", "Адаптивна верстка (Mobile/Desktop)", "Інтерактивне навігаційне меню", "Динамічна карусель напрямків"],
    },
    en: {
      title: "WANDER.gig — Responsive Website for a Philippine Travel Service",
      description: {
        pOne: "WANDER.gig — Responsive Website for a Philippine Travel Service :",
        pTwo: "A landing page concept for a service that helps plan trips to the Philippines: select destinations, tour packages, and routes for different vacation formats. The project focuses on a large, atmospheric visual presentation, convenient search, an interactive carousel with destination cards, a benefits block, tour packages, a blog, and mobile adaptation.",
        pThree: "Adaptability and structure :",
        pFour: "The site is adapted for desktop and mobile: a separate mobile menu, convenient presentation of tourist destinations, and a readable structure on small screens.",
        pFive: "What was done :",
      },
      ul: ["UI/UX Design", "Front-End Development", "Responsive Layout (Mobile/Desktop)", "Interactive Navigation Menu", "Dynamic Destination Carousel"],
    },
    pl: {
      title: "WANDER.gig — Responsywna strona dla serwisu turystycznego po Filipinach",
      description: {
        pOne: "WANDER.gig — Responsywna strona dla serwisu turystycznego po Filipinach :",
        pTwo: "Koncepcja landing page dla serwisu pomagającego w planowaniu podróży po Filipinach: wyborze kierunków, pakietów wycieczkowych i tras dla różnych form wypoczynku. W projekcie postawiono na dużą, klimatyczną oprawę wizualną, wygodną wyszukiwarkę, interaktywną karuzelę z kartami kierunków, blok korzyści, pakiety turystyczne, blog oraz adaptację mobilną.",
        pThree: "Responsywność i struktura :",
        pFour: "Strona jest dostosowana do komputerów i urządzeń mobilnych: osobne menu mobilne, wygodna prezentacja kierunków turystycznych oraz czytelna struktura na mniejszych ekranach.",
        pFive: "Co zostało zrobione :",
      },
      ul: ["Projektowanie UI/UX", "Rozwój Front-End", "Responsywny układ (Mobile/Desktop)", "Interaktywne menu nawigacyjne", "Dynamiczna karuzela kierunków"],
    },
    ru: {
      title: "WANDER.gig — адаптивный сайт для туристического сервиса по Филиппинам",
      description: {
        pOne: "WANDER.gig — адаптивный сайт для туристического сервиса по Филиппинам :",
        pTwo: "Концепт лендинга для сервиса, который помогает планировать путешествия по Филиппинам: подбирать направления, турпакеты и маршруты под разные форматы отдыха. В проекте сделан акцент на большую атмосферную визуальную подачу, удобный поиск, интерактивную карусель с карточками направлений, блок преимуществ, турпакеты, блог и мобильную адаптацию.",
        pThree: "Адаптивность и структура :",
        pFour: "Сайт адаптирован под desktop и mobile: отдельное мобильное меню, удобная подача туристических направлений и читабельная структура на небольших экранах.",
        pFive: "Что сделано :",
      },
      ul: ["UI/UX дизайн", "Front-End разработка", "Адаптивная верстка (Mobile/Desktop)", "Интерактивное навигационное меню", "Динамическая карусель направлений"],
    },
  },
];

// 1. ПЕРЕКЛАДИ КОНТЕНТУ БЕЗ ОПИСУ ДЛЯ ПОРТФОЛІО
// 1. ПЕРЕКЛАДИ КОНТЕНТУ БЕЗ ОПИСУ ДЛЯ ПОРТФОЛІО
// 1. ПЕРЕКЛАДИ КОНТЕНТУ БЕЗ ОПИСУ ДЛЯ ПОРТФОЛІО

const translations = {
  ua: {
    pageHome: "Головна",
    pageAbout: "Про мене",
    pageWorks: "Портфоліо",
    pageCont: "Контакти",
    heroName: "Олексій Глазовий",
    btnCreateProject: "Створити проєкт",
    btnShowWorks: "Переглянути роботи",
    aboutMeTitle: "Про мене",
    aboutMep:
      "Займаюся версткою сайтів, використовую виключно ручний формат роботи з HTML, CSS та JavaScript. Без конструкторів. Переношу макети з Figma. Отримуєте чисті, швидкі та адаптивні вебсторінки. Уважно відтворюю деталі дизайну, перевіряю щоб усе коректно працювало на різних екранах та браузерах з максимальною швидкістю.",
    skillsOne: "Фронтенд-навички",
    skillsOneLiOne: "Адаптивний вебдизайн",
    skillsOneLiTwo: "Підтримка різних браузерів",
    skillsOneLiThree: "Робота за макетом, 1в1",
    skillsTwo: "Інструменти",
    skillsTwoLiOne: "HTML5",
    skillsTwoLiTwo: "CSS3",
    skillsTwoLiThree: "JavaScript",
    contactTitle: "Отримати консультацію",
    inpNameLabel: "Ім'я",
    namePlaceholder: "Вкажіть своє Ім'я",
    inpPhoneLabel: "Номер телефону",
    phonePlaceholder: "Вкажіть свій телефон",
    forCont: "Не телефонувати?<br />Вкажіть бажаний зв'язок.",
    btnCtaSubm: "Очікувати",
    workHeroTitle: "Готові приклади",
    spAcord: {
      close: "Розгорнути",
      open: "Сховати",
    },
    btnOpenSite: "ВІДКРИТИ САЙТ",
  },
  en: {
    pageHome: "Home",
    pageAbout: "About Me",
    pageWorks: "Works",
    pageCont: "Contact",
    heroName: "Oleksii Hlazovyi",
    btnCreateProject: "Start a Project",
    btnShowWorks: "View Works",
    aboutMeTitle: "About Me",
    aboutMep:
      "I build websites using exclusively manual HTML, CSS, and JavaScript. No page builders. I convert Figma designs into clean, fast, and responsive web pages. I carefully recreate design details, ensuring everything works correctly across different screens and browsers with maximum speed.",
    skillsOne: "Frontend skills",
    skillsOneLiOne: "Responsive Web Design",
    skillsOneLiTwo: "Cross-browser Development",
    skillsOneLiThree: "Pixel Perfect / PSD to HTML",
    skillsTwo: "Tools",
    skillsTwoLiOne: "HTML5",
    skillsTwoLiTwo: "CSS3",
    skillsTwoLiThree: "JavaScript",
    contactTitle: "Contact me",
    inpNameLabel: "Name",
    namePlaceholder: "Enter your name",
    inpPhoneLabel: "Phone number",
    phonePlaceholder: "Enter your phone number",
    forCont: "Prefer no calls? <br/> Specify your preferred contact method.",
    btnCtaSubm: "Send Request",
    workHeroTitle: "Selected Works",
    spAcord: {
      close: "Expand",
      open: "Collapse",
    },
    btnOpenSite: "OPEN SITE",
  },
  pl: {
    pageHome: "Strona główna",
    pageAbout: "O mnie",
    pageWorks: "Portfolio",
    pageCont: "Kontakt",
    heroName: "Oleksij Hłazowy",
    btnCreateProject: "Stwórz projekt",
    btnShowWorks: "Zobacz prace",
    aboutMeTitle: "O mnie",
    aboutMep:
      "Zajmuję się kodowaniem stron internetowych, używając wyłącznie ręcznego formatu pracy z HTML, CSS i JavaScript. Bez kreatorów stron. Przenoszę projekty z Figmy. Otrzymujesz czyste, szybkie i responsywne strony internetowe. Uważnie odtwarzam detale projektu, sprawdzając, czy wszystko działa poprawnie na różnych ekranach i w różnych przeglądarkach z maksymalną prędkością.",
    skillsOne: "Umiejętności Frontend",
    skillsOneLiOne: "Responsywny web design",
    skillsOneLiTwo: "Kompatybilność międzyprzeglądarkowa",
    skillsOneLiThree: "Praca z makietą, 1:1",
    skillsTwo: "Narzędzia",
    skillsTwoLiOne: "HTML5",
    skillsTwoLiTwo: "CSS3",
    skillsTwoLiThree: "JavaScript",
    contactTitle: "Skontaktuj się ze mną",
    inpNameLabel: "Imię",
    namePlaceholder: "Wpisz swoje imię",
    inpPhoneLabel: "Numer telefonu",
    phonePlaceholder: "Wpisz swój numer telefonu",
    forCont: "Wolisz bez telefonu?<br />Podaj preferowany sposób kontaktu.",
    btnCtaSubm: "Wyślij zapytanie",
    workHeroTitle: "Gotowe przykłady",
    spAcord: {
      close: "Rozwiń",
      open: "Zwiń",
    },
    btnOpenSite: "OTWÓRZ STRONĘ",
  },
  ru: {
    pageHome: "Главная",
    pageAbout: "Обо мне",
    pageWorks: "Работы",
    pageCont: "Контакты",
    heroName: "Алексей Глазовой",
    btnCreateProject: "Создать проект",
    btnShowWorks: "Посмотреть работы",
    aboutMeTitle: "Обо мне",
    aboutMep:
      "Занимаюсь версткой сайтов, использую исключительно ручной формат работы с HTML, CSS и JavaScript. Без конструкторов. Переношу макеты из Figma. Вы получаете чистые, быстрые и адаптивные веб-страницы. Внимательно воссоздаю детали дизайна, проверяю, чтобы всё корректно работало на разных экранах и браузерах с максимальной скоростью.",
    skillsOne: "Фронтенд-навыки",
    skillsOneLiOne: "Адаптивный веб-дизайн",
    skillsOneLiTwo: "Кроссбраузерная верстка",
    skillsOneLiThree: "Работа по макету, 1в1",
    skillsTwo: "Инструменты",
    skillsTwoLiOne: "HTML5",
    skillsTwoLiTwo: "CSS3",
    skillsTwoLiThree: "JavaScript",
    contactTitle: "Получить консультацию",
    inpNameLabel: "Имя",
    namePlaceholder: "Укажите ваше имя",
    inpPhoneLabel: "Номер телефона",
    phonePlaceholder: "Укажите ваш телефон",
    forCont: "Не звонить?<br />Укажите желаемый способ связи.",
    btnCtaSubm: "Отправить запрос",
    workHeroTitle: "Готовые примеры",
    spAcord: {
      close: "Развернуть",
      open: "Скрыть",
    },
    btnOpenSite: "ОТКРЫТЬ САЙТ",
  },
};

// 3. ПЕРЕХІД З ТОРІНКИ ГОЛОВНА НА ПРОЕКТИ ТА НАВПАКИ
// 3. ПЕРЕХІД З ТОРІНКИ ГОЛОВНА НА ПРОЕКТИ ТА НАВПАКИ
// 3. ПЕРЕХІД З ТОРІНКИ ГОЛОВНА НА ПРОЕКТИ ТА НАВПАКИ

const header = document.querySelector("header");
const pageHome = document.getElementById("pageHome");
const pageWorks = document.getElementById("pageWorks");
const pageContainerHome = document.querySelector(".p-cont-one");
const pageContainerWorks = document.querySelector(".p-cont-two");
const btnShowWorks = document.getElementById("btnShowWorks");

function navListRemoveClass() {
  let ul = pageHome.closest("ul");
  let navAList = ul.querySelectorAll("a");
  navAList.forEach((a) => {
    a.classList.remove("st");
  });
}

let isAnimating = false;

function clickPageWorks() {
  if (header.classList.contains("works") || isAnimating) return;
  isAnimating = true;

  header.classList.add("works");
  pageContainerHome.classList.add("hide");
  pageContainerWorks.classList.add("show");
  navListRemoveClass();
  pageWorks.classList.add("st");

  pageContainerWorks.addEventListener(
    "transitionend",
    function () {
      pageContainerHome.style.display = "none";
      pageContainerWorks.style.position = "relative";
      pageContainerWorks.style.transform = "none";
      isAnimating = false;
    },
    { once: true },
  );
}

function clickPageHome() {
  if (!header.classList.contains("works") || isAnimating) return;
  isAnimating = true;

  navListRemoveClass();
  pageHome.classList.add("st");

  pageContainerHome.style.removeProperty("display");
  requestAnimationFrame(() => {
    pageContainerWorks.style.removeProperty("position");
    pageContainerWorks.style.removeProperty("transform");
    header.classList.remove("works");
    pageContainerHome.classList.remove("hide");
    pageContainerWorks.classList.remove("show");

    pageContainerHome.addEventListener(
      "transitionend",
      function () {
        isAnimating = false;
      },
      { once: true },
    );
  });
}

if (pageWorks) pageWorks.addEventListener("click", clickPageWorks);
if (pageHome) pageHome.addEventListener("click", clickPageHome);
if (btnShowWorks) btnShowWorks.addEventListener("click", clickPageWorks);

// 4. ВІДКРИТИ АБО ЗАКРИТИ СПИСОК МОВ
// 4. ВІДКРИТИ АБО ЗАКРИТИ СПИСОК МОВ
// 4. ВІДКРИТИ АБО ЗАКРИТИ СПИСОК МОВ

const langBlock = document.querySelector(".lang-swapper");
if (langBlock) {
  const currentLang = langBlock.querySelector(":scope > div > span[data-lang]");
  const langList = langBlock.querySelector("ul");

  langBlock.addEventListener("click", (event) => {
    if (event.target.closest("ul")) return;
    langBlock.classList.toggle("open");
  });

  langList.addEventListener("click", (event) => {
    const clickedItem = event.target.closest("li[data-lang]");
    if (!clickedItem) return;

    const previousCode = currentLang.dataset.lang;
    const previousName = currentLang.textContent;

    currentLang.dataset.lang = clickedItem.dataset.lang;
    currentLang.textContent = clickedItem.textContent;

    clickedItem.dataset.lang = previousCode;
    clickedItem.textContent = previousName;

    langBlock.classList.remove("open");

    let curLeng = currentLang.dataset.lang;

    // Зберігаємо вибір у localStorage
    localStorage.setItem("selectedLang", curLeng);

    rendNewLeng(curLeng);
  });

  function rendNewLeng(curLeng) {
    document.documentElement.setAttribute("lang", curLeng);

    let currentLengElements = translations[curLeng];

    // переклад елементів (data-i18n)
    let elementsAwaitTrans = document.querySelectorAll("[data-i18n]");
    elementsAwaitTrans.forEach((element) => {
      let key = element.dataset.i18n;

      if (key.includes(".")) {
        let keys = key.split(".");
        let value = currentLengElements;
        keys.forEach((k) => {
          if (value) value = value[k];
        });
        if (value) element.innerHTML = value;
      } else {
        if (currentLengElements && currentLengElements[key]) {
          element.innerHTML = currentLengElements[key];
        }
      }
    });

    // Додатковий переклад плейсхолдера в інпутах (data-i18n-placeholder)
    let inputsAwaitTrans = document.querySelectorAll("[data-i18n-placeholder]");
    inputsAwaitTrans.forEach((input) => {
      let key = input.dataset.i18nPlaceholder;
      if (currentLengElements && currentLengElements[key]) {
        input.placeholder = currentLengElements[key];
      }
    });

    // Оновлення карток із портфоліо
    renderWorks(curLeng);
  }

  // При перезавантаж. повертаємо обранну мову - локаСторедж
  const savedLang = localStorage.getItem("selectedLang") || "ua";

  if (currentLang && currentLang.dataset.lang !== savedLang) {
    const langItems = langList.querySelectorAll("li[data-lang]");

    langItems.forEach((item) => {
      if (item.dataset.lang === savedLang) {
        const tempCode = currentLang.dataset.lang;
        const tempText = currentLang.textContent;

        currentLang.dataset.lang = item.dataset.lang;
        currentLang.textContent = item.textContent;

        item.dataset.lang = tempCode;
        item.textContent = tempText;
      }
    });
  }

  // Перший запуск при оновленні сторінкі обо відкриванні
  rendNewLeng(savedLang);
}

// 5. ПЕРЕМИКАЧ ТЕМИ СВІТЛА/ТЕМНА
// 5. ПЕРЕМИКАЧ ТЕМИ СВІТЛА/ТЕМНА
// 5. ПЕРЕМИКАЧ ТЕМИ СВІТЛА/ТЕМНА

const themeCheckbox = document.getElementById("btn-swap");
function setTheme(isLight) {
  document.body.classList.toggle("light-theme", isLight);
  document.querySelectorAll("img[data-light]").forEach((img) => {
    img.src = isLight ? img.dataset.light : img.dataset.dark;
  });
  localStorage.setItem("theme", isLight ? "light" : "dark");
}

if (themeCheckbox) {
  if (localStorage.getItem("theme") === "light") {
    themeCheckbox.checked = true;
    setTheme(true);
  }
  themeCheckbox.addEventListener("change", () => {
    setTheme(themeCheckbox.checked);
  });
}

// 6. НАТИСКАННЯ ПО НАВІГАЦІІ/ ПРО МЕНЕ/ КОНТАКТИ ТА СКРОЛЛ ДО СЕКЦІЙ
// 6. НАТИСКАННЯ ПО НАВІГАЦІІ/ ПРО МЕНЕ/ КОНТАКТИ ТА СКРОЛЛ ДО СЕКЦІЙ
// 6. НАТИСКАННЯ ПО НАВІГАЦІІ/ ПРО МЕНЕ/ КОНТАКТИ ТА СКРОЛЛ ДО СЕКЦІЙ

const pageAbout = document.getElementById("pageAbout");
const sectAbout = document.getElementById("sectAbout");

function scrollToAbout() {
  navListRemoveClass();
  pageAbout.classList.add("st");

  const formPosition = sectAbout.getBoundingClientRect().top + window.scrollY;
  const headerOffset = 100;
  const offsetPosition = formPosition - headerOffset;

  window.scrollTo({
    top: offsetPosition,
    behavior: "smooth",
  });
}

if (pageAbout && sectAbout) {
  pageAbout.addEventListener("click", function (e) {
    e.preventDefault();
    if (header.classList.contains("works")) {
      clickPageHome();
      pageContainerHome.addEventListener("transitionend", scrollToAbout, {
        once: true,
      });
    } else {
      scrollToAbout();
    }
  });
}

const pageCont = document.getElementById("pageCont");
const sectContact = document.querySelector(".contact");

function scrollToCont() {
  navListRemoveClass();
  pageCont.classList.add("st");

  const formPosition = sectContact.getBoundingClientRect().top + window.scrollY;
  const headerOffset = 100;
  const offsetPosition = formPosition - headerOffset;

  window.scrollTo({
    top: offsetPosition,
    behavior: "smooth",
  });
}

if (pageCont && sectContact) {
  pageCont.addEventListener("click", function (e) {
    e.preventDefault();
    if (header.classList.contains("works")) {
      clickPageHome();
      pageContainerHome.addEventListener("transitionend", scrollToCont, {
        once: true,
      });
    } else {
      scrollToCont();
    }
  });
}

// 7. ВІДТВОРЕННЯ АНІМАЦІІ АКТИВНОСТІ НА МЕНЮ НАВІГАЦІІ ТА СКРОЛУ, ВЗАЛЕЖНОСТІ ВІД СЕКЦІЇ
// 7. ВІДТВОРЕННЯ АНІМАЦІІ АКТИВНОСТІ НА МЕНЮ НАВІГАЦІІ ТА СКРОЛУ, ВЗАЛЕЖНОСТІ ВІД СЕКЦІЇ
// 7. ВІДТВОРЕННЯ АНІМАЦІІ АКТИВНОСТІ НА МЕНЮ НАВІГАЦІІ ТА СКРОЛУ, ВЗАЛЕЖНОСТІ ВІД СЕКЦІЇ

const sectHero = document.querySelector(".hero");
const sectWorks = document.querySelector(".works");

const sections = [
  { section: sectHero, link: pageHome },
  { section: sectAbout, link: pageAbout },
  { section: sectWorks, link: pageWorks },
  { section: sectContact, link: pageCont },
];

const observerNavigationScroll_ST = {
  root: null,
  rootMargin: "-100px 0px -50% 0px",
  threshold: 0,
};

const sectionsObserver = new IntersectionObserver((entries) => {
  if (header && header.classList.contains("works")) return;

  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      let activeMatch = sections.find((s) => s.section === entry.target);
      if (activeMatch && activeMatch.link) {
        navListRemoveClass();
        activeMatch.link.classList.add("st");
      }
    }
  });
}, observerNavigationScroll_ST);

sections.forEach((items) => {
  if (items.section) {
    sectionsObserver.observe(items.section);
  }
});

// 8. НАТИСКАННЯ НА КНОПКУ СТВОРИТИ ПРОЕКТ ТА СКРОЛ ДО ФОРМИ
// 8. НАТИСКАННЯ НА КНОПКУ СТВОРИТИ ПРОЕКТ ТА СКРОЛ ДО ФОРМИ
// 8. НАТИСКАННЯ НА КНОПКУ СТВОРИТИ ПРОЕКТ ТА СКРОЛ ДО ФОРМИ

const btnCreateProject = document.getElementById("btnCreateProject");
const clForm = document.getElementById("clForm");

if (btnCreateProject && clForm) {
  btnCreateProject.addEventListener("click", function (e) {
    e.preventDefault();
    const formPosition = clForm.getBoundingClientRect().top + window.scrollY;
    const headerOffset = 100;
    const offsetPosition = formPosition - headerOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  });
}

// 9. АНІМАЦІЯ ІНПУТА ЗА СОЦІАЛЬНОЮ КНОПКУЮ У ФОРМІ
// 9. АНІМАЦІЯ ІНПУТА ЗА СОЦІАЛЬНОЮ КНОПКУЮ У ФОРМІ
// 9. АНІМАЦІЯ ІНПУТА ЗА СОЦІАЛЬНОЮ КНОПКУЮ У ФОРМІ

const SOCIALS_BLOCK = document.querySelector(".wrap-forcont-socials");
if (SOCIALS_BLOCK) {
  const SPAN_INST = SOCIALS_BLOCK.querySelector(".inst");
  const SPAN_VIBER = SOCIALS_BLOCK.querySelector(".viber");
  const SPAN_TELEG = SOCIALS_BLOCK.querySelector(".teleg");
  const SPAN_WHATS = SOCIALS_BLOCK.querySelector(".whats");
  const WRAP_SOCIAL = document.querySelector(".wrap-inp-social");
  const INPUT_SOCIAL = document.getElementById("inpSocial");
  const LABEL_SOCIAL = document.getElementById("labelInpSicoal");
  const wrap_btn = document.querySelector(".wrap-btn-sumb");

  const soc_clas = ["cl-inst", "cl-viber", "cl-teleg", "cl-whats"];

  SOCIALS_BLOCK.addEventListener("click", (event) => {
    let targetSpan = event.target.closest("span");

    if (!targetSpan || !SOCIALS_BLOCK.contains(targetSpan)) return;

    SOCIALS_BLOCK.querySelectorAll("span").forEach((span) => {
      span.classList.remove("active");
    });

    targetSpan.classList.add("active");
    if (wrap_btn) wrap_btn.classList.add("soc");
    if (WRAP_SOCIAL) WRAP_SOCIAL.classList.add("socshow");

    if (INPUT_SOCIAL) {
      INPUT_SOCIAL.classList.remove(...soc_clas);
      INPUT_SOCIAL.value = "";

      if (SPAN_INST && SPAN_INST.classList.contains("active")) {
        LABEL_SOCIAL.innerText = "Instagram";
        INPUT_SOCIAL.placeholder = "@affa.green";
        INPUT_SOCIAL.classList.add("cl-inst");
      }
      if (SPAN_VIBER && SPAN_VIBER.classList.contains("active")) {
        LABEL_SOCIAL.innerText = "Viber";
        INPUT_SOCIAL.placeholder = "+380 66 905 3822";
        INPUT_SOCIAL.classList.add("cl-viber");
      }
      if (SPAN_TELEG && SPAN_TELEG.classList.contains("active")) {
        LABEL_SOCIAL.innerText = "Telegram";
        INPUT_SOCIAL.placeholder = "@WhooisFinch";
        INPUT_SOCIAL.classList.add("cl-teleg");
      }
      if (SPAN_WHATS && SPAN_WHATS.classList.contains("active")) {
        LABEL_SOCIAL.innerText = "WhatsApp";
        INPUT_SOCIAL.placeholder = "+380 66 905 3822";
        INPUT_SOCIAL.classList.add("cl-whats");
      }
    }
  });
}

// 10. ВІДКИРИТ/ЗАКРИТИ ОПИС РОБІТ У ПОРТФОЛІО
// 10. ВІДКИРИТ/ЗАКРИТИ ОПИС РОБІТ У ПОРТФОЛІО
// 10. ВІДКИРИТ/ЗАКРИТИ ОПИС РОБІТ У ПОРТФОЛІО

function readMore() {
  const worksWrap = document.querySelector(".works-wrap");
  if (!worksWrap) return;

  // Актуальна мова із перемикача
  const currentLangSpan = document.querySelector(".lang-swapper span[data-lang]");
  const curLang = currentLangSpan ? currentLangSpan.dataset.lang : "ua";

  // Берем переклади за актуальною мовою
  const currentDict = translations[curLang] || translations["ua"];

  const blRights = worksWrap.querySelectorAll(".bl-r");

  blRights.forEach((bl) => {
    const div = bl.querySelector(".bl-r-wrap");
    const span = bl.querySelector("span");
    if (!div || !span) return;

    // Ставимо початкой текст при відтворенні сторінки, в залежності від Розгорнути/Сховати
    if (div.classList.contains("active")) {
      span.textContent = currentDict.spAcord.open;
    } else {
      span.textContent = currentDict.spAcord.close;
    }

    span.addEventListener("click", () => {
      const isExpanded = div.classList.toggle("active");

      if (isExpanded) {
        div.style.height = `${div.scrollHeight}px`;
        span.textContent = currentDict.spAcord.open;
      } else {
        div.style.height = "";
        span.textContent = currentDict.spAcord.close;
      }
    });
  });
}

// 11. ЗАХИСТ ТА ПЕРЕВІРКИ ФОРМ НА JS
// 11. ЗАХИСТ ТА ПЕРЕВІРКИ ФОРМ НА JS
// 11. ЗАХИСТ ТА ПЕРЕВІРКИ ФОРМ НА JS

const inputName = document.getElementById("inpName");
const inpPhone = document.getElementById("inpPhone");
const inpSocial = document.getElementById("inpSocial");
const btnCtaSubm = document.getElementById("btnCtaSubm");

if (inputName) {
  const invalidCharsRegex = /[^a-zA-Zа-яА-ЯёЁіІїЇєЄ\s-]/g;
  inputName.addEventListener("input", (e) => {
    e.target.value = e.target.value.replace(invalidCharsRegex, "");
    e.target.value = e.target.value.replace(/\s+/g, " ");
    validateForm();
  });
}

if (inpPhone) {
  inpPhone.addEventListener("input", (e) => {
    let value = e.target.value;
    value = value.replace(/(?!^\+)[^\d]/g, "");
    e.target.value = value;
    validateForm();
  });
}

if (inpSocial) {
  inpSocial.addEventListener("input", (e) => {
    let value = e.target.value;
    if (inpSocial.classList.contains("cl-inst") || inpSocial.classList.contains("cl-teleg")) {
      if (value.length > 0 && !value.startsWith("@")) {
        value = "@" + value;
      }
      e.target.value = value.replace(/[^a-zA-Z0-9._@]/g, "");
    }
    if (inpSocial.classList.contains("cl-viber") || inpSocial.classList.contains("cl-whats")) {
      e.target.value = value.replace(/(?!^\+)[^\d]/g, "");
    }
  });
}

function inpNameValidation(name) {
  const trimName = name.trim();
  if (trimName.length < 2) {
    return { valid: false, error: "Закоротке ім'я" };
  }
  if (trimName.length > 50) {
    return { valid: false, error: "Задовге ім'я" };
  }
  return { valid: true, value: trimName };
}

function inpPhoneValidation(phone) {
  const trimPhone = phone.trim();
  const digitsOnly = trimPhone.replace(/\D/g, "");

  if (digitsOnly.length === 0) {
    return { valid: false, error: "Будь ласка, введіть номер телефону" };
  }
  if (digitsOnly.length < 10) {
    return { valid: false, error: "Номер телефону занадто короткий" };
  }
  if (digitsOnly.length > 15) {
    return { valid: false, error: "Номер телефону занадто довгий" };
  }
  return { valid: true, value: trimPhone, cleanDigits: digitsOnly };
}

function validateForm() {
  if (!btnCtaSubm) return;
  const nameVal = inputName ? inpNameValidation(inputName.value) : { valid: false };
  const phoneVal = inpPhone ? inpPhoneValidation(inpPhone.value) : { valid: false };

  const isFormValid = nameVal.valid && phoneVal.valid;
  btnCtaSubm.disabled = !isFormValid;
  btnCtaSubm.classList.toggle("active", isFormValid);
}

function inpSocialValidation(socialInput) {
  if (!socialInput) return { valid: true, value: null, type: null };

  const trimValue = socialInput.value.trim();
  if (trimValue === "") return { valid: true, value: null, type: null };

  if (socialInput.classList.contains("cl-inst")) {
    const instRegex = /^@[a-zA-Z0-9._]{1,30}$/;
    if (!instRegex.test(trimValue)) {
      return {
        valid: false,
        error: "Некоректний Instagram (формат: @nickname)",
      };
    }
    return { valid: true, value: trimValue, type: "Instagram" };
  }

  if (socialInput.classList.contains("cl-teleg")) {
    const telegRegex = /^@[a-zA-Z0-9_]{5,32}$/;
    if (!telegRegex.test(trimValue)) {
      return {
        valid: false,
        error: "Некоректний Telegram (формат: @nickname, від 5 символів)",
      };
    }
    return { valid: true, value: trimValue, type: "Telegram" };
  }

  if (socialInput.classList.contains("cl-viber") || socialInput.classList.contains("cl-whats")) {
    const digitsOnly = trimValue.replace(/\D/g, "");
    const typeName = socialInput.classList.contains("cl-viber") ? "Viber" : "WhatsApp";
    if (digitsOnly.length < 10 || digitsOnly.length > 15) {
      return {
        valid: false,
        error: `Некоректний номер для ${typeName} (мінімум 10 цифр)`,
      };
    }
    return { valid: true, value: trimValue, type: typeName };
  }
  return { valid: true, value: trimValue, type: "Другое" };
}
validateForm();

// 12. АКТИВНІСТЬ ФОРМИ ТА ВІДПРАВКА ЗАЯВКИ
// 12. АКТИВНІСТЬ ФОРМИ ТА ВІДПРАВКА ЗАЯВКИ
// 12. АКТИВНІСТЬ ФОРМИ ТА ВІДПРАВКА ЗАЯВКИ

const form = document.getElementById("clForm");

if (form) {
  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const formData = new FormData(form);

    try {
      const response = await fetch(form.action, {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        alert("Дякуємо! Ваша заявка успішно надіслана.");
        form.reset(); // Очищаем форму
      } else {
        alert("Помилка відправки. Спробуйте ще раз.");
      }
    } catch (error) {
      console.error("Помилка мережі:", error);
    }
  });
}

// 13. АДАПТИВНІТЬ НАВІГАЦІЇ, МЕНЮ ЗА РОЗМІРОВ ЕКРАНА
// 13. АДАПТИВНІТЬ НАВІГАЦІЇ, МЕНЮ ЗА РОЗМІРОВ ЕКРАНА
// 13. АДАПТИВНІТЬ НАВІГАЦІЇ, МЕНЮ ЗА РОЗМІРОВ ЕКРАНА

const nav = document.querySelector(".header-cont nav");
let langSwapperElement = document.querySelector(".lang-swapper");

function navClose() {
  if (nav) nav.style.transform = "translateY(-200%)";
}

function navOpen() {
  if (nav) nav.style.transform = "translateY(0%)";
}

let isOpen = false;

function addWrapDiv() {
  if (!nav || !langSwapperElement) return;

  if (window.innerWidth <= 815) {
    if (!nav.parentElement.classList.contains("nav-wrap")) {
      const wrapDiv = document.createElement(`div`);
      wrapDiv.classList.add("nav-wrap");
      nav.parentNode.insertBefore(wrapDiv, nav);
      wrapDiv.appendChild(nav);

      const burger = document.createElement(`div`);
      burger.classList.add("burger-menu");
      nav.parentNode.insertBefore(burger, nav);

      const span1 = document.createElement(`span`);
      const span2 = document.createElement(`span`);
      const span3 = document.createElement(`span`);
      burger.appendChild(span1);
      burger.appendChild(span2);
      burger.appendChild(span3);

      navClose();
      langHide();
      isOpen = false;

      burger.addEventListener("click", function () {
        if (isOpen) {
          navClose();
          langHide();
        } else {
          navOpen();
          langShow();
        }
        isOpen = !isOpen;
      });

      let li_list = wrapDiv.querySelectorAll("li");
      li_list.forEach((li) => {
        li.addEventListener("click", function () {
          if (window.innerWidth <= 815) {
            navClose();
            langHide();
            isOpen = false;
          }
        });
      });
    }
  } else {
    nav.style.removeProperty("transform");
    langSwapperElement.style.removeProperty("transform");
    isOpen = false;

    const wrapDiv = nav.parentElement;
    if (wrapDiv.classList.contains("nav-wrap")) {
      wrapDiv.parentNode.insertBefore(nav, wrapDiv);
      wrapDiv.remove();

      const burger = document.querySelector(".burger-menu");
      if (burger) burger.remove();
    }
  }
}

function langHide() {
  if (langSwapperElement) langSwapperElement.style.transform = "translateY(-200%)";
}

function langShow() {
  if (langSwapperElement) langSwapperElement.style.transform = "translateY(0%)";
}

function changeLang() {
  if (!langSwapperElement) return;
  if (window.innerWidth <= 815) {
    langSwapperElement.classList.add("mob");
  } else {
    langSwapperElement.classList.remove("mob");
  }
}

addWrapDiv();
changeLang();

let lastWidth = window.innerWidth;

window.addEventListener("resize", function () {
  if (window.innerWidth !== lastWidth) {
    lastWidth = window.innerWidth;
    addWrapDiv();
    changeLang();
  }
});

// 14. ГЕНЕРАЦІЯ КОНТЕНТУ ДЛЯ ПОРФОЛІО З ОБРАНОЮ МОВОЮ
// 14. ГЕНЕРАЦІЯ КОНТЕНТУ ДЛЯ ПОРФОЛІО З ОБРАНОЮ МОВОЮ
// 14. ГЕНЕРАЦІЯ КОНТЕНТУ ДЛЯ ПОРФОЛІО З ОБРАНОЮ МОВОЮ

function renderWorks(curLang = "ua") {
  const worksWrap = document.querySelector(".works-wrap");

  if (worksWrap) {
    // Беремо переклади напряму з основного глобального об'єкта translations
    const currentDict = translations[curLang] || translations["ua"];

    worksWrap.innerHTML = worksInfo
      .map((work) => {
        const data = work[curLang] || work["ua"];

        return `
          <div class="bl-wr">
            <div class="bl-l">
              <span><a href="${work.link}">${data.title}</a></span>
              <div>
                <img src="./img/${work.image}" alt="${data.title}" loading="lazy">
              </div>
            </div>
            <div class="bl-r">
              <p>${data.description.pOne}</p>
              <p>${data.description.pTwo}</p>
              <div class="bl-r-wrap">
                <p>${data.description.pThree}</p>
                <p>${data.description.pFour}</p>
                <p>${data.description.pFive}</p>
                <div>
                  <ul>
                    ${data.ul.map((item) => `<li>${item}</li>`).join("")}
                  </ul>
                </div>
              </div>
              <span class="read-more-btn" data-i18n="spAcord.close">${currentDict.spAcord.close}</span>
              <a href="${work.link}" data-i18n="btnOpenSite">${currentDict.btnOpenSite}</a>
            </div>
          </div>
        `;
      })
      .join("");

    if (typeof readMore === "function") {
      readMore();
    }
  }
}
