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

// Відкрити або закрити Роботи

const WORKS_WRAP = document.querySelector(".works-wrap");

if (WORKS_WRAP) {
  const BL_RIGHTs = WORKS_WRAP.querySelectorAll(".bl-r");
  BL_RIGHTs.forEach((bl) => {
    let div = bl.querySelector(".bl-r-wrap");
    let span = bl.querySelector("span");

    if (div && span) {
      let divHeight = div.offsetHeight + "px";
      div.style.height = divHeight;

      span.addEventListener("click", function () {
        if (div.style.height === "0px") {
          div.style.height = div.scrollHeight + "px";
        } else {
          div.style.height = "0px";
        }
      });
    }
  });
}
