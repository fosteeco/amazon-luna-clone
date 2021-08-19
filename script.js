const rightArrow = document.querySelector(
  "body > div > div.main-window > div.game-row > div.game-row-arrows > a:nth-child(2) > i"
);
const leftArrow = document.querySelector(
  "body > div > div.main-window > div.game-row > div.game-row-arrows > a:nth-child(1) > i"
);

let start = 0;

rightArrow.addEventListener("click", (e) => {
  const gameRow = e.target.parentElement.parentElement.parentElement;
  const cardContainer = gameRow.querySelector(".card-container");
  console.log(cardContainer);
  let cardSize = document.querySelector(".row-card").offsetWidth + 4 + 20;
  start -= cardSize * 4;
  showCardCode();
  cardContainer.style.left = `${start}px`;
});

leftArrow.addEventListener("click", (e) => {
  const gameRow = e.target.parentElement.parentElement.parentElement;
  const cardContainer = gameRow.querySelector(".card-container");
  console.log(cardContainer);
  /* Default is 264 , move forward 4 if 1056*/
  let cardSize = document.querySelector(".row-card").offsetWidth + 4 + 20;
  start += cardSize * 4;
  cardContainer.style.left = `${start}px`;
  setTimeout(() => {
    showCardCode();
  }, 2000);
});

const testCardWrapper = document.querySelector(
  "body > div > div.main-window > div.game-row > div.card-wrapper"
);
const imgBreak = document.querySelector(
  "body > div > div.main-window > div.game-row > div.card-wrapper > div > div:nth-child(5)"
);

window.addEventListener("resize", () => {
  showCardCode();
});

function showCardCode() {
  let wrapperWidth = testCardWrapper.offsetWidth;
  let cards = testCardWrapper.querySelectorAll(".card-container .row-card");
  let cardContainer = testCardWrapper.querySelector(".card-container");
  cards.forEach((card, idx) => {
    let cardEnd = card.offsetWidth + card.offsetLeft;
    if (idx == 4) {
      console.log("cardEnd = ", cardEnd + start);
      console.log("wrapperWidth =", wrapperWidth);
    }
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
