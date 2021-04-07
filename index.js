"use strict";

/*
To Do:
-Style Bingo Board
-Add Opponent BINGO Losing Fanfare
-Add Player 1 Successful BINGO Fanfare
-Add Next Game Function
-Add End/Reset Game Function
-FUTURE: Add Settings
-FUTURE: Give choice of winning patterns
-FUTURE: Not needed numbers
*/

//Selectors
const newGameBtn = document.querySelector(".btn__newGame");
const endGameBtn = document.querySelector(".btn__endGame");
const bingoBtn = document.querySelector(".btn__callBingo");
const unbCalledNumber = document.querySelector(
  ".usedNumberBoard__calledNumber"
);
const unbPrevNumber = document.querySelector(".usedNumberBoard__prevNumber");

//Declaring Global Variables
let bingoNumber, bingoNumLet, usedNumbers, timer, gameActive;
let p1EligibleNumbers,
  p1SelectedNumbers,
  p2SelectedNumbers,
  p3SelectedNumbers,
  p4SelectedNumbers;
let p1SquareNumbers,
  p1CardMap,
  p2SquareNumbers,
  p2CardMap,
  p3SquareNumbers,
  p3CardMap,
  p4SquareNumbers,
  p4CardMap;

//Temp: home of winning patterns
const winningPattern = [
  [1, 2, 3, 4, 5],
  [6, 7, 8, 9, 10],
  [11, 12, 13, 14, 15],
  [16, 17, 18, 19, 20],
  [21, 22, 23, 24, 25],
  [1, 6, 11, 16, 21],
  [2, 7, 12, 17, 22],
  [3, 8, 13, 18, 23],
  [4, 9, 14, 19, 24],
  [5, 10, 15, 20, 25],
  [1, 7, 13, 19, 25],
  [5, 9, 13, 17, 21],
];

//Adds button functionality to start New Game
newGameBtn.addEventListener("click", newGame);

//Starts New Bingo Game
function newGame() {
  //disables "New Game" button function
  newGameBtn.removeEventListener("click", newGame);
  endGameBtn.addEventListener("click", endGame);
  //Sets game in active state
  gameActive = true;
  //Resets game variables
  bingoNumber = undefined;
  bingoNumLet = undefined;
  usedNumbers = [];
  p1EligibleNumbers = [];
  p1SelectedNumbers = [];
  p2SelectedNumbers = [];
  p3SelectedNumbers = [];
  p4SelectedNumbers = [];

  //Resets UI Elements
  clearUI();

  //Generate Player Bingo Card Numbers
  [p1SquareNumbers, p1CardMap] = generateCards("p1");
  [p2SquareNumbers, p2CardMap] = generateCards("p2");
  [p3SquareNumbers, p3CardMap] = generateCards("p3");
  [p4SquareNumbers, p4CardMap] = generateCards("p4");
  // console.log(`Player 1 Square Numbers: ${p1SquareNumbers}`);
  // console.log(`Player 1 Card Map: ${p1CardMap}`);
  // console.log(`Player 2 Square Numbers: ${p2SquareNumbers}`);
  // console.log(`Player 2 Card Map: ${p2CardMap}`);
  // console.log(`Player 3 Square Numbers: ${p3SquareNumbers}`);
  // console.log(`Player 3 Card Map: ${p3CardMap}`);
  // console.log(`Player 4 Square Numbers: ${p4SquareNumbers}`);
  // console.log(`Player 4 Card Map: ${p4CardMap}`);

  //Automatically enables FREE SPACE for all Players based on winningPattern
  for (let value of winningPattern) {
    if (value.includes(13)) {
      activateFreeSpace();
      break;
    }
  }

  //Enables Player 1 to select/unselect squares
  let p1Squares = document.querySelectorAll(`.p1Board__square`);
  for (let value of p1Squares) value.addEventListener("click", selectP1Square);

  //Enables Player 1 BINGO button
  bingoBtn.addEventListener("click", function () {
    checkBingo("p1", p1SelectedNumbers, p1EligibleNumbers);
    //Adds 10 second cooldown before next number call, if Player 1 BINGO fails
    if (gameActive)
      setTimeout(function () {
        timer = setInterval(bingoEvent, 3000);
      }, 7000);
  });

  //Interval Timer for calling Bingo Numbers
  timer = setInterval(bingoEvent, 4000);
}

//Call next Bingo Number and main game logic
function bingoEvent() {
  //Generate unique random bingo number
  bingoNumber = callBingoNumber();
  console.log(`Random Number: ${bingoNumber}`);
  if (usedNumbers.includes(bingoNumber)) {
    let j = 0;
    while (j < 1) {
      bingoNumber = callBingoNumber();
      if (!usedNumbers.includes(bingoNumber)) j++;
    }
  }
  //Assigns letter to Bingo Number
  bingoNumLet = letterAssign(bingoNumber);
  console.log(`Bingo Number: ${bingoNumLet}`);
  //Adds Bingo Number to Used Numbers Array
  usedNumbers.push(bingoNumber);

  //Updates "Used Number Board" display
  unbCalledNumber.textContent = bingoNumLet;
  unbPrevNumber.textContent = letterAssign(usedNumbers[usedNumbers.length - 2]);
  document.querySelector(`#ub-${bingoNumber}`).style.backgroundColor = "cyan";

  //Updates Player1 Eligible Numbers Array
  if (p1SquareNumbers.includes(bingoNumber)) {
    for (let [squarePosition, squareNumber] of p1CardMap) {
      if (squareNumber == bingoNumber) p1EligibleNumbers.push(squarePosition);
    }
  }

  //Updates all opponents Bingo Card Displays and selectedNumber Arrays
  opponentAI("p2", p2SquareNumbers, p2SelectedNumbers, p2CardMap);
  opponentAI("p3", p3SquareNumbers, p3SelectedNumbers, p3CardMap);
  opponentAI("p4", p4SquareNumbers, p4SelectedNumbers, p4CardMap);

  function opponentAI(playerID, arr, arr2, map) {
    if (arr.includes(bingoNumber)) {
      for (let [squarePosition, squareNumber] of map) {
        if (squareNumber == bingoNumber) {
          arr2.push(squarePosition);
          document.querySelector(
            `#${playerID}-${squarePosition}`
          ).style.backgroundColor = "cyan";
        }
      }
    }
  }

  //checks opponent cards for Bingo
  checkBingo("p2", p2SelectedNumbers);
  checkBingo("p3", p3SelectedNumbers);
  checkBingo("p4", p4SelectedNumbers);
}

//activates Free Space for all opponents.
//Make Free Space eligible for Player 1 BINGO
function activateFreeSpace() {
  p1EligibleNumbers.push(13);
  p2SelectedNumbers.push(13);
  p3SelectedNumbers.push(13);
  p4SelectedNumbers.push(13);
  document.querySelector(`#p2-13`).style.backgroundColor = "cyan";
  document.querySelector(`#p3-13`).style.backgroundColor = "cyan";
  document.querySelector(`#p4-13`).style.backgroundColor = "cyan";
}

//checks card for BINGO
function checkBingo(playerID, selectedNumbers, eligibleNumbers) {
  let bingoValue = comparePattern(selectedNumbers);
  if (playerID == "p1") {
    //Stops the automatic calling of bingo numbers
    clearInterval(timer);
    bingoValue == 5
      ? (bingoValue = comparePattern(eligibleNumbers))
      : (bingoValue = 0);
    if (bingoValue == 5) {
      console.log(`You win! Player 1 BINGO!!!`);
      endGame();
    } else {
      console.log(`Not a BINGO Player 1`);
    }
  } else {
    if (bingoValue == 5) {
      console.log(`You Lose... ${playerID} BINGO.`);
      endGame();
    } else {
      bingoValue = 0;
    }
  }
}

function comparePattern(arr) {
  let toBingo = 0;
  for (let [a, b, c, d, e] of winningPattern) {
    if (arr.includes(a)) toBingo++;
    if (arr.includes(b)) toBingo++;
    if (arr.includes(c)) toBingo++;
    if (arr.includes(d)) toBingo++;
    if (arr.includes(e)) toBingo++;
    if (toBingo == 5) {
      break;
    } else {
      toBingo = 0;
    }
  }
  return toBingo;
}

//generates random bingo number
function callBingoNumber() {
  return Math.floor(Math.random() * 75 + 1);
}

