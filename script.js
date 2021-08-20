const rightArrow = document.querySelector(
  "body > div > div.main-window > div.game-row > div.game-row-arrows > a:nth-child(2) > i"
);
const leftArrow = document.querySelector(
  "body > div > div.main-window > div.game-row > div.game-row-arrows > a:nth-child(1) > i"
);

const cardContainer = document.querySelector(".card-container");
const cardWrapper = document.querySelector(".card-wrapper");
const cardOne = document.querySelector(".row-card");
const cardSize = cardOne.offsetWidth + 4 + 20;

let start = 0;

rightArrow.addEventListener("click", (e) => {
  start -= cardSize * 4;
  showCardCode();
  cardContainer.style.left = `${start}px`;
});

leftArrow.addEventListener("click", (e) => {
  start += cardSize * 4;
  cardContainer.style.left = `${start}px`;
  setTimeout(() => {
    showCardCode();
  }, 2000);
});

window.addEventListener("resize", () => {
  showCardCode();
});

function showCardCode() {
  let wrapperWidth = cardWrapper.offsetWidth;
  let cards = cardWrapper.querySelectorAll(".card-container .row-card");
  cards.forEach((card, idx) => {
    let cardEnd = card.offsetWidth + card.offsetLeft;
    if (cardEnd + start + 2 > wrapperWidth) {
      card.style.visibility = "hidden";
      // card.style.display = "none !important";
      // card.classList.add("d-none");
    } else {
      card.style.visibility = "visible";
      // card.style.display = "inline-block !important";
      // card.classList.remove("d-none");
    }
  });
}

showCardCode();
