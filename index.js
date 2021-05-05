"use strict";

import * as Pattern from "./patterns.js";

//Selectors
const newGameBtn = document.querySelector(".btn__newGame");
const endGameBtn = document.querySelector(".btn__endGame");
const bingoBtn = document.querySelector(".p1Board__btnBingo");
const settingsBtn = document.querySelector(".btn__settings");
const calledNumber = document.querySelector(".currentBall");
const prevNumber = document.querySelector(".prevBall");
const thirdLastNumber = document.querySelector(".thirdLastBall");
const fourthLastNumber = document.querySelector(".fourthLastBall");
const fifthLastNumber = document.querySelector(".fifthLastBall");
const bingoPatternList = document.querySelector("#settings__bingoPatternList");
const gameTitle = document.querySelector(".gameTitleContent");
const settingsModal = document.querySelector(".settings__modal");
const closeSettingsModalBtn = document.querySelector(
  ".settings__modal-content--close"
);
const settingsCurrentPatternTitle = document.querySelector(
  ".settings__current-pattern"
);
const settingsRulesBtn = document.querySelector(".btn__settings-pattern-rules");
const noticeRulesBtn = document.querySelector(".btn__notice-pattern-rules");
const rulesModal = document.querySelector(".rules__modal");
const closeRulesModalBtn = document.querySelector(
  ".rules__modal-content--close"
);
const rulesCurrentPatternTitle = document.querySelector(
  ".rules__current-pattern"
);
const rulesText = document.querySelector(".rules__modal-content-text");
const noticeModal = document.querySelector(".notice__modal");
const closeNoticeModalBtn = document.querySelector(
  ".notice__modal-content--close"
);
const noticeModalText = document.querySelector(".notice__current-pattern");
const startGameBtn = document.querySelector(".btn__startGame");
const nextGameBtn = document.querySelector(".btn__nextGame");

const uPickEmModal = document.querySelector(".upickem__modal");
const submitUPickEmBtn = document.querySelector(".btn__submitUPE");

const calledNumberUI = document.querySelector(".currentBall");
const bingoBallUI = document.querySelectorAll(".ball");
const countdownTimerArea = document.querySelector(".countdown-timer");

const showP2BoardBtn = document.querySelector(".btn__player2Board");
const showP3BoardBtn = document.querySelector(".btn__player3Board");
const showP4BoardBtn = document.querySelector(".btn__player4Board");

//Declaring Global Variables
let bingoNumber,
  bingoNumLet,
  usedNumbers,
  bingoTimer,
  exampleBoardTimer,
  p1Success,
  wildCounter,
  uPickEmGuard,
  noticeText;
let gameActive,
  chosenPattern,
  patternTitle,
  winningPattern,
  linesNeeded,
  freeSpaceIncluded,
  numExclusion,
  nextProgressive,
  patternRules,
  gameMode;
let p1EligibleNumbers,
  p1SelectedNumbers,
  p2SelectedNumbers,
  p3SelectedNumbers,
  p4SelectedNumbers,
  uPickEmNumbers;
let p1SquareNumbers,
  p1CardMap,
  p2SquareNumbers,
  p2CardMap,
  p3SquareNumbers,
  p3CardMap,
  p4SquareNumbers,
  p4CardMap;

//Temp: home of winning patterns
let activePattern = Pattern.singleBingo;

destructurePatternObj(activePattern);

document
  .querySelector("#btn__bingoPatternSelector")
  .addEventListener("click", changeBingoPattern);

function changeBingoPattern(diffPattern) {
  if (gameMode == "progressive") {
    diffPattern = activePattern.nextProgressive;
    chosenPattern = diffPattern;
  } else {
    chosenPattern =
      bingoPatternList.options[bingoPatternList.selectedIndex].value;
  }

  activePattern = Pattern[chosenPattern];
  destructurePatternObj(activePattern);
  if (gameMode == "progressive")
    settingsCurrentPatternTitle.textContent = `Progressive- ${patternTitle}`;
  else settingsCurrentPatternTitle.textContent = patternTitle;
}

function destructurePatternObj(obj) {
  patternTitle = obj.title;
  [...winningPattern] = obj.pattern;
  linesNeeded = obj.linesNeeded;
  freeSpaceIncluded = obj.freeSpace;
  numExclusion = obj.numExclusion.split("");
  gameMode = obj.gameMode;
  nextProgressive = obj.nextProgressive;
  patternRules = obj.rules;
  // {
  //   title,
  //   pattern: winningPattern,
  //   linesNeeded,
  //   freeSpace,
  //   numExclusion,
  //   rules,
  // } = obj;
}

function nextProgGame(noticeText) {
  clearInterval(exampleBoardTimer);
  clearInterval(bingoTimer);

  noticeModal.style.display = "block";
  noticeModalText.textContent = noticeText;
  nextGameBtn.style.display = "inline-block";

  nextGameBtn.removeEventListener("click", nextSuperJackpotRound);
  nextGameBtn.removeEventListener("click", nextProgressiveRound);

  if (gameMode == "superJackpot") {
    nextGameBtn.addEventListener("click", nextSuperJackpotRound);
  } else {
    nextGameBtn.addEventListener("click", nextProgressiveRound);
  }

  function nextSuperJackpotRound() {
    noticeModal.style.display = "none";
    activateExampleBoard(winningPattern);
    bingoTimer = setInterval(bingoEvent, 4000);
  }

  function nextProgressiveRound() {
    changeBingoPattern(nextProgressive);
    gameMode = "normal";
    noticeModalText.textContent = `Next Progressive Round: ${patternTitle}`;

    setTimeout(function () {
      noticeModal.style.display = "none";
      gameTitle.textContent = `Round 2: ${patternTitle}`;
      activateExampleBoard(winningPattern);
      bingoTimer = setInterval(bingoEvent, 4000);
    }, 5000);
  }
}

//Adds button functionality to start New Game
newGameBtn.addEventListener("click", startGameSession);

function startGameSession() {
  noticeModal.style.display = "block";
  if (gameMode == "progressive") {
    noticeModalText.innerHTML = `Progressive Game <br> ${patternTitle}`;
  } else {
    noticeModalText.textContent = patternTitle;
  }

  // if (gameMode == "upickem") {
  //   startGameBtn.removeEventListener("click", newGame);
  //   startGameBtn.addEventListener("click", startUPickEm);

  //   function startUPickEm () {
  //     startGameBtn.removeEventListener("click", startUPickEm);
  //     startGameBtn.addEventListener("click", newGame);
  //     noticeModal.style.display = "none";

  //     uPickEmModal.style.display = "block";
  //     document.querySelector(".btn__submitUPE").addEventListener("click", uPickEmLogic);
  //   });
  // }

  setTimeout(function () {
    noticeRulesBtn.style.display = "inline-block";
    startGameBtn.style.display = "inline-block";
  }, 3000);
  return;
}

//Adds button functionality to open Settings Modal
settingsBtn.addEventListener("click", function () {
  settingsModal.style.display = "block";
  settingsCurrentPatternTitle.textContent = patternTitle + `     `;
  settingsRulesBtn.style.display = "inline-block";
});

//Adds button functionality to open Rules Modal
settingsRulesBtn.addEventListener("click", openRulesModal);
noticeRulesBtn.addEventListener("click", openRulesModal);

function openRulesModal() {
  rulesModal.style.display = "block";
  rulesCurrentPatternTitle.textContent = patternTitle;
  rulesText.textContent = patternRules;
}

//Adds button functionality to close Settings Modal
closeSettingsModalBtn.addEventListener("click", function () {
  settingsRulesBtn.style.display = "none";
  settingsModal.style.display = "none";
});

window.addEventListener("click", function (event) {
  if (event.target == settingsModal) {
    settingsModal.style.display = "none";
  }
});

//Adds button functionality to close Rules Modal
closeRulesModalBtn.addEventListener("click", function () {
  rulesModal.style.display = "none";
});

//Adds button functionlity to Start Game Button
startGameBtn.addEventListener("click", newGame);

showP2BoardBtn.addEventListener("click", changeVisibleCPUBoard);
showP3BoardBtn.addEventListener("click", changeVisibleCPUBoard);
showP4BoardBtn.addEventListener("click", changeVisibleCPUBoard);

function changeVisibleCPUBoard(event) {
  let targetCPUBoard = event.target.value;
  document.querySelector("#activeCPUBoard").removeAttribute("id");
  console.log(targetCPUBoard);
  document.querySelector(`.${targetCPUBoard}Container`).id = `activeCPUBoard`;
  let id = document
    .querySelector(`.${targetCPUBoard}Container`)
    .getAttribute("id");
  console.log(id);
}

