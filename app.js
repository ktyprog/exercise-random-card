const numbers = [
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
  let suits = ["♣", "♦", "♥", "♠"];
  let card = document.querySelector("#card");

  card.style.height = "500px";
  card.style.width = "300px";
  card.style.border = "solid 1px black";
  card.style.borderRadius = "10%";
  card.style.background = "white";

  let number = document.querySelector("#number");
  number.style.fontSize = "150px";
  number.style.color = "blue";


  let printingNumber = document.createTextNode(randomNumber());
  number.appendChild(printingNumber);
  function randomNumber() {
    return numbers[Math.floor(Math.random() * numbers.length)];

  }

  let printingSuits = document.createTextNode(randonSuits());
  suits.appendChild(printingSuits);
  function randomSuit() {
    return suits[Math.floor(Math.random() * suits.length)];
  }
  console.log(randomNumber , randomSuit());