// Перехід з сторінки Головна на Проекти та навпаки
const header = document.querySelector("header");
const pageHome = document.getElementById("pageHome");
const pageWorks = document.getElementById("pageWorks");
const pageContainerHome = document.querySelector(".p-cont-one");
const pageContainerWorks = document.querySelector(".p-cont-two");

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

pageWorks.addEventListener("click", clickPageWorks);
pageHome.addEventListener("click", clickPageHome);
btnShowWorks.addEventListener("click", clickPageWorks);

// Відкрити або закрити список мов

const langBlock = document.querySelector(".lang-swapper");
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

  console.log("Выбран язык:", currentLang.dataset.lang);
});

// Перемикач теми світла/темна
const themeCheckbox = document.getElementById("btn-swap");
if (localStorage.getItem("theme") === "light") {
  document.body.classList.add("light-theme");
  themeCheckbox.checked = true;
}

themeCheckbox.addEventListener("change", function () {
  if (themeCheckbox.checked) {
    document.body.classList.add("light-theme");
    localStorage.setItem("theme", "light");
  } else {
    document.body.classList.remove("light-theme");
    localStorage.setItem("theme", "dark");
  }
});
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
  if (header.classList.contains("works")) return;

  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      let activeMatch = sections.find((s) => s.section === entry.target);

      if (activeMatch) {
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
    wrap_btn.classList.add("soc");
    WRAP_SOCIAL.classList.add("socshow");

    INPUT_SOCIAL.classList.remove(...soc_clas);
    INPUT_SOCIAL.value = "";

    if (SPAN_INST.classList.contains("active")) {
      LABEL_SOCIAL.innerText = "Instagram";
      INPUT_SOCIAL.placeholder = "@affa.green";
      INPUT_SOCIAL.classList.add("cl-inst");
    }
    if (SPAN_VIBER.classList.contains("active")) {
      LABEL_SOCIAL.innerText = "Viber";
      INPUT_SOCIAL.placeholder = "+380 66 905 3822";
      INPUT_SOCIAL.classList.add("cl-viber");
    }
    if (SPAN_TELEG.classList.contains("active")) {
      LABEL_SOCIAL.innerText = "Telegram";
      INPUT_SOCIAL.placeholder = "@WhooisFinch";
      INPUT_SOCIAL.classList.add("cl-teleg");
    }
    if (SPAN_WHATS.classList.contains("active")) {
      LABEL_SOCIAL.innerText = "WhatsApp";
      INPUT_SOCIAL.placeholder = "+380 66 905 3822";
      INPUT_SOCIAL.classList.add("cl-whats");
    }
  });
}

// Відкрити або закрити опис робіт

const WORKS_WRAP = document.querySelector(".works-wrap");

export function readMore() {
  if (WORKS_WRAP) {
    const BL_RIGHTs = WORKS_WRAP.querySelectorAll(".bl-r");
    BL_RIGHTs.forEach((bl) => {
      let div = bl.querySelector(".bl-r-wrap");
      let span = bl.querySelector("span");

      if (div && span) {
        let divHeight = div.offsetHeight + "px";
        div.style.height = divHeight;

        span.addEventListener("click", function () {
          if (div.style.height === "42px") {
            div.style.height = div.scrollHeight + "px";
            div.style.opacity = "1";
            span.innerText = "Сховати";
          } else {
            div.style.height = "42px";
            div.style.opacity = "0.3";
            span.innerText = "Розгорнути";
          }
        });
      }
    });
  }
}
