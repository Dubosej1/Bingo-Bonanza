"use strict";

import * as Pattern from "./patterns.js";

///////////////////////////////////////
//  Table of Contents
//
// 1. Selectors
// 2. Declaring Global Variables
// 3. Initial Page Setup
// 4. Starting a New Bingo Game
// 5. Main Game Flow and Logic
// 6. Special Game Logic
// 7. Generate Bingo Cards
// 8. Player 1 Bingo Card Functionality
// 9. Logic for Determining a Bingo
// 10. Game UI Functions
// 11. Settings Menu
///////////////////////////////////////

///////////////////////////////
//        1. Selectors       //
/////////////////////////////

//Main Page Buttons
const newGameBtn = document.querySelector(".btn__newGame");
const endGameBtn = document.querySelector(".btn__endGame");
const bingoBtn = document.querySelector(".p1Board__btnBingo");
const settingsBtn = document.querySelector(".btn__settings");

const closeSettingsModalBtn = document.querySelector(
  ".settings__modal-content--close"
);

//CPU Board Selector Buttons
const showP2BoardBtn = document.querySelector(".btn__player2Board");
const showP3BoardBtn = document.querySelector(".btn__player3Board");
const showP4BoardBtn = document.querySelector(".btn__player4Board");

//HUD Elements
const gameTitle = document.querySelector(".gameTitleContent");
const calledNumber = document.querySelector(".currentBall");
const prevNumber = document.querySelector(".prevBall");
const thirdLastNumber = document.querySelector(".thirdLastBall");
const fourthLastNumber = document.querySelector(".fourthLastBall");
const fifthLastNumber = document.querySelector(".fifthLastBall");
const bingoBallUI = document.querySelectorAll(".ball");
const countdownTimerArea = document.querySelector(".countdown-timer");

//Settings Modal
const settingsModal = document.querySelector(".settings__modal");
const bingoPatternList = document.querySelector("#settings__bingoPatternList");
const settingsCurrentPatternTitle = document.querySelector(
  ".settings__current-pattern"
);
const settingsRulesBtn = document.querySelector(".btn__settings-pattern-rules");

//Notice Modal
const noticeRulesBtn = document.querySelector(".btn__notice-pattern-rules");
const noticeModal = document.querySelector(".notice__modal");
const closeNoticeModalBtn = document.querySelector(
  ".notice__modal-content--close"
);
const noticeModalText = document.querySelector(".notice__current-pattern");
const startGameBtn = document.querySelector(".btn__startGame");
const nextGameBtn = document.querySelector(".btn__nextGame");

//Rules Modal
const rulesModal = document.querySelector(".rules__modal");
const closeRulesModalBtn = document.querySelector(
  ".rules__modal-content--close"
);
const rulesCurrentPatternTitle = document.querySelector(
  ".rules__current-pattern"
);
const rulesText = document.querySelector(".rules__modal-content-text");

//U Pick Em "Choose Numbers" Modal
const uPickEmModal = document.querySelector(".upickem__modal");
const submitUPickEmBtn = document.querySelector(".btn__submitUPE");

////////////////////////////////////
// 2. Declaring Global Variables  //
//////////////////////////////////

//Visual HUD Variables
let exampleBoardTimer, noticeText;

//Bingo Pattern Destructuring Variables
let activePattern,
  chosenPattern,
  patternTitle,
  winningPattern,
  linesNeeded,
  freeSpaceIncluded,
  numExclusion,
  nextProgressive,
  patternRules,
  gameMode;

// Bingo Logic Variables
let bingoNumber, bingoNumLet, usedNumbers, bingoTimer;

//Game State Variables
let p1Success, wildCounter, uPickEmGuard, gameActive;

//Player "Selected Number" Arrays
let p1EligibleNumbers,
  p1SelectedNumbers,
  p2SelectedNumbers,
  p3SelectedNumbers,
  p4SelectedNumbers,
  uPickEmNumbers;

//Player Bingo Card Numbers
let p1SquareNumbers,
  p1CardMap,
  p2SquareNumbers,
  p2CardMap,
  p3SquareNumbers,
  p3CardMap,
  p4SquareNumbers,
  p4CardMap;

//////////////////////////////////
//    3. Initial Page Setup    //
////////////////////////////////

//Sets initial Bingo Pattern (Regular Bingo)
activePattern = Pattern.singleBingo;

//Destructures Initial Bingo Pattern Object into variables needed for Game Logic
destructurePatternObj(activePattern);

//Sets up the Settings Menu and Rules Modal Functionality
openCloseMenu();

//Enables button to select a new bingo pattern in the Settings Menu
document
  .querySelector("#btn__bingoPatternSelector")
  .addEventListener("click", changeBingoPattern);

//Activates the buttons that toggle which CPU Board is currently visible
showP2BoardBtn.addEventListener("click", changeVisibleCPUBoard);
showP3BoardBtn.addEventListener("click", changeVisibleCPUBoard);
showP4BoardBtn.addEventListener("click", changeVisibleCPUBoard);

//Enables Player 1 BINGO button
bingoBtn.addEventListener("click", enablePlayer1BingoBtn);

//Activates the button that starts a New Game session and opens the Game Title Modal
newGameBtn.addEventListener("click", startGameSession);

//Activates the button that starts the game from the Game Title Modal
startGameBtn.addEventListener("click", newGame);

/////////////////////////////////////
//   4. Starting a new Bingo Game  //
////////////////////////////////////

//Pops up the Notice modal, with "Rules" and "Start Game" buttons
function startGameSession() {
  noticeModal.style.display = "block";
  if (gameMode == "progressive") {
    noticeModalText.innerHTML = `Progressive Game <br> ${patternTitle}`;
  } else {
    noticeModalText.textContent = patternTitle;
  }

  setTimeout(function () {
    noticeRulesBtn.style.display = "inline-block";
    startGameBtn.style.display = "inline-block";
  }, 3000);
  return;
}

//Updates HUD display and sets up the next progressive game
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

  //starts next Super Jackpot Round
  function nextSuperJackpotRound() {
    noticeModal.style.display = "none";
    activateExampleBoard(winningPattern);
    bingoTimer = setInterval(bingoEvent, 4000);
  }

  //starts next Progressive Game Round
  function nextProgressiveRound() {
    changeBingoPattern(nextProgressive);
    gameMode = "normal";
    if (freeSpaceIncluded) activateFreeSpace();
    nextGameBtn.style.display = "none";
    noticeModalText.textContent = `Next Progressive Round: ${patternTitle}`;

    setTimeout(function () {
      noticeModal.style.display = "none";
      gameTitle.textContent = `Round 2: ${patternTitle}`;
      activateExampleBoard(winningPattern);
      bingoTimer = setInterval(bingoEvent, 4000);
    }, 5000);
  }
}

//////////////////////////////////////////
//     5.  Main Game Flow and Logic     //
/////////////////////////////////////////

//Guard Clause variable, so that the U Pick Em modal only pops up once at the...
//beginning of the game
uPickEmGuard = true;

//Sets up a new Bingo Round
function newGame() {
  //1. Closes Notice Modal and its "Rules" and "Start Game" Buttons
  closeNoticeModal();

  //2. Enables "End Game" Button while disabling "New Game" Btn
  enableEndGameBtn();

  //3. Sets game in active state
  gameActive = true;

  //4. Resets game variables
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

  //5. Resets UI Elements
  clearUI();

  //6. Sets Game Title
  gameTitle.textContent = patternTitle;

  //7. Activate Example Board
  activateExampleBoard(winningPattern);

  //8. If in "U Pick Em" mode, starts U Pick Em Logic
  if (gameMode == "upickem" && uPickEmGuard) uPickEmLogic();

  //9. Generate Player Bingo Card Numbers
  [p1SquareNumbers, p1CardMap] = generateCards("p1");
  [p2SquareNumbers, p2CardMap] = generateCards("p2");
  [p3SquareNumbers, p3CardMap] = generateCards("p3");
  [p4SquareNumbers, p4CardMap] = generateCards("p4");

  //10. Automatically enables FREE SPACE for all Players based on winningPattern

  if (freeSpaceIncluded) activateFreeSpace();

  // for (let value of winningPattern) {
  //   if (value.includes(13)) {
  //     activateFreeSpace();
  //     break;
  //   }
  // }

  //11. Enables Player 1 to select/unselect squares
  let p1Squares = document.querySelectorAll(`.p1Board__square`);
  for (let value of p1Squares) value.addEventListener("click", selectP1Square);

  //12. Begin Bingo Game based on a specific game mode
  startBingoGame(gameMode);

  //////////// newGame() Helper Functions ////////////

  //Closes the notice modal, in order to start the round.
  function closeNoticeModal() {
    noticeModal.style.display = "none";
    noticeRulesBtn.style.display = "none";
    startGameBtn.style.display = "none";
  }

  //Enables the "End Game" btn (while disabling the "New Game" btn) when the round...
  // is in session
  function enableEndGameBtn() {
    newGameBtn.removeEventListener("click", startGameSession);
    endGameBtn.addEventListener("click", function () {
      noticeText = `Game Ended`;
      endGame(noticeText);
    });
  }

  //Implements the logic of various special game modes (see documentation)
  function startBingoGame(gameMode) {
    switch (gameMode) {
      //Implements Bonanza Mode
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
      //Implements Quickie Mode
      case "quickie":
        bingoTimer = setInterval(bingoEvent, 2000);
        break;
      //Implements default normal mode
      default:
        bingoTimer = setInterval(bingoEvent, 4000);
    }
  }
}

//Calls a bingo number and determines if it's valid
function bingoEvent() {
  //1. Cancels the bingoEvent Interval timer if it's been accidentally left on
  if (!gameActive) {
    clearInterval(bingoTimer);
    return;
  }

  //2. Generate unique random bingo number
  bingoNumber = callBingoNumber();

  //3. Assigns letter to Bingo Number
  bingoNumLet = letterAssign(bingoNumber);

  //4. Checks if the bingo number is valid for the current bingo pattern.  If not, it generates a new bingo number
  excludeBingoNumber();

  //5. If in "Wild" mode, starts Wild Number Logic
  if (gameMode == "wild" && wildCounter == 0) {
    wildNumberSelector(bingoNumber);
    return;
  }

  //6. Starts bingo logic for current bingo number
  bingoLogic(bingoNumber, bingoNumLet);
}

//Main Game Logic.  Processes the bingo number for all players
function bingoLogic(bingoNumber, bingoNumLet) {
  //1. Adds Bingo Number to Used Numbers Array
  usedNumbers.push(bingoNumber);

  //2. Updates "Used Number Board" display
  updateUsedNumberDisplay();

  //3. Updates Player1 Eligible Numbers Array
  if (p1SquareNumbers.includes(bingoNumber)) {
    for (let [squarePosition, squareNumber] of p1CardMap) {
      if (squareNumber == bingoNumber) p1EligibleNumbers.push(squarePosition);
    }
  }

  //4. Updates all opponents Bingo Card Displays and selectedNumber Arrays
  opponentAI("p2", p2SquareNumbers, p2SelectedNumbers, p2CardMap);
  opponentAI("p3", p3SquareNumbers, p3SelectedNumbers, p3CardMap);
  opponentAI("p4", p4SquareNumbers, p4SelectedNumbers, p4CardMap);

  //5. Checks opponent cards for Bingo
  checkBingo("p2", p2SelectedNumbers);
  checkBingo("p3", p3SelectedNumbers);
  checkBingo("p4", p4SelectedNumbers);

  //////////// bingoLogic() Helper Functions ////////////

  //Updates HUD information on screen
  function updateUsedNumberDisplay() {
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
  }

  //Updates Opponent bingo boards if the current bingo number is on any of their...
  // boards.
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
}

///////////////////////////////////////////////
//     6.  Bingo Logic Helper Functions     //
/////////////////////////////////////////////

//////////// bingoEvent() Helper Functions ////////////

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

//Excludes Bingo Numbers based on if they're not needed for the current bingo...
// pattern (this info found in "Num Exclusion" variable from pattern object)
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

/////////////////////////////////////
//     6.  Special Game Logic     //
///////////////////////////////////

