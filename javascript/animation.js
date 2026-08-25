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

function cubeFiveRotate() {
  let cube = document.querySelector(".work-cube-five");
  if (!cube) return;

  function updateRotate() {
    let w = window.innerWidth;

    const clampW = Math.min(Math.max(w, 816), 1440);
    const progress = (clampW - 816) / (1440 - 816);
    const deg = 19.52 + progress * (9.57 - 19.52);
    cube.style.transform = `rotate(${deg}deg)`;
  }
  const observer = new ResizeObserver(updateRotate);
  observer.observe(document.body);
  updateRotate();
}

pageWorks.addEventListener("click", clickPageWorks);
pageHome.addEventListener("click", clickPageHome);
document.addEventListener("DOMContentLoaded", cubeFiveRotate);
