window.addEventListener("load", () => {
  document.body.classList.remove("preload");
});

// 1. ДАНІ ПРОЄКТІВ

const worksInfo = [
  {
    id: 0,
    link: "https://mrgreentitan.github.io/portfolio-site-travel",
    title: "GoVista — Responsive Website for a Travel Service",
    description: {
      pOne: "GoVista — адаптивний сайт для туристичного сервісу :",
      pTwo:
        "Концепт лендингу для компанії, яка організовує авторські подорожі та активні тури. " +
        "У проєкті зроблено акцент на велику візуальну подачу, " +
        "зрозумілу структуру, картки турів, блок переваг, форму заявки " +
        "та мобільну адаптацію.",
      pThree: "Адаптивність та структура :",
      pFour: "Сайт адаптований під desktop та mobile: окреме мобільне " + "меню, зручні картки турів та читабельна структура на " + "невеликих екранах.",
      pFive: "Що зроблено :",
    },
    ul: ["UI/UX дизайн", "Front-End розробка", "Адаптивна верстка (Desktop/Mobile)", "Інтерактивне навігаційне меню", "Інтеграція форми заявки"],
    image: "w1.webp",
  },
  {
    id: 1,
    link: "https://mrgreentitan.github.io/portfolio-site-Trustworthy-App-Download",
    title: "Etran — Responsive Website for a Fintech App",
    description: {
      pOne: "Etran — Responsive Website for a Fintech App :",
      pTwo:
        "Концепт лендингу для мобільного додатку, який допомагає, " +
        "простіше й швидше виконувати грошові перекази, керувати, " +
        "витратами та безпечно працювати з фінансами прямо з телефона. " +
        "У проєкті зроблено акцент на мінімалістичну fintech-подачу, " +
        "чисту структуру, hero-екран, блок переваг, картки метрик, " +
        "секції довіри, фінальний CTA-блок та мобільну адаптацію.",
      pThree: "Адаптивність та структура :",
      pFour: "Сайт адаптований під desktop та mobile: зручна подача " + "ключових переваг, картки можливостей, читабельні метрики " + "та комфортна структура на невеликих екранах.",
      pFive: "Що зроблено :",
    },
    ul: ["UI/UX дизайн", "Front-End розробка", "Адаптивна верстка (Desktop/Mobile)", "Архітектура цільової сторінки продукту", "Блок CTA з високою конверсією", "Презентація фінтех-продукту"],
    image: "w2.webp",
  },
  {
    id: 2,
    link: "https://mrgreentitan.github.io/portfolio-site-Travel-Agency-Landing-Page",
    title: "Travellian — Responsive Landing Page for a Travel Agency",
    description: {
      pOne: "Travellian — адаптивний лендинг для туристичного агентства :",
      pTwo:
        "Концепт сайту для travel-сервісу, який допомагає " +
        "користувачам обирати напрямки, переглядати спеціальні " +
        "пропозиції та планувати подорожі онлайн. " +
        "У проєкті зроблено акцент на атмосферну візуальну подачу, " +
        "великий hero-екран, форму пошуку подорожі, популярні " +
        "напрямки, картки спеціальних пропозицій, блок турів, галерею " +
        "локацій та мобільну адаптацію.",
      pThree: "Адаптивність та структура :",
      pFour: "Сайт адаптований під desktop та mobile: окрема мобільна " + "навігація, зручна форма вибору подорожі, адаптивні картки, " + "напрямків та читабельна структура на невеликих екранах.",
      pFive: "Що зроблено :",
    },
    ul: ["UI/UX дизайн", "Front-End розробка", "Адаптивна верстка (Desktop/Mobile)", "Інтерактивне навігаційне меню", "Форма пошуку та бронювання", "Динамічні каруселі напрямків"],
    image: "w3.webp",
  },
  {
    id: 3,
    link: "https://mrgreentitan.github.io/portfolio-site-Responsive-Startup-Website-Community-",
    title: "Start — Responsive Landing Page for a Startup/Digital Team",
    description: {
      pOne: "Start — адаптивний лендинг для startup/digital-команди :",
      pTwo:
        "Концепт сайту для команди, яка допомагає запускати сучасні, " +
        "сайти, digital-кампанії та сервісні сторінки для бізнесу. " +
        "У проєкті зроблено акцент на чисту startup-подачу, яскравий " +
        "hero-екран із фірмовою ілюстрацією, блок довіри з " +
        "партнерами, портфоліо Selected Work, тарифні картки Service, " +
        "Plans, секцію команди, контактну форму та мобільну " +
        "адаптацію.",
      pThree: "Адаптивність та структура :",
      pFour: "Сайт адаптований під desktop та mobile: окреме мобільне " + "меню, зручна структура секцій, адаптивні картки портфоліо, " + "тарифів та контактна форма для невеликих екранів.",
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
    image: "w4.webp",
  },
  {
    id: 4,
    link: "https://mrgreentitan.github.io/portfolio-site-personalCV",
    title: "Andriy Bol. — Responsive Portfolio Website for a Frontend Developer",
    description: {
      pOne: "Андрій Бол. — адаптивний сайт-портфоліо :",
      pTwo:
        "Концепт персонального портфоліо для frontend-розробника з " +
        "можливістю представити навички, досвід, проєкти та " +
        "залишити заявку через контактну форму." +
        "У проєкті зроблено акцент на мінімалістичну чорно-білу " +
        "візуальну подачу, зрозумілу структуру, блок навичок, досвід " +
        "роботи, секцію проєктів, форму зв’язку та можливість " +
        "завантажити резюме/CV.",
      pThree: "Адаптивність та структура :",
      pFour: "Сайт адаптований під desktop та mobile: окреме мобільне " + "меню, зручна подача інформації про розробника, картки " + "навичок, проєкти та читабельна структура на невеликих екранах.",
      pFive: "Що зроблено :",
    },
    ul: ["UI/UX дизайн", "Front-End розробка", "Адаптивна верстка (Mobile/Desktop)", "Інтерактивне навігаційне меню", "Інтеграція контактної форми", "Функціонал завантаження резюме/CV"],
    image: "w5.webp",
  },
  {
    id: 5,
    link: "https://mrgreentitan.github.io/portfolio-site-Modern-Analytics-Product-Launch",
    title: "Area — Responsive Landing Page for an Analytics Product Launch",
    description: {
      pOne: "Area — адаптивний сайт для запуску аналітичного продукту :",
      pTwo:
        "Концепт лендингу для сучасного analytics-продукту, який " +
        "допомагає презентувати можливості сервісу, показати " +
        "ключові переваги та підвести користувача до запиту demo. " +
        "У проєкті зроблено акцент на чисту мінімалістичну візуальну " +
        "подачу, велику hero-секцію, продуктовий preview, блок " +
        "переваг, секцію можливостей, порівняльну таблицю, CTA-блок та мобільну адаптацію.",
      pThree: "Адаптивність та структура :",
      pFour: "Сайт адаптований під desktop та mobile: окреме мобільне " + "меню, зручна подача інформації про продукт, читабельні " + "секції переваг та комфортна структура на невеликих екранах.",
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
    image: "w6.webp",
  },
  {
    id: 6,
    link: "https://mrgreentitan.github.io/portfolio-site-Alex-Portfolio-page/",
    title: "Alex Portfolio — Responsive Web Developer Portfolio Website",
    description: {
      pOne: "Alex Portfolio — адаптивний сайт-портфоліо веброзробника :",
      pTwo:
        "Концепт персонального portfolio-сайту для web developer, " +
        "який створює виразні лендинги, адаптивні інтерфейси та впізнавані бізнес-сайти. " +
        "У проєкті зроблено акцент на сміливу візуальну подачу, темну " +
        "преміальну атмосферу, великий hero-екран, 3D-об’єкт, блок із " +
        "проєктами, секцію послуг, картки клієнтів та контактну форму.",
      pThree: "Адаптивність та анімації :",
      pFour: "Сайт адаптований під desktop та mobile: реалізовано окреме " + "мобільне меню, зручну структуру на невеликих екранах та " + "плавний скрол, який показує роботу сайту в динаміці.",
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
    image: "w7.webp",
  },
  {
    id: 7,
    link: "https://mrgreentitan.github.io/portfolio-site-travel-alphine/",
    title: "WANDER.gig — Responsive Website for a Philippine Travel Service",
    description: {
      pOne: "WANDER.gig — адаптивний сайт для туристичного сервісу по Філіппінах :",
      pTwo:
        "Концепт лендингу для сервісу, який допомагає планувати " +
        "подорожі по Філіппінах: підбирати напрямки, турпакети та " +
        "маршрути під різні формати відпочинку. " +
        "У проєкті зроблено акцент на велику атмосферну візуальну " +
        "подачу, зручний пошук, інтерактивну карусель з картками " +
        "напрямків, блок переваг, турпакети, блог та мобільну адаптацію.",
      pThree: "Адаптивність та структура :",
      pFour: "Сайт адаптований під desktop та mobile: окреме мобільне " + "меню, зручна подача туристичних напрямків та читабельна " + "структура на невеликих екранах.",
      pFive: "Що зроблено :",
    },
    ul: ["UI/UX дизайн", "Front-End розробка", "Адаптивна верстка (Mobile/Desktop)", "Інтерактивне навігаційне меню", "Динамічна карусель напрямків"],
    image: "w8.webp",
  },
];

// 2. ПЕРЕКЛАДИ

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
  },
  en: {
    pageHome: "Home",
    pageAbout: "About Me",
    pageWorks: "Works",
    pageCont: "Contact",
    heroName: "Oleksii Hlazovyi",
    btnCreateProject: "Start a Project",
    btnShowWorks: "View Works",
  },
  pl: {
    pageHome: "Strona główna",
    pageAbout: "O mnie",
    pageWorks: "Portfolio",
    pageCont: "Kontakt",
    heroName: "Oleksij Hłazowy",
    btnCreateProject: "Stwórz projekt",
    btnShowWorks: "Zobacz prace",
  },
  ru: {
    pageHome: "Главная",
    pageAbout: "Обо мне",
    pageWorks: "Работы",
    pageCont: "Контакты",
    heroName: "Алексей Глазовой",
    btnCreateProject: "Создать проект",
    btnShowWorks: "Посмотреть работы",
  },
};

// 3. АНІМАЦІЯ ТА UI ЛОГІКА

// Перехід з сторінки Головна на Проекти та навпаки
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

// Відкрити або закрити список мов
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
  });
}