//Logic for the "U Pick Em" Game
function uPickEmLogic() {
  //Displays U Pick Em Modal so that the player can input the numbers they...
  // select for their bingo card.
  uPickEmNumbers = [];
  uPickEmModal.style.display = "block";
  submitUPickEmBtn.addEventListener("click", collectUPickEmNums);
  return;

  //Checks player "U Pick Em" numbers for duplicates or blanks, and prompts player to...
  // reselect the numbers if there are any.  Starts the game afterwards.
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

//Logic for a wild number bingo pattern
function wildNumberSelector(num) {
  clearInterval(bingoTimer);

  let switchNum;

  //Isolates the last digit of the bingo number
  if (num < 10) {
    switchNum = num;
  } else {
    switchNum = num % 10;
  }

  let arr;

  //Takes the last digit of the 1st bingo number and selects all the other bingo...
  // numbers with that last digit.
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

  //processes the wild numbers as bingo numbers
  for (let num of arr) {
    bingoLogic(num, letterAssign(num));
  }

  //Guard counter that makes sure the wild number logic is only ran once at the...
  // beginning of the game
  wildCounter++;

  //Starts the 20 second countdown timer for the Player to select their wild numbers
  startTimer(20);

  //Resumes the normal game
  setTimeout(function () {
    bingoTimer = setInterval(bingoEvent, 4000);
  }, 20000);
}

//Starts and Displays a Countdown Timer for Wild Number and Bonanza Modes
function startTimer(timer) {
  calledNumber.style.display = "none";
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
      calledNumber.style.display = "inline-flex";
      bingoBallUI.forEach(function (element) {
        element.style.display = "inline-flex";
      });
      countdownTimerArea.style.display = "none";
      clearInterval(countdownTimer);
      return;
    }
  }
}

/////////////////////////////////
//  7. Generate Bingo Cards    //
////////////////////////////////

