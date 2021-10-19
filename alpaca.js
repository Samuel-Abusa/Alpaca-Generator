"use strict";
// Alpaca
const neck = document.querySelector(".neck");
const mouth = document.querySelector(".mouth");
const hair = document.querySelector(".hair");
const leg = document.querySelector(".leg");
const ears = document.querySelector(".ears");
const eyes = document.querySelector(".eyes");

////////////////////////////////Buttons///////////////////////////////////

const hairB = document.querySelector(".hairB");
const earsB = document.querySelector(".earsB");
const eyesB = document.querySelector(".eyesB");
const mouthB = document.querySelector(".mouthB");
const neckB = document.querySelector(".neckB");
const legB = document.querySelector(".legB");
const accessoriesB = document.querySelector(".accessoriesB");
const backgroundB = document.querySelector(".backgroundB");

const styles = document.querySelector(".styles");

function removeActive(selectClass) {
  document
    .querySelectorAll(`.${selectClass}`)
    .forEach((element) => element.classList.remove("active"));
}
function displayCurrentStyle(button, currClass) {
  button.addEventListener("click", () => {
    document
      .querySelectorAll(".stylesConts")
      .forEach((element) => element.classList.add("noDisp"));
    removeActive("butt");

    document.querySelector(`.${currClass}`).classList.remove("noDisp");
    button.classList.add("active");
  });
}

displayCurrentStyle(hairB, "hairStyle");
displayCurrentStyle(earsB, "earStyle");
displayCurrentStyle(eyesB, "eyeStyle");
displayCurrentStyle(mouthB, "mouthStyle");
displayCurrentStyle(neckB, "neckStyle");
displayCurrentStyle(legB, "legStyle");
displayCurrentStyle(accessoriesB, "accessoryStyle");
displayCurrentStyle(backgroundB, "back");

function select(selectClass, targetElement, e) {
  removeActive(`${selectClass}`);
  e.target.classList.add("active");
  targetElement.src = e.target.dataset.url;
}

styles.addEventListener("click", function (e) {
  if (
    !e.target.classList.contains("dispHair") &&
    !e.target.classList.contains("dispEar") &&
    !e.target.classList.contains("dispEye") &&
    !e.target.classList.contains("dispMouth") &&
    !e.target.classList.contains("dispNeck") &&
    !e.target.classList.contains("dispLeg") &&
    !e.target.classList.contains("dispAcc")
  )
    return;

  if (e.target.classList.contains("dispHair")) select("dispHair", hair, e);
  if (e.target.classList.contains("dispEar")) select("dispEar", ears, e);
  if (e.target.classList.contains("dispEye")) select("dispEye", eyes, e);
  if (e.target.classList.contains("dispMouth")) select("dispMouth", mouth, e);
  if (e.target.classList.contains("dispNeck")) select("dispNeck", neck, e);
  if (e.target.classList.contains("dispLeg")) select("dispLeg", leg, e);
  if (e.target.classList.contains("dispAcc")) {
    removeActive("dispAcc");
    e.target.classList.add("active");

    document
      .querySelectorAll(".acc")
      .forEach((element) => element.classList.add("noDisp"));
    document
      .querySelector(`.${e.target.textContent}`)
      ?.classList.remove("noDisp");
  }
});
