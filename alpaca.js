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

const random = document.querySelector(".random");
const download = document.querySelector(".download");

const styles = document.querySelector(".styles");

const hairArr = [];
const earArr = [];
const eyesArr = [];
const mouthArr = [];
const neckArr = [];
const legArr = [];
const accArr = [];
const backArr = [];

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
function select(selectClass, targetElement, e) {
  removeActive(`${selectClass}`);
  e.target.classList.add("active");
  targetElement.src = e.target.dataset.url;
}
function creatArrEl(arr, el) {
  document
    .querySelectorAll(`.${el}`)
    .forEach((element) => arr.push(element.dataset.url));
}

displayCurrentStyle(hairB, "hairStyle");
displayCurrentStyle(earsB, "earStyle");
displayCurrentStyle(eyesB, "eyeStyle");
displayCurrentStyle(mouthB, "mouthStyle");
displayCurrentStyle(neckB, "neckStyle");
displayCurrentStyle(legB, "legStyle");
displayCurrentStyle(accessoriesB, "accessoryStyle");
displayCurrentStyle(backgroundB, "back");

creatArrEl(hairArr, "dispHair");
creatArrEl(earArr, "dispEar");
creatArrEl(eyesArr, "dispEye");
creatArrEl(mouthArr, "dispMouth");
creatArrEl(neckArr, "dispNeck");
creatArrEl(legArr, "dispLeg");
(function () {
  document
    .querySelectorAll(".acc")
    .forEach((element) => accArr.push(element.classList[0]));
})();
(function () {
  document
    .querySelectorAll(".dispBack")
    .forEach((element) => backArr.push(element.style.background));
})();

styles.addEventListener("click", function (e) {
  if (
    !e.target.classList.contains("dispHair") &&
    !e.target.classList.contains("dispEar") &&
    !e.target.classList.contains("dispEye") &&
    !e.target.classList.contains("dispMouth") &&
    !e.target.classList.contains("dispNeck") &&
    !e.target.classList.contains("dispLeg") &&
    !e.target.classList.contains("dispAcc") &&
    !e.target.classList.contains("dispBack")
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
  if (e.target.classList.contains("dispBack")) {
    document
      .querySelectorAll(".dispBack")
      .forEach((element) => element.classList.remove("activeColor"));
    document.querySelector(
      ".alpacaImg"
    ).style.background = `${e.target.style.background}`;
    e.target.classList.add("activeColor");
  }
});

random.addEventListener("click", () => {
  hair.src = hairArr[Math.floor(Math.random() * hairArr.length)];
  ears.src = earArr[Math.floor(Math.random() * earArr.length)];
  eyes.src = eyesArr[Math.floor(Math.random() * eyesArr.length)];
  mouth.src = mouthArr[Math.floor(Math.random() * mouthArr.length)];
  neck.src = neckArr[Math.floor(Math.random() * neckArr.length)];
  leg.src = legArr[Math.floor(Math.random() * legArr.length)];
  leg.src = legArr[Math.floor(Math.random() * legArr.length)];

  document
    .querySelectorAll(".acc")
    .forEach((element) => element.classList.add("noDisp"));
  document
    .querySelector(`.${accArr[Math.floor(Math.random() * accArr.length)]}`)
    .classList.remove("noDisp");

  document.querySelector(".alpacaImg").style.background = `${
    backArr[Math.floor(Math.random() * backArr.length)]
  }`;
});

download.addEventListener("click", function () {
  html2canvas(document.querySelector(".alpacaImg")).then((canvas) => {
    let a = document.createElement("a");
    a.href = canvas
      .toDataURL("image/jpeg")
      .replace("image/jpeg", "image/octet-stream");

    a.download = "Alpaca.jpg";
    a.click();
  });
});