// // //1. Generates and displays numbers on a specific player's card
// // //2. Player determined by PlayerID argument. This is a string that
// // changes the ID attribute of HTML tag that displays a square's number
// 3. Function returns an array containing: array of square numbers and a map of the square numbers and its square position.
function generateCards(playerID) {
  let squareNumber;
  let eligibleNumbers = [];
  const cardMap = new Map();

  //Displays player "U Pick Em" numbers on the bingo board, if its U Pick Em mode
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
    //Generates and displays random numbers on all player bingo cards
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

///////////////////////////////////////////////
//  8. Player 1 Bingo Board Functionality    //
//////////////////////////////////////////////

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

//Gives Player 1 the ability to select a bingo square
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

//Gives Player 1 the ability to unselect a bingo square
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

function enablePlayer1BingoBtn() {
  checkBingo("p1", p1SelectedNumbers, p1EligibleNumbers);
  //Adds 10 second cooldown before next number call, if Player 1 BINGO fails
  if (gameActive && !p1Success)
    setTimeout(function () {
      bingoTimer = setInterval(bingoEvent, 4000);
    }, 6000);
}

//////////////////////////////////////////
//  9. Logic for Determining a BINGO    //
/////////////////////////////////////////

//checks player card for BINGO
function checkBingo(playerID, selectedNumbers, eligibleNumbers) {
  let successPattern = [];

  //Checks if the player's selected numbers are a successful bingo
  let bingoLineCount = comparePattern(selectedNumbers);

  //Process for determining Player 1 Bingo
  if (playerID == "p1") {
    //1. Stops the automatic calling of bingo numbers
    clearInterval(bingoTimer);

    //2. If Player's selected numbers are a successful bingo, then checks to see...
    // if the bingo is valid.
    bingoLineCount == linesNeeded
      ? (bingoLineCount = comparePattern(eligibleNumbers))
      : (bingoLineCount = 0);

    //3A. If Player 1's bingo is valid, they win the game.
    if (bingoLineCount == linesNeeded) {
      noticeText = `You win! Player 1 BINGO!!!`;
      p1Success = true;

      //If Super Jackpot or Progressive Mode, proceed to next bingo round.  Else...
      // end the game.
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
      //3B.  If Player 1's bingo is not valid, then display message
      noticeText = `Not a BINGO Player 1`;
      noticeModal.style.display = "block";
      noticeModalText.textContent = noticeText;
      setTimeout(function () {
        noticeModal.style.display = "none";
      }, 5000);
      p1Success = false;
    }
  } else {
    //Process for determining opponent bingo

    //1. If opponent has successful bingo, display Player 1 losing message
    if (bingoLineCount == linesNeeded) {
      noticeText = `You Lose... ${playerID} BINGO.`;

      //If Super Jackpot or Progressive Game mode, go to next round
      if (gameMode == "superJackpot") {
        alterWinPatternArr(successPattern);
        if (winningPattern.length == 0) endGame(noticeText);
        else nextProgGame(noticeText);
      } else if (gameMode == "progressive") {
        nextProgGame(noticeText);
      } else {
        //If normal game mode, then end the game
        endGame(noticeText);
      }
    } else {
      //2. If unsuccessful bingo, then game resumes as normal
      bingoLineCount = 0;
    }
  }

  //Compares a player's selected number array with all the winning arrays...
  // of the bingo pattern.
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

//For Super Jackpot game: removes the successful bingo pattern from the list...
// of winning arrays for the Super Jackpot pattern.
function alterWinPatternArr(arr) {
  const patternIndex = winningPattern.indexOf(arr);
  const removed = winningPattern.splice(patternIndex, 1);
}

//End bingo game routine
function endGame(noticeText) {
  //1. Displays notice modal with message for player
  noticeModal.style.display = "block";
  noticeModalText.textContent = noticeText;

  //2. Resets game state variables
  uPickEmGuard = true;
  gameActive = false;
  wildCounter = 0;

  //3. "U Pick Em" game: Resets bingo board UI to normal
  changeBingoHeaderUI("resume");

  //4. Closes notice modal after 5 seconds
  setTimeout(function () {
    noticeModal.style.display = "none";
  }, 5000);

  //5. Stops bingo game interval
  clearInterval(bingoTimer);

  //6. Reactivates "New Game"btn/ Deactivates "End Game" btn
  nextGameBtn.style.display = "none";
  newGameBtn.addEventListener("click", startGameSession);
}

///////////////////////////////
//  10. Game UI Functions    //
//////////////////////////////

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

//Activates Example Board, which displays and rotates through all the winning arrays...
// from the active bingo pattern
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

  //Clears the example board when a game is not active
  function clearExampleBoard() {
    for (let i = 1; i <= 25; i++) {
      document.querySelector(`#eb-${i}`).style.backgroundColor = "black";
    }
  }
}

//Toggles "B I N G O"letters on/off all bingo boards, in...
// order to increase readability for the U Pick Em game
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
    }
  }
}

//////////////////////////////////
//     11.  Settings Menu       //
/////////////////////////////////

//Adds functionality to open and close the Settings and Rules Modal Windows
function openCloseMenu() {
  //Adds button functionality to open Settings Modal
  settingsBtn.addEventListener("click", function () {
    settingsModal.style.display = "block";
    settingsCurrentPatternTitle.textContent = patternTitle + `     `;
    settingsRulesBtn.style.display = "inline-block";
  });

  //Adds button functionality to open Rules Modal
  settingsRulesBtn.addEventListener("click", openRulesModal);
  noticeRulesBtn.addEventListener("click", openRulesModal);

  //Opens the rules modal when button is clicked
  function openRulesModal() {
    rulesModal.style.display = "block";
    rulesCurrentPatternTitle.textContent = patternTitle;
    rulesText.innerHTML = patternRules;
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
}

//Changes the active bingo pattern and destructures pattern object into variables
function changeBingoPattern(diffPattern) {
  if (gameMode == "progressive" && gameActive) {
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

//Destructures a bingo pattern object into game logic variables
function destructurePatternObj(obj) {
  patternTitle = obj.title;
  [...winningPattern] = obj.pattern;
  linesNeeded = obj.linesNeeded;
  freeSpaceIncluded = obj.freeSpace;
  numExclusion = obj.numExclusion.split("");
  gameMode = obj.gameMode;
  nextProgressive = obj.nextProgressive;
  patternRules = obj.rules;
}

//Toggles which opponent bingo board is visible by pressing corresponding button.
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
