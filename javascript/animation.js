console.log("hello, we load animation");

const header = document.querySelector("header");
const pageHome = document.getElementById("pageHome");
const pageWorks = document.getElementById("pageWorks");
const pageContainerHome = document.querySelector(".p-cont-one");
const pageContainerWorks = document.querySelector(".p-cont-two");

let isAnimating = false;

function clickPageWorks() {
  if (header.classList.contains("works") || isAnimating) return;
  isAnimating = true;

  header.classList.add("works");
  pageContainerHome.classList.add("hide");
  pageContainerWorks.classList.add("show");

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

// З'являння інпута за соціальной кнопкою

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

  SOCIALS_BLOCK.addEventListener("click", (event) => {
    let targetSpan = event.target.closest("span");

    if (!targetSpan || !SOCIALS_BLOCK.contains(targetSpan)) return;

    SOCIALS_BLOCK.querySelectorAll("span").forEach((span) => {
      span.classList.remove("active");
    });

    targetSpan.classList.add("active");
    wrap_btn.classList.add("soc");
    WRAP_SOCIAL.classList.add("socshow");

    if (SPAN_INST.classList.contains("active")) {
      LABEL_SOCIAL.innerText = "Instagram";
      INPUT_SOCIAL.placeholder = "@affa.green";
    }
    if (SPAN_VIBER.classList.contains("active")) {
      LABEL_SOCIAL.innerText = "Viber";
      INPUT_SOCIAL.placeholder = "+380 66 905 3822";
    }
    if (SPAN_TELEG.classList.contains("active")) {
      LABEL_SOCIAL.innerText = "Telegram";
      INPUT_SOCIAL.placeholder = "@WhooisFinch";
    }
    if (SPAN_WHATS.classList.contains("active")) {
      LABEL_SOCIAL.innerText = "WhatsApp";
      INPUT_SOCIAL.placeholder = "+380 66 905 3822";
    }
  });
}