//assigns a BINGO letter to the generated number
function letterAssign(num) {
  let numLet = 0;
  if (num <= 15) numLet = "B " + num;
  if (num > 15 && num <= 30) numLet = "I " + num;
  if (num > 30 && num <= 45) numLet = "N " + num;
  if (num > 45 && num <= 60) numLet = "G " + num;
  if (num > 60 && num <= 75) numLet = "O " + num;
  return numLet;
}

// // //1. Generates and displays numbers on a specific player's card
// // //2. Player determined by PlayerID argument.  This is a string that
// // changes the ID attribute of HTML tag that displays a square's number
// 3. Function returns an array containing: array of square numbers and a map of the square numbers and its square position.
function generateCards(PlayerID) {
  let squareNumber;
  let eligibleNumbers = [];
  const cardMap = new Map();

  for (let i = 1; i <= 25; i++) {
    if (i !== 13) {
      squareNumber = randomCardNumber(i);
      if (eligibleNumbers.includes(squareNumber)) {
        let j = 0;
        while (j < 1) {
          squareNumber = randomCardNumber(i);
          if (!eligibleNumbers.includes(squareNumber)) j++;
        }
      }
      document.querySelector(`#${PlayerID}-${i}`).textContent = squareNumber;
      eligibleNumbers.push(squareNumber);
      cardMap.set(i, squareNumber);
      // console.log(squareNumber);
      // console.log(eligibleNumbers);
      // console.log(cardMap);
    }
  }
  return [eligibleNumbers, cardMap];
}

//Generates a random eligible number for a specific square position
function randomCardNumber(num) {
  let cardNum;
  if (num <= 5) cardNum = Math.floor(Math.random() * 15 + 1);
  if (num > 5 && num <= 10) cardNum = Math.floor(Math.random() * 15 + 16);
  if (num > 10 && num <= 15) cardNum = Math.floor(Math.random() * 15 + 31);
  if (num > 15 && num <= 20) cardNum = Math.floor(Math.random() * 15 + 46);
  if (num > 20 && num <= 25) cardNum = Math.floor(Math.random() * 15 + 66);
  return cardNum;
}

//Resets display elements
function clearUI() {
  for (let i = 1; i <= 75; i++)
    document.querySelector(`#ub-${i}`).style.backgroundColor = null;
  for (let i = 1; i <= 25; i++) {
    document.querySelector(`#p1-${i}`).style.backgroundColor = null;
    document.querySelector(`#p2-${i}`).style.backgroundColor = null;
    document.querySelector(`#p3-${i}`).style.backgroundColor = null;
    document.querySelector(`#p4-${i}`).style.backgroundColor = null;
  }
}

function selectP1Square(event) {
  let idNumber = Number(event.target.id.slice(3));
  // let squareNumber = event.target.innerHTML;
  document.querySelector(`#p1-${idNumber}`).style.backgroundColor = "cyan";
  p1SelectedNumbers.push(idNumber);
  document
    .querySelector(`#p1-${idNumber}`)
    .removeEventListener("click", selectP1Square);
  document
    .querySelector(`#p1-${idNumber}`)
    .addEventListener("click", unselectP1Square);
}

function unselectP1Square(event) {
  let idNumber = Number(event.target.id.slice(3));
  // let squareNumber = event.target.innerHTML;
  document.querySelector(`#p1-${idNumber}`).style.backgroundColor = null;
  if (p1SelectedNumbers.includes(idNumber)) {
    let indexElement = p1SelectedNumbers.indexOf(idNumber);
    p1SelectedNumbers.splice(indexElement, 1);
  }
  document
    .querySelector(`#p1-${idNumber}`)
    .removeEventListener("click", unselectP1Square);
  document
    .querySelector(`#p1-${idNumber}`)
    .addEventListener("click", selectP1Square);
}

function endGame() {
  console.log("Game Ended");
  gameActive = false;
  clearInterval(timer);
  newGameBtn.addEventListener("click", newGame);
  // p1EligibleNumbers
  // p1SelectedNumbers
  // p2SelectedNumbers
  // p3SelectedNumbers
  // p4SelectedNumbers
  // p1SquareNumbers
  // p1CardMap
  // p2SquareNumbers
  // p2CardMap
  // p3SquareNumbers
  // p3CardMap
  // p4SquareNumbers
  // p4CardMap
}
