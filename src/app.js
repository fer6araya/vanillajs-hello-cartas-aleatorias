/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let suits = ["♦", "♥", "♠", "♣"];
  let cardNumbers = [
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
    "K",
    "A"
  ];

  let suitsPicker = Math.floor(Math.random() * 4);
  let cardNumberPicker = Math.floor(Math.random() * 13);

  let selectedSuit = suits[suitsPicker];
  let selectedCardNumber = cardNumbers[cardNumberPicker];

  document.getElementById("top-left-corner-suit").innerHTML = selectedSuit;
  document.getElementById("bottom-right-corner-suit").innerHTML = selectedSuit;
  document.getElementById("card-number").innerHTML = selectedCardNumber;
};
