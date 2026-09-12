import { worksInfo, translations } from "./data.js";

// 0. ПРИБИРАЭМО БЛІКИ, АНІМАЦІЇ І ТД НА ЧАС ЗАВАНТАЖ. СТОРІНКИ
// 0. ПРИБИРАЭМО БЛІКИ, АНІМАЦІЇ І ТД НА ЧАС ЗАВАНТАЖ. СТОРІНКИ
// 0. ПРИБИРАЭМО БЛІКИ, АНІМАЦІЇ І ТД НА ЧАС ЗАВАНТАЖ. СТОРІНКИ

window.addEventListener("load", () => {
  document.body.classList.remove("preload");
});

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

// 12. АДАПТИВНІТЬ НАВІГАЦІЇ, МЕНЮ ЗА РОЗМІРОВ ЕКРАНА
// 12. АДАПТИВНІТЬ НАВІГАЦІЇ, МЕНЮ ЗА РОЗМІРОВ ЕКРАНА
// 12. АДАПТИВНІТЬ НАВІГАЦІЇ, МЕНЮ ЗА РОЗМІРОВ ЕКРАНА

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

// 13. ГЕНЕРАЦІЯ КОНТЕНТУ ДЛЯ ПОРФОЛІО З ОБРАНОЮ МОВОЮ
// 13. ГЕНЕРАЦІЯ КОНТЕНТУ ДЛЯ ПОРФОЛІО З ОБРАНОЮ МОВОЮ
// 13. ГЕНЕРАЦІЯ КОНТЕНТУ ДЛЯ ПОРФОЛІО З ОБРАНОЮ МОВОЮ

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