uPickEmGuard = true;

//Starts New Bingo Game
function newGame() {
  //closes Notice Modal and its Rules and Start Game Buttons
  noticeModal.style.display = "none";
  noticeRulesBtn.style.display = "none";
  startGameBtn.style.display = "none";

  //disables "New Game" button function
  newGameBtn.removeEventListener("click", startGameSession);
  endGameBtn.addEventListener("click", function () {
    noticeText = `Game Ended`;
    endGame(noticeText);
  });
  //Sets game in active state
  gameActive = true;
  //Resets game variables
  bingoNumber = undefined;
  bingoNumLet = undefined;
  p1Success = undefined;
  wildCounter = 0;
  usedNumbers = [];
  p1EligibleNumbers = [];
  p1SelectedNumbers = [];
  p2SelectedNumbers = [];
  p3SelectedNumbers = [];
  p4SelectedNumbers = [];

  //Resets UI Elements
  clearUI();

  //Sets Game Title
  gameTitle.textContent = patternTitle;

  //Activate Example Board
  activateExampleBoard(winningPattern);

  //U Pick 'Em Logic
  if (gameMode == "upickem" && uPickEmGuard) {
    uPickEmNumbers = [];
    uPickEmModal.style.display = "block";
    submitUPickEmBtn.addEventListener("click", collectUPickEmNums);
    return;

    function collectUPickEmNums() {
      const uPickEmDuplicateError = document.querySelector(
        ".upickem__modal-duplicate-error"
      );
      for (let i = 1; i <= 8; i++) {
        if (
          uPickEmNumbers.includes(
            Number(document.querySelector(`#upeValue${i}`).value)
          )
        ) {
          uPickEmDuplicateError.innerHTML = `<b>Error: Duplicate Numbers.  Please Try Again</br>`;
          while (uPickEmNumbers.length) {
            uPickEmNumbers.pop();
          }
          submitUPickEmBtn.removeEventListener("click", collectUPickEmNums);
          newGame();
          return;
        }

        uPickEmNumbers.push(
          Number(document.querySelector(`#upeValue${i}`).value)
        );
      }

      if (uPickEmNumbers.includes(0)) {
        uPickEmDuplicateError.innerHTML = `<b>Error: Please choose ALL 8 numbers</br>`;
        while (uPickEmNumbers.length) {
          uPickEmNumbers.pop();
        }
        submitUPickEmBtn.removeEventListener("click", collectUPickEmNums);
        newGame();
        return;
      }

      submitUPickEmBtn.removeEventListener("click", collectUPickEmNums);
      uPickEmDuplicateError.innerHTML = ``;
      uPickEmModal.style.display = "none";
      uPickEmGuard = false;
      changeBingoHeaderUI("clear");
      newGame();
    }
  }

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
    if (gameActive && !p1Success)
      setTimeout(function () {
        bingoTimer = setInterval(bingoEvent, 4000);
      }, 6000);
  });

  //Execute different Game Modes
  switch (gameMode) {
    //Implement Bonanza Mode
    case "bonanza":
      startTimer(120);
      for (let i = 1; i <= 40; i++) {
        if (i < 39) bingoEvent();
        if (i == 40) {
          setTimeout(function () {
            bingoTimer = setInterval(bingoEvent, 4000);
          }, 120000);
        }
      }
      break;
    //Implement Quickie Mode
    case "quickie":
      bingoTimer = setInterval(bingoEvent, 2000);
      break;
    //Implement default normal mode
    default:
      bingoTimer = setInterval(bingoEvent, 4000);
  }
}

//   //Implement Bonanza Mode
//   if (gameMode == "bonanza") {
//     for (let i = 1; i <= 40; i++) {
//       if (i < 39) bingoEvent();
//       if (i == 40) {
//         setTimeout(function () {
//           timer = setInterval(bingoEvent, 4000);
//         }, 60000);
//       }
//     }
//   } else {
//     //Interval Timer for calling Bingo Numbers
//     bingoTimer = setInterval(bingoEvent, 4000);
//   }
// }