// Перемикач теми світла/темна
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

// Натискання по навігации Про мене, Контакти та срол до секцій
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

// Відтворення анімації активності навігації та скролу, взалежності від секціі
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

// Натискання на кнопку створити проект на скрол до форми
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

// З'являння інпута за соціальной кнопкою на формі
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

// Відкрити або закрити опис робіт
function readMore() {
  const worksWrap = document.querySelector(".works-wrap");
  if (!worksWrap) return;

  const blRights = worksWrap.querySelectorAll(".bl-r");

  blRights.forEach((bl) => {
    const div = bl.querySelector(".bl-r-wrap");
    const span = bl.querySelector("span");
    if (!div || !span) return;

    span.addEventListener("click", () => {
      const isExpanded = div.classList.toggle("active");

      if (isExpanded) {
        div.style.height = `${div.scrollHeight}px`;
        span.textContent = "Сховати";
      } else {
        div.style.height = "";
        span.textContent = "Розгорнути";
      }
    });
  });
}

// 4. ЗАХИСТ ФОРМИ

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

// 5. ОСНОВНА ЛОГІКА

// Головна сторінка, маніпуляції з навігацією за розміром екрана
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

// Сторінка з проектами
const worksWrap = document.querySelector(".works-wrap");

if (worksWrap) {
  worksWrap.innerHTML = worksInfo
    .map(
      (work) => `
          <div class="bl-wr">
            <div class="bl-l">
              <span><a href="${work.link}">${work.title}</a></span>
              <div>
                <img src="./img/${work.image}" alt="${work.title}" loading="lazy">
              </div>
            </div>
            <div class="bl-r">
              <p>${work.description.pOne}</p>
              <p>${work.description.pTwo}</p>
              <div class="bl-r-wrap">
              <p>${work.description.pThree}</p>
              <p>${work.description.pFour}</p>
              <p>${work.description.pFive}</p>
              <div>
                <ul>
                  ${work.ul.map((item) => `<li>${item}</li>`).join("")}
                </ul>
              </div>
              </div>
              <span>Розгорнути</span>
              <a href="${work.link}">ВІДКРИТИ САЙТ</a>
            </div>
          </div>
        `,
    )
    .join("");

  readMore();
}
