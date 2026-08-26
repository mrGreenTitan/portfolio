import { worksInfo } from "./javascript/works.js";
import "./javascript/animation.js";

console.log("hello");

const nav = document.querySelector(".header-cont nav");

function navClose() {
  nav.style.transform = "translateY(-200%)";
}

function navOpen() {
  nav.style.transform = "translateY(0%)";
}

let isOpen = false;

function addWrapDiv() {
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

      burger.addEventListener("click", function () {
        if (isOpen) {
          navClose();
        } else {
          navOpen();
        }
        isOpen = !isOpen;
      });
    }
  } else {
    nav.style.removeProperty("transform");
    const wrapDiv = nav.parentElement;
    if (wrapDiv.classList.contains("nav-wrap")) {
      wrapDiv.parentNode.insertBefore(nav, wrapDiv);
      wrapDiv.remove();
    }
  }
}

addWrapDiv();
window.addEventListener("resize", addWrapDiv);

const worksWrap = document.querySelector(".works-wrap");

worksWrap.innerHTML = worksInfo
  .map(
    (work) => `
      <div class="bl-wr">

        <div class="bl-l">
          <span><a href="#">${work.title}</a></span>

          <div>
            <img src="./img/${work.image}" alt="${work.title}">
          </div>
        </div>

        <div class="bl-r">

          <p>${work.description.pOne}</p>

          <p>${work.description.pTwo}</p>

          <p>${work.description.pThree}</p>

          <p>${work.description.pFour}</p>

          <p>${work.description.pFive}</p>

          <div>
            <ul>
              ${work.ul.map((item) => `<li>${item}</li>`).join("")}
            </ul>
          </div>

        </div>

      </div>
    `,
  )
  .join("");
