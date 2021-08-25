const rightArrow = document.querySelector(
  "body > div > div.main-window > div.game-row > div.game-row-arrows > a:nth-child(2) > i"
);
const leftArrow = document.querySelector(
  "body > div > div.main-window > div.game-row > div.game-row-arrows > a:nth-child(1) > i"
);
let rowCount = 1;

const cardContainer = document.querySelector(".card-container");
const cardWrapper = document.querySelector(".card-wrapper");
const cardOne = document.querySelector(".row-card");
const cardSize = cardOne.offsetWidth + 4 + 20;
cardWrapper.style.height = `${cardOne.clientHeight}px`;
let cardContainerWidth = cardContainer.clientWidth + 4;
const gridWrapper = document.querySelector(".grid-wrapper");
gridWrapper.style.transition = "left 1s ease-in-out";

const testBtn = document.querySelector(".test-btn");

function calcContainerWidth() {
  cardContainerWidth = cardContainer.clientWidth + 4;
}

let scaleBy;
rightArrow.addEventListener("click", (e) => {
  calcContainerWidth();
  scaleBy = cardContainerWidth * rowCount;
  gridWrapper.style.left = `${scaleBy * -1}px`;
  rowCount++;
  console.log(rowCount);
});

leftArrow.addEventListener("click", (e) => {
  calcContainerWidth();
  rowCount--;
  console.log(rowCount);
  scaleBy = cardContainerWidth * rowCount;
  scaleBy -= cardContainerWidth;
  gridWrapper.style.left = `${scaleBy * -1}px`;
});

window.addEventListener("resize", () => {
  cardWrapper.style.height = `${cardOne.clientHeight}px`;
  calcLeft();
});

function calcLeft() {
  calcContainerWidth();
  let left = rowCount * cardContainerWidth;
  gridWrapper.style.transition = "";
  left -= cardContainerWidth;
  gridWrapper.style.left = `${left * -1}px`;
  setTimeout(() => {
    gridWrapper.style.transition = "left 1s ease-in-out";
  }, 1000);
}

let b = 1;
testBtn.addEventListener("click", () => {
  let scaleBy = cardContainerWidth * b;
  scaleBy += b * 4;
  gridWrapper.style.left = `${scaleBy * -1}px`;
  b++;
});
