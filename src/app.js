import "bootstrap";
import "./style.css";
const suits = ["♠", "♡", "♢", "♣"];
const values = [
  "A",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "J",
  "Q",
  "K"
];
function getRandomItem(array) {
  const index = Math.floor(Math.random() * array.length);
  return array[index];
}

function dealCard() {
  const cardElement = document.getElementById("card");
  const card = {
    suit: getRandomItem(suits),
    value: getRandomItem(values)
  };
  cardElement.innerHTML = `
    <span class="value">${card.value}</span>
    <span class="suit">${card.suit}</span>
  `;
  cardElement.style.backgroundColor = "white";
}

window.addEventListener("load", dealCard);
document.getElementById("deal-button").addEventListener("click", dealCard);