//Call next Bingo Number and main game logic
function bingoEvent() {
  //Cancels game if it's been accidentally left on
  if (!gameActive) {
    clearInterval(bingoTimer);
    return;
  }
  //Generate unique random bingo number
  bingoNumber = callBingoNumber();
  //Assigns letter to Bingo Number
  bingoNumLet = letterAssign(bingoNumber);

  excludeBingoNumber();

  console.log(`Random Number: ${bingoNumber}`);
  console.log(`Bingo Number: ${bingoNumLet}`);

  function excludeBingoNumber() {
    let j = 0;

    while (j < 1) {
      let [bingoLetter] = bingoNumLet.split("", 1);
      if (
        usedNumbers.includes(bingoNumber) ||
        numExclusion.includes(bingoLetter)
      ) {
        bingoNumber = callBingoNumber();
        bingoNumLet = letterAssign(bingoNumber);
      } else {
        j++;
      }
    }
  }

  if (gameMode == "wild" && wildCounter == 0) {
    wildNumberSelector(bingoNumber);
    return;
  }

  bingoLogic(bingoNumber, bingoNumLet);
}

function bingoLogic(bingoNumber, bingoNumLet) {
  if (bingoNumLet)
    //Adds Bingo Number to Used Numbers Array
    usedNumbers.push(bingoNumber);

  //Updates "Used Number Board" display
  calledNumber.textContent = bingoNumLet;
  prevNumber.textContent = letterAssign(usedNumbers[usedNumbers.length - 2]);
  thirdLastNumber.textContent = letterAssign(
    usedNumbers[usedNumbers.length - 3]
  );
  fourthLastNumber.textContent = letterAssign(
    usedNumbers[usedNumbers.length - 4]
  );
  fifthLastNumber.textContent = letterAssign(
    usedNumbers[usedNumbers.length - 5]
  );
  document.querySelector(`#ub-${bingoNumber}`).style.color = "#7EFF14";

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

function wildNumberSelector(num) {
  clearInterval(bingoTimer);

  let switchNum;

  if (num < 10) {
    switchNum = num;
  } else {
    switchNum = num % 10;
  }

  let arr;

  switch (switchNum) {
    case 0:
      arr = [0, 10, 20, 30, 40, 50, 60, 70];
      break;
    case 1:
      arr = [1, 11, 21, 31, 41, 51, 61, 71];
      break;
    case 2:
      arr = [2, 12, 22, 32, 42, 52, 62, 72];
      break;
    case 3:
      arr = [3, 13, 23, 33, 43, 53, 63, 73];
      break;
    case 4:
      arr = [4, 14, 24, 34, 44, 54, 64, 74];
      break;
    case 5:
      arr = [5, 15, 25, 35, 45, 55, 65, 75];
      break;
    case 6:
      arr = [6, 16, 26, 36, 46, 56, 66];
      break;
    case 7:
      arr = [7, 17, 27, 37, 47, 57, 67];
      break;
    case 8:
      arr = [8, 18, 28, 38, 48, 58, 68];
      break;
    case 9:
      arr = [9, 19, 29, 39, 49, 59, 69];
      break;
  }

  for (let num of arr) {
    bingoLogic(num, letterAssign(num));
  }

  wildCounter++;

  startTimer(20);

  setTimeout(function () {
    bingoTimer = setInterval(bingoEvent, 4000);
  }, 20000);
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
  let successPattern = [];
  let bingoLineCount = comparePattern(selectedNumbers);
  if (playerID == "p1") {
    //Stops the automatic calling of bingo numbers
    clearInterval(bingoTimer);
    bingoLineCount == linesNeeded
      ? (bingoLineCount = comparePattern(eligibleNumbers))
      : (bingoLineCount = 0);
    if (bingoLineCount == linesNeeded) {
      console.log(`You win! Player 1 BINGO!!!`);
      noticeText = `You win! Player 1 BINGO!!!`;
      p1Success = true;
      if (gameMode == "superJackpot") {
        alterWinPatternArr(successPattern);
        if (winningPattern.length == 0) endGame(noticeText);
        else nextProgGame(noticeText);
      } else if (gameMode == "progressive") {
        nextProgGame(noticeText);
      } else {
        endGame(noticeText);
      }
    } else {
      console.log(`Not a BINGO Player 1`);
      noticeText = `Not a BINGO Player 1`;
      p1Success = false;
    }
  } else {
    if (bingoLineCount == linesNeeded) {
      console.log(`You Lose... ${playerID} BINGO.`);
      noticeText = `You Lose... ${playerID} BINGO.`;
      if (gameMode == "superJackpot") {
        alterWinPatternArr(successPattern);
        if (winningPattern.length == 0) endGame(noticeText);
        else nextProgGame(noticeText);
      } else if (gameMode == "progressive") {
        nextProgGame(noticeText);
      } else {
        endGame(noticeText);
      }
    } else {
      bingoLineCount = 0;
    }
  }

  function comparePattern(arr) {
    let bingoLine = 0;

    for (let pattern of winningPattern) {
      let toBingo = 0;
      for (let num of pattern) {
        if (arr.includes(num)) toBingo++;
      }
      if (toBingo == pattern.length) {
        bingoLine++;
        successPattern = pattern;
      }
    }

    return bingoLine;
  }
}

function alterWinPatternArr(arr) {
  const patternIndex = winningPattern.indexOf(arr);
  const removed = winningPattern.splice(patternIndex, 1);
}
//   for (let [a, b, c, d, e] of winningPattern) {
//     if (arr.includes(a)) toBingo++;
//     if (arr.includes(b)) toBingo++;
//     if (arr.includes(c)) toBingo++;
//     if (arr.includes(d)) toBingo++;
//     if (arr.includes(e)) toBingo++;
//     if (toBingo == 5) {
//       break;
//     } else {
//       toBingo = 0;
//     }
//   }
//   return toBingo;
// }

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
// // //2. Player determined by PlayerID argument. This is a string that
// // changes the ID attribute of HTML tag that displays a square's number
// 3. Function returns an array containing: array of square numbers and a map of the square numbers and its square position.
function generateCards(playerID) {
  let squareNumber;
  let eligibleNumbers = [];
  const cardMap = new Map();

  if (gameMode == "upickem") {
    let boardNumberArr = [7, 8, 9, 12, 13, 14, 17, 18, 19];

    if (playerID == "p1") {
      let i = 0;
      for (let num of boardNumberArr) {
        if (num !== 13) {
          squareNumber = uPickEmNumbers[i];
          document.querySelector(
            `#${playerID}-${num}`
          ).textContent = squareNumber;
          eligibleNumbers.push(squareNumber);
          cardMap.set(num, squareNumber);
          i++;
        }
      }
    } else {
      for (let num of boardNumberArr) {
        if (num !== 13) {
          squareNumber = randomCardNumber(75);
          if (eligibleNumbers.includes(squareNumber)) {
            let j = 0;
            while (j < 1) {
              squareNumber = randomCardNumber(75);
              if (!eligibleNumbers.includes(squareNumber)) j++;
            }
          }
          document.querySelector(
            `#${playerID}-${num}`
          ).textContent = squareNumber;
          eligibleNumbers.push(squareNumber);
          cardMap.set(num, squareNumber);
        }
      }
    }
  } else {
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
        document.querySelector(`#${playerID}-${i}`).textContent = squareNumber;
        eligibleNumbers.push(squareNumber);
        cardMap.set(i, squareNumber);
        // console.log(squareNumber);
        // console.log(eligibleNumbers);
        // console.log(cardMap);
      }
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
  if (num > 20 && num <= 25) cardNum = Math.floor(Math.random() * 15 + 61);
  if (num == 75) cardNum = Math.floor(Math.random() * 75 + 1);
  return cardNum;
}

//Resets display elements
function clearUI() {
  for (let i = 1; i <= 75; i++)
    document.querySelector(`#ub-${i}`).style.color = "#3a7509";
  for (let i = 1; i <= 25; i++) {
    document.querySelector(`#p1-${i}`).style.backgroundColor = null;
    document.querySelector(`#p2-${i}`).style.backgroundColor = null;
    document.querySelector(`#p3-${i}`).style.backgroundColor = null;
    document.querySelector(`#p4-${i}`).style.backgroundColor = null;
  }
  calledNumber.textContent = "";
  prevNumber.textContent = "";
  thirdLastNumber.textContent = "";
  fourthLastNumber.textContent = "";
  fifthLastNumber.textContent = "";
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

function endGame(noticeText) {
  console.log("Game Ended");
  noticeModal.style.display = "block";
  noticeModalText.textContent = noticeText;
  uPickEmGuard = true;
  changeBingoHeaderUI("resume");
  gameActive = false;
  wildCounter = 0;
  setTimeout(function () {
    noticeModal.style.display = "none";
  }, 5000);
  clearInterval(bingoTimer);
  nextGameBtn.style.display = "none";
  newGameBtn.addEventListener("click", startGameSession);
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

function activateExampleBoard(winPatterns) {
  let count = 0;

  clearExampleBoard();

  exampleBoardTimer = setInterval(function () {
    cycleExampleBoard(winPatterns[count]);
  }, 1000);

  function cycleExampleBoard(winPattern) {
    if (!gameActive) {
      clearInterval(exampleBoardTimer);
      clearExampleBoard();
      return;
    }

    if (!(winPatterns.length == 1)) clearExampleBoard();

    for (let num of winPattern) {
      document.querySelector(`#eb-${num}`).style.backgroundColor = "#7EFF14";
    }

    count++;

    if (count >= winPatterns.length) count = 0;
  }

  function clearExampleBoard() {
    for (let i = 1; i <= 25; i++) {
      document.querySelector(`#eb-${i}`).style.backgroundColor = "black";
    }
  }
}

function changeBingoHeaderUI(action) {
  let headerArr = ["b", "i", "n", "g", "o"];
  let colorArr = ["orange", "yellow", "green", "purple", "blue"];
  let cpuHeaderElementList = [];

  if (action == "clear") {
    for (let element of headerArr) {
      document.querySelector(
        `.p1Board__bingoHeader--${element}`
      ).style.backgroundColor = "#efeefb";
      document.querySelector(`.p1Board__bingoHeader--${element}`).textContent =
        "-";

      cpuHeaderElementList.push(
        document.querySelectorAll(`.cpuBoard__bingoHeader--${element}`)
      );

      cpuHeaderElementList[0].forEach(function (value) {
        value.style.backgroundColor = "#efeefb";
        value.textContent = "-";
      });

      cpuHeaderElementList.pop();

      // document.querySelector(
      //   `.cpuBoard__bingoHeader--${element}`
      // ).style.backgroundColor = "#efeefb";
      // document.querySelector(`.cpuBoard__bingoHeader--${element}`).textContent =
      //   "-";
    }
  } else if (action == "resume") {
    let i = 0;
    for (let element of headerArr) {
      document.querySelector(
        `.p1Board__bingoHeader--${element}`
      ).style.backgroundColor = colorArr[i];
      document.querySelector(
        `.p1Board__bingoHeader--${element}`
      ).textContent = element.toUpperCase();

      cpuHeaderElementList.push(
        document.querySelectorAll(`.cpuBoard__bingoHeader--${element}`)
      );

      cpuHeaderElementList[0].forEach(function (value) {
        value.style.backgroundColor = colorArr[i];
        value.textContent = element.toUpperCase();
      });

      cpuHeaderElementList.pop();
      i++;

      // document.querySelector(
      //   `.cpuBoard__bingoHeader--${element}`
      // ).style.backgroundColor = colorArr[i];
      // document.querySelector(
      //   `.cpuBoard__bingoHeader--${element}`
      // ).textContent = element.toUpperCase();
    }
  }
}

function startTimer(timer) {
  calledNumberUI.style.display = "none";
  bingoBallUI.forEach(function (element) {
    element.style.display = "none";
  });
  countdownTimerArea.style.display = "inline-block";

  let countdownTimer = setInterval(timerTick, 1000);

  function timerTick() {
    document.querySelector(".countdown-timer-content").textContent = timer;

    timer--;

    if (timer <= 0) {
      document.querySelector(".countdown-timer-content").textContent = "";
      calledNumberUI.style.display = "inline-flex";
      bingoBallUI.forEach(function (element) {
        element.style.display = "inline-flex";
      });
      countdownTimerArea.style.display = "none";
      clearInterval(countdownTimer);
      return;
    }
  }
}

// while (gameActive) {
//   if (count > winPatterns.length) count = 0;

//   let i = 0;
//   for (let pattern of winPatterns) {
//     if (i > winPatterns.length) i = 0;
//     cycleExampleBoard(pattern, i);
//     i++;
//   }

//   function cycleExampleBoard(winPattern, loopCount) {
//     setTimeout(function () {
//       for (let i = 0; i < 25; i++) {
//         document.querySelector(`#eb-${i}`).style.backgroundColor = "black";
//       }

//       for (let num of winPattern) {
//         document.querySelector(`#eb-${num}`).style.backgroundColor = "cyan";
//       }
//     }, 3000 * loopCount);
//   }

//   count++;
// }
// }
