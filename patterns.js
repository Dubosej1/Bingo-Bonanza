class winningPattern {
  constructor(
    title,
    pattern,
    linesNeeded,
    freeSpace,
    numExclusion,
    gameMode,
    nextProgressive,
    rules
  ) {
    this.title = title;
    this.pattern = pattern;
    this.linesNeeded = linesNeeded;
    this.freeSpace = freeSpace;
    this.numExclusion = numExclusion;
    this.gameMode = gameMode;
    this.nextProgressive = nextProgressive;
    this.rules = rules;
  }
}

export const singleBingo = new winningPattern(
  `Bingo`,
  [
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
    [1, 5, 13, 21, 25],
  ],
  1,
  true,
  "none",
  "normal",
  "none",
  `Complete a line of 5 numbers or the 4 corners.  Free Space is included.  A line can be horizontal, vertical or diagonal.`
);

export const doubleBingo = new winningPattern(
  `Double Bingo`,
  [
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
  ],
  2,
  true,
  "none",
  "normal",
  "none",
  `Complete 2 lines of 5 numbers or the 4 corners.  Free Space is included.  A line can be horizontal, vertical or diagonal.`
);

export const tripleBingo = new winningPattern(
  `Triple Bingo`,
  [
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
  ],
  3,
  true,
  "none",
  "normal",
  "none",
  `Complete 3 lines of 5 numbers or the 4 corners.  Free Space is included.  A line can be horizontal, vertical or diagonal.`
);

export const bingoFourCorners = new winningPattern(
  `Bingo + 4 Corners`,
  [
    [1, 2, 3, 4, 5, 21, 25],
    [1, 5, 6, 7, 8, 9, 10, 21, 25],
    [1, 5, 11, 12, 13, 14, 15, 21, 25],
    [1, 5, 16, 17, 18, 19, 20, 21, 25],
    [1, 5, 21, 22, 23, 24, 25],
    [1, 5, 6, 11, 16, 21, 25],
    [1, 2, 5, 7, 12, 17, 21, 22, 25],
    [1, 3, 5, 8, 13, 18, 21, 23, 25],
    [1, 4, 5, 9, 14, 19, 21, 24, 25],
    [1, 5, 10, 15, 20, 21, 25],
    [1, 5, 7, 13, 19, 21, 25],
    [1, 5, 9, 13, 17, 21, 25],
    [1, 5, 13, 21, 25],
  ],
  1,
  true,
  "none",
  "normal",
  "none",
  `Complete 1 line of 5 numbers AND the 4 corners.  Free Space is included.  A line can be horizontal, vertical or diagonal.`
);

export const bingoPostageStamp = new winningPattern(
  `Bingo + Postage Stamp`,
  [
    [1, 2, 3, 4, 5, 6, 7],
    [1, 2, 3, 4, 5, 9, 10],
    [1, 2, 3, 4, 5, 16, 17, 21, 22],
    [1, 2, 3, 4, 5, 19, 20, 24, 25],
    [1, 2, 6, 7, 8, 9, 10],
    [4, 5, 6, 7, 8, 9, 10],
    [6, 7, 8, 9, 10, 16, 17, 21, 22],
    [6, 7, 8, 9, 10, 19, 20, 24, 25],
    [1, 2, 6, 7, 11, 12, 13, 14, 15],
    [4, 5, 9, 10, 11, 12, 13, 14, 15],
    [11, 12, 13, 14, 15, 16, 17, 21, 22],
    [11, 12, 13, 14, 15, 19, 20, 24, 25],
    [1, 2, 6, 7, 16, 17, 18, 19, 20],
    [4, 5, 9, 10, 16, 17, 18, 19, 20],
    [16, 17, 18, 19, 20, 21, 22],
    [16, 17, 18, 19, 20, 24, 25],
    [1, 2, 6, 7, 21, 22, 23, 24, 25],
    [4, 5, 9, 10, 21, 22, 23, 24, 25],
    [16, 17, 21, 22, 23, 24, 25],
    [19, 20, 21, 22, 23, 24, 25],
    [1, 2, 6, 7, 11, 16, 21],
    [1, 4, 5, 6, 9, 10, 11, 16, 21],
    [1, 6, 11, 16, 17, 21, 22],
    [1, 6, 11, 16, 19, 20, 21, 24, 25],
    [1, 2, 6, 7, 12, 17, 22],
    [2, 4, 5, 7, 9, 10, 12, 17, 22],
    [2, 7, 12, 16, 17, 21, 22],
    [2, 7, 12, 17, 19, 20, 22, 24, 25],
    [1, 2, 3, 6, 7, 8, 13, 18, 23],
    [3, 4, 5, 8, 9, 10, 13, 18, 23],
    [3, 8, 13, 16, 17, 18, 21, 22, 23],
    [3, 8, 13, 18, 19, 20, 23, 24, 25],
    [1, 2, 4, 6, 7, 9, 14, 19, 24],
    [4, 5, 9, 10, 14, 19, 24],
    [4, 9, 14, 16, 17, 19, 21, 22, 24],
    [4, 9, 14, 19, 20, 24, 25],
    [1, 2, 5, 6, 7, 10, 15, 20, 25],
    [4, 5, 9, 10, 15, 20, 25],
    [5, 10, 15, 16, 17, 20, 21, 22, 25],
    [5, 10, 15, 19, 20, 24, 25],
    [1, 2, 5, 6, 7, 9, 13, 17, 21],
    [4, 5, 9, 10, 13, 17, 21],
    [5, 9, 13, 16, 17, 21, 22],
    [5, 9, 13, 17, 19, 20, 21, 24, 25],
    [1, 2, 6, 7, 13, 19, 25],
    [1, 4, 5, 7, 9, 10, 13, 19, 25],
    [1, 7, 13, 16, 17, 19, 21, 22, 25],
    [1, 7, 13, 19, 20, 24, 25],
    [1, 2, 5, 6, 13, 7, 21, 25],
    [1, 4, 5, 9, 10, 13, 21, 25],
    [1, 5, 13, 16, 17, 21, 22, 25],
    [1, 5, 13, 19, 20, 21, 24, 25],
  ],
  1,
  true,
  "none",
  "normal",
  "none",
  `Complete a line of 5 numbers or the 4 corners.  In addition, you also have to complete a 4 block postage stamp in one of the corners.`
);

export const hardwayBingo = new winningPattern(
  `Hardway Bingo`,
  [
    [1, 2, 3, 4, 5],
    [6, 7, 8, 9, 10],
    [16, 17, 18, 19, 20],
    [21, 22, 23, 24, 25],
    [1, 6, 11, 16, 21],
    [2, 7, 12, 17, 22],
    [4, 9, 14, 19, 24],
    [5, 10, 15, 20, 25],
  ],
  1,
  false,
  "none",
  "normal",
  "none",
  `Complete 1 lines of 5 numbers.  Free Space is NOT included.  A line can be horizontal, vertical or diagonal.`
);

export const doubleHardway = new winningPattern(
  `Double Hardway Bingo`,
  [
    [1, 2, 3, 4, 5],
    [6, 7, 8, 9, 10],
    [16, 17, 18, 19, 20],
    [21, 22, 23, 24, 25],
    [1, 6, 11, 16, 21],
    [2, 7, 12, 17, 22],
    [4, 9, 14, 19, 24],
    [5, 10, 15, 20, 25],
  ],
  2,
  false,
  "none",
  "normal",
  "none",
  `Complete 2 lines of 5 numbers.  Free Space is NOT included.  A line can be horizontal, vertical or diagonal.`
);

export const tripleHardway = new winningPattern(
  `Triple Hardway Bingo`,
  [
    [1, 2, 3, 4, 5],
    [6, 7, 8, 9, 10],
    [16, 17, 18, 19, 20],
    [21, 22, 23, 24, 25],
    [1, 6, 11, 16, 21],
    [2, 7, 12, 17, 22],
    [4, 9, 14, 19, 24],
    [5, 10, 15, 20, 25],
  ],
  3,
  false,
  "none",
  "normal",
  "none",
  `Complete 3 lines of 5 numbers.  Free Space is NOT included.  A line can be horizontal, vertical or diagonal.`
);

export const bOnly = new winningPattern(
  `B Column Only`,
  [[1, 2, 3, 4, 5]],
  1,
  false,
  "INGO",
  "normal",
  "none",
  `Complete the B Column only`
);

export const igOnly = new winningPattern(
  `I & G Columns`,
  [[6, 7, 8, 9, 10, 16, 17, 18, 19, 20]],
  1,
  false,
  "BNO",
  "normal",
  "none",
  `Complete the I & G Columns only`
);

export const jailBars = new winningPattern(
  `Jail Bars`,
  [[1, 2, 3, 4, 5, 11, 12, 13, 14, 15, 21, 22, 23, 24, 25]],
  1,
  true,
  "IG",
  "normal",
  "none",
  `Complete the B N O Columns`
);

export const letterI = new winningPattern(
  `Letter I`,
  [[1, 5, 6, 10, 11, 12, 13, 14, 15, 16, 20, 21, 25]],
  1,
  true,
  "none",
  "normal",
  "none",
  `Complete the letter I Pattern`
);

export const crazyLetterI = new winningPattern(
  `Crazy Letter I`,
  [
    [1, 5, 6, 10, 11, 12, 13, 14, 15, 16, 20, 21, 25],
    [1, 2, 3, 4, 5, 8, 13, 18, 21, 22, 23, 24, 25],
  ],
  1,
  true,
  "none",
  "normal",
  "none",
  `Complete the letter I Pattern in any orientation`
);

export const letterL = new winningPattern(
  `Letter L`,
  [[1, 2, 3, 4, 5, 10, 15, 20, 25]],
  1,
  false,
  "none",
  "normal",
  "none",
  `Complete the letter L Pattern`
);

export const crazyLetterL = new winningPattern(
  `Crazy Letter L`,
  [
    [1, 2, 3, 4, 5, 10, 15, 20, 25],
    [5, 10, 15, 20, 21, 22, 23, 24, 25],
    [1, 6, 11, 16, 21, 22, 23, 24, 25],
    [1, 2, 3, 4, 5, 6, 11, 16, 21],
  ],
  1,
  false,
  "none",
  "normal",
  "none",
  `Complete the letter L Pattern in any orientation`
);

export const letterT = new winningPattern(
  `Letter T`,
  [[1, 6, 11, 12, 13, 14, 15, 16, 21]],
  1,
  true,
  "none",
  "normal",
  "none",
  `Complete the letter T Pattern`
);

export const crazyLetterT = new winningPattern(
  `Crazy Letter T`,
  [
    [1, 6, 11, 12, 13, 14, 15, 16, 21],
    [3, 8, 13, 18, 21, 22, 23, 24, 25],
    [5, 10, 11, 12, 13, 14, 15, 20, 25],
    [1, 2, 3, 4, 5, 8, 13, 18, 23],
  ],
  1,
  true,
  "none",
  "normal",
  "none",
  `Complete the letter T Pattern in any orientation`
);

export const letterX = new winningPattern(
  `Letter X`,
  [[1, 5, 7, 9, 13, 17, 19, 21, 25]],
  1,
  true,
  "N",
  "normal",
  "none",
  `Complete the letter X Pattern`
);

export const sixPack = new winningPattern(
  `Six Pack`,
  [
    [1, 2, 3, 6, 7, 8],
    [16, 17, 18, 21, 22, 23],
    [2, 3, 4, 7, 8, 9],
    [17, 18, 19, 22, 23, 24],
    [3, 4, 5, 8, 9, 10],
    [18, 19, 20, 23, 24, 25],
    [1, 2, 6, 7, 11, 12],
    [6, 7, 11, 12, 16, 17],
    [11, 12, 16, 17, 21, 22],
    [4, 5, 9, 10, 14, 15],
    [9, 10, 14, 15, 19, 20],
    [14, 15, 19, 20, 24, 25],
  ],
  1,
  false,
  "none",
  "normal",
  "none",
  `Complete a 6 number block anywhere on the board.  Free Space is NOT included.`
);

export const nineBlock = new winningPattern(
  `Nine Block`,
  [
    [1, 2, 3, 6, 7, 8, 11, 12, 13],
    [6, 7, 8, 11, 12, 13, 16, 17, 18],
    [11, 12, 13, 16, 17, 18, 21, 22, 23],
    [2, 3, 4, 7, 8, 9, 12, 13, 14],
    [7, 8, 9, 12, 13, 14, 17, 18, 19],
    [12, 13, 14, 17, 18, 19, 22, 23, 24],
    [3, 4, 5, 8, 9, 10, 13, 14, 15],
    [8, 9, 10, 13, 14, 15, 18, 19, 20],
    [13, 14, 15, 18, 19, 20, 23, 24, 25],
  ],
  1,
  true,
  "none",
  "normal",
  "none",
  `Complete a 9 number block anywhere on the board.  Free Space is included.`
);

export const doublePostageStamp = new winningPattern(
  `Double Postage Stamp`,
  [
    [1, 2, 4, 5, 6, 7, 9, 10],
    [1, 2, 6, 7, 16, 17, 21, 22],
    [1, 2, 6, 7, 19, 20, 24, 25],
    [4, 5, 9, 10, 16, 17, 21, 22],
    [4, 5, 9, 10, 19, 20, 24, 25],
    [16, 17, 19, 20, 21, 22, 24, 25],
  ],
  1,
  false,
  "N",
  "normal",
  "none",
  `Complete a 4 number block in 2 of the corners on the board.`
);

export const triplePostageStamp = new winningPattern(
  `Triple Postage Stamp`,
  [
    [1, 2, 4, 5, 6, 7, 9, 10, 16, 17, 21, 22],
    [1, 2, 6, 7, 16, 17, 19, 20, 21, 22, 24, 25],
    [1, 2, 4, 5, 6, 7, 9, 10, 19, 20, 24, 25],
    [4, 5, 9, 10, 16, 17, 19, 20, 21, 22, 24, 25],
  ],
  1,
  false,
  "N",
  "normal",
  "none",
  `Complete a 4 number block in 3 of the corners on the board.`
);

export const fourPostageStamps = new winningPattern(
  `Four Postage Stamps`,
  [[1, 2, 4, 5, 6, 7, 9, 10, 16, 17, 19, 20, 21, 22, 24, 25]],
  1,
  false,
  "N",
  "normal",
  "none",
  `Complete a 4 number block in ALL of the corners on the board.`
);

export const smKiteLeft = new winningPattern(
  `Small Kite (Left)`,
  [[1, 2, 6, 7, 13, 19, 25]],
  1,
  true,
  "none",
  "normal",
  "none",
  `Complete the Small Kite Pattern.`
);

export const smKiteRight = new winningPattern(
  `Small Kite (Right)`,
  [[5, 9, 13, 16, 17, 21, 22]],
  1,
  true,
  "none",
  "normal",
  "none",
  `Complete the Small Kite Pattern.`
);

export const crazySmKite = new winningPattern(
  `Crazy Small Kite`,
  [
    [1, 2, 6, 7, 13, 19, 25],
    [5, 9, 13, 16, 17, 21, 22],
    [1, 7, 13, 19, 20, 24, 25],
    [4, 5, 9, 10, 13, 17, 21],
  ],
  1,
  true,
  "none",
  "normal",
  "none",
  `Complete a Small Kite Pattern in any orientation.`
);

export const lgKiteLeft = new winningPattern(
  `Large Kite (Left)`,
  [[1, 2, 3, 6, 7, 8, 11, 12, 13, 19, 25]],
  1,
  true,
  "none",
  "normal",
  "none",
  `Complete the Large Kite Pattern.`
);

export const lgKiteRight = new winningPattern(
  `Large Kite (Right)`,
  [[5, 9, 11, 12, 13, 16, 17, 18, 21, 22, 23]],
  1,
  true,
  "none",
  "normal",
  "none",
  `Complete the Large Kite Pattern.`
);

export const crazyLgKite = new winningPattern(
  `Crazy Large Kite`,
  [
    [1, 2, 3, 6, 7, 8, 11, 12, 13, 19, 25],
    [5, 9, 11, 12, 13, 16, 17, 18, 21, 22, 23],
    [1, 7, 13, 14, 15, 18, 19, 20, 23, 24, 25],
    [3, 4, 5, 8, 9, 10, 13, 14, 15, 17, 21],
  ],
  1,
  true,
  "none",
  "normal",
  "none",
  `Complete the Large Kite Pattern in any orientation.`
);

export const smPictureFrame = new winningPattern(
  `Small Picture Frame`,
  [[7, 8, 9, 12, 14, 17, 18, 19]],
  1,
  false,
  "none",
  "normal",
  "none",
  `Complete a small square pattern around the Free Space (but not including).`
);

export const lgPictureFrame = new winningPattern(
  `Large Picture Frame`,
  [[1, 2, 3, 4, 5, 6, 10, 11, 15, 16, 20, 21, 22, 23, 24, 25]],
  1,
  false,
  "none",
  "normal",
  "none",
  `Complete a large square pattern around the bingo board.`
);

export const pyramid = new winningPattern(
  `Pyramid`,
  [[5, 9, 10, 13, 14, 15, 19, 20, 25]],
  1,
  true,
  "none",
  "normal",
  "none",
  `Complete the Pyramid patttern.`
);

export const crazyPyramid = new winningPattern(
  `Crazy Pyramid`,
  [
    [5, 9, 10, 13, 14, 15, 19, 20, 25],
    [1, 2, 3, 4, 5, 7, 8, 9, 13],
    [1, 6, 7, 11, 12, 13, 16, 17, 21],
    [13, 17, 18, 19, 21, 22, 23, 24, 25],
  ],
  1,
  true,
  "none",
  "normal",
  "none",
  `Complete the Pyramid pattern in any orientation.`
);

export const bowTie = new winningPattern(
  `Bow Tie`,
  [[1, 2, 3, 4, 5, 7, 8, 9, 13, 17, 18, 19, 21, 22, 23, 24, 25]],
  1,
  true,
  "N",
  "normal",
  "none",
  `Complete the Bow Tie Pattern.`
);

export const hourglass = new winningPattern(
  `Hourglass`,
  [[1, 5, 6, 7, 9, 10, 11, 12, 13, 14, 15, 16, 17, 19, 20, 21, 25]],
  1,
  true,
  "none",
  "normal",
  "none",
  `Complete the Hourglass Pattern.`
);

export const crazyHourglass = new winningPattern(
  `Crazy Hourglass`,
  [
    [1, 5, 6, 7, 9, 10, 11, 12, 13, 14, 15, 16, 17, 19, 20, 21, 25],
    [1, 2, 3, 4, 5, 7, 8, 9, 13, 17, 18, 19, 21, 22, 23, 24, 25],
  ],
  1,
  true,
  "none",
  "normal",
  "none",
  `Complete the Hourglass Pattern in any orientation.`
);

export const cross = new winningPattern(
  `Cross`,
  [[3, 8, 11, 12, 13, 14, 15, 18, 23]],
  1,
  true,
  "none",
  "normal",
  "none",
  `Complete 1 horizontal and 1 vertical line in the middle.`
);

export const doubleCross = new winningPattern(
  `Double Cross`,
  [[7, 9, 11, 12, 13, 14, 15, 17, 19]],
  1,
  true,
  "BO",
  "normal",
  "none",
  `Complete the Double Cross Pattern.`
);

export const checkerBoard = new winningPattern(
  `Checker Board`,
  [[1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25]],
  1,
  true,
  "none",
  "normal",
  "none",
  `Complete the Checker Board Pattern.`
);

export const gridPattern = new winningPattern(
  `Grid Pattern`,
  [[2, 4, 6, 7, 8, 9, 10, 12, 14, 16, 17, 18, 19, 20, 22, 24]],
  1,
  false,
  "none",
  "normal",
  "none",
  `Complete the Grid Pattern.`
);

export const wildBingo = new winningPattern(
  `Wild Number Bingo`,
  [
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
    [1, 5, 13, 21, 25],
  ],
  1,
  true,
  "none",
  "wild",
  "none",
  `<p><u>Wild Number Directions</u>:<br>
  1. 1 bingo number is called at first.<br>
  2. All numbers ending with the last digit of that called number are wild.<br>
  3. You'll have 1 min to select all the wild numbers on your card. <br>
  4. Regular play resumes.</p><br>

  <p><u>Pattern Rules</u>:<br>
  Complete 1 line of 5 numbers or the 4 corners.  Free Space is included.  A line can be horizontal, vertical or diagonal.</p>`
);

export const blackout = new winningPattern(
  `Blackout Bingo`,
  [
    [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12,
      13,
      14,
      15,
      16,
      17,
      18,
      19,
      20,
      21,
      22,
      23,
      24,
      25,
    ],
  ],
  1,
  true,
  "none",
  "normal",
  "none",
  `Complete the full card!`
);

export const progBingoToDouble = new winningPattern(
  `Round 1: Bingo`,
  [
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
    [1, 5, 13, 21, 25],
  ],
  1,
  true,
  "none",
  "progressive",
  "doubleBingo",
  `This is a Progressive Game.<br><br>
  <p><u>Progressive Game Rules</u>: <br>
  1. This bingo game has 2 rounds.<br>
  2. The 1st round is played as normal.  Complete the pattern to win.<br>
  3. After the 1st round, the game progresses to the 2nd round with all player cards still filled in. <br>
  4. Complete the new pattern to win the 2nd round.</p><br>

  <p><u>1st round Pattern Rules</u>: <br>
  Complete a line of 5 numbers or the 4 corners.  Free Space is included.  A line can be horizontal, vertical or diagonal.</p><br>
  
  <p><u>Next Progressive Round</u>: Double Bingo</p>`
);

export const progDoubleToTriple = new winningPattern(
  `Round 1: Double Bingo`,
  [
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
  ],
  2,
  true,
  "none",
  "progressive",
  "tripleBingo",
  `This is a Progressive Game.<br><br>
  <p><u>Progressive Game Rules</u>: <br>
  1. This bingo game has 2 rounds.<br>
  2. The 1st round is played as normal.  Complete the pattern to win.<br>
  3. After the 1st round, the game progresses to the 2nd round with all player cards still filled in. <br>
  4. Complete the new pattern to win the 2nd round.</p><br>

  <p><u>1st round Pattern Rules</u>: <br>
  Complete 2 lines of 5 numbers or the 4 corners.  Free Space is included.  A line can be horizontal, vertical or diagonal.</p><br>
  
  <p><u>Next Progressive Round</u>: Triple Bingo</p>`
);

export const progHardToDoubleHard = new winningPattern(
  `Round 1: Hardway Bingo`,
  [
    [1, 2, 3, 4, 5],
    [6, 7, 8, 9, 10],
    [16, 17, 18, 19, 20],
    [21, 22, 23, 24, 25],
    [1, 6, 11, 16, 21],
    [2, 7, 12, 17, 22],
    [4, 9, 14, 19, 24],
    [5, 10, 15, 20, 25],
  ],
  1,
  false,
  "none",
  "progressive",
  "doubleHardway",
  `This is a Progressive Game.<br><br>
  <p><u>Progressive Game Rules</u>: <br>
  1. This bingo game has 2 rounds.<br>
  2. The 1st round is played as normal.  Complete the pattern to win.<br>
  3. After the 1st round, the game progresses to the 2nd round with all player cards still filled in. <br>
  4. Complete the new pattern to win the 2nd round.</p><br>

  <p><u>1st round Pattern Rules</u>: <br>
  Complete 1 lines of 5 numbers or the 4 corners.  Free Space is NOT included.  A line can be horizontal, vertical or diagonal.</p><br>
  
  <p><u>Next Progressive Round</u>: Double Hardway Bingo</p>`
);

export const progDoubleHardToTripleHard = new winningPattern(
  `Round 1: Double Hardway Bingo`,
  [
    [1, 2, 3, 4, 5],
    [6, 7, 8, 9, 10],
    [16, 17, 18, 19, 20],
    [21, 22, 23, 24, 25],
    [1, 6, 11, 16, 21],
    [2, 7, 12, 17, 22],
    [4, 9, 14, 19, 24],
    [5, 10, 15, 20, 25],
  ],
  2,
  false,
  "none",
  "progressive",
  "tripleHardway",
  `This is a Progressive Game.<br><br>
  <p><u>Progressive Game Rules</u>: <br>
  1. This bingo game has 2 rounds.<br>
  2. The 1st round is played as normal.  Complete the pattern to win.<br>
  3. After the 1st round, the game progresses to the 2nd round with all player cards still filled in. <br>
  4. Complete the new pattern to win the 2nd round.</p><br>

  <p><u>1st round Pattern Rules</u>: <br>
  Complete 2 lines of 5 numbers or the 4 corners.  Free Space is NOT included.  A line can be horizontal, vertical or diagonal.</p><br>
  
  <p><u>Next Progressive Round</u>: Triple Hardway Bingo</p>`
);

export const progLetterLToPicFrame = new winningPattern(
  `Round 1: Letter L`,
  [[1, 2, 3, 4, 5, 10, 15, 20, 25]],
  1,
  false,
  "none",
  "progressive",
  "lgPictureFrame",
  `This is a Progressive Game.<br><br>
  <p><u>Progressive Game Rules</u>: <br>
  1. This bingo game has 2 rounds.<br>
  2. The 1st round is played as normal.  Complete the pattern to win.<br>
  3. After the 1st round, the game progresses to the 2nd round with all player cards still filled in. <br>
  4. Complete the new pattern to win the 2nd round.</p><br>

  <p><u>1st round Pattern Rules</u>: <br>
  Complete the letter L Pattern</p><br>
  
  <p><u>Next Progressive Round</u>: Large Picture Frame</p>`
);

export const progPyramidToHourglass = new winningPattern(
  `Round 1: Pyramid`,
  [[5, 9, 10, 13, 14, 15, 19, 20, 25]],
  1,
  true,
  "none",
  "progressive",
  "hourglass",
  `This is a Progressive Game.<br><br>
  <p><u>Progressive Game Rules</u>: <br>
  1. This bingo game has 2 rounds.<br>
  2. The 1st round is played as normal.  Complete the pattern to win.<br>
  3. After the 1st round, the game progresses to the 2nd round with all player cards still filled in. <br>
  4. Complete the new pattern to win the 2nd round.</p><br>

  <p><u>1st round Pattern Rules</u>: <br>
  Complete the Pyramid Pattern</p><br>
  
  <p><u>Next Progressive Round</u>: Hourglass</p>`
);

export const progLetterBToJailBars = new winningPattern(
  `Round 1: B Column Only`,
  [[1, 2, 3, 4, 5]],
  1,
  false,
  "INGO",
  "progressive",
  "jailBars",
  `This is a Progressive Game.<br><br>
  <p><u>Progressive Game Rules</u>: <br>
  1. This bingo game has 2 rounds.<br>
  2. The 1st round is played as normal.  Complete the pattern to win.<br>
  3. After the 1st round, the game progresses to the 2nd round with all player cards still filled in. <br>
  4. Complete the new pattern to win the 2nd round.</p><br>

  <p><u>1st round Pattern Rules</u>: <br>
  Complete the B Column</p><br>
  
  <p><u>Next Progressive Round</u>: Jail Bars</p>`
);

export const quickie = new winningPattern(
  `Quickie`,
  [
    [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12,
      13,
      14,
      15,
      16,
      17,
      18,
      19,
      20,
      21,
      22,
      23,
      24,
      25,
    ],
  ],
  1,
  true,
  "none",
  "quickie",
  "none",
  `This is a special game. <br><br>
  
  Bingo numbers will be called at twice the speed. Complete the full card!`
);

export const superJackpot = new winningPattern(
  `Super Jackpot`,
  [
    [1, 5, 7, 9, 13, 17, 19, 21, 25],
    [1, 2, 3, 4, 5, 10, 15, 20, 25],
    [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12,
      13,
      14,
      15,
      16,
      17,
      18,
      19,
      20,
      21,
      22,
      23,
      24,
      25,
    ],
  ],
  1,
  true,
  "none",
  "superJackpot",
  "none",
  `This is a special progressive game.<br><br>

  <p><u>Super Jackpot Directions</u> : <br>
  This is a 3 round game.  After each round, the game resumes with the player cards still filled in. <br>
  Round 1: Complete either a Letter X or Letter L pattern. <br>
  Round 2: Complete the other letter pattern from Round 1. <br>
  Round 3: Complete the full card.`
);

export const uPickEm = new winningPattern(
  `U Pick 'Em`,
  [[7, 8, 9, 12, 13, 14, 17, 18, 19]],
  1,
  true,
  "none",
  "upickem",
  "none",
  `This is a special game.<br><br>
  
  Pick 8 numbers between 1 and 75.  Game is played on a 9 square board, with Free Space included.  Complete the board to win.`
);

export const bonanza = new winningPattern(
  `Bingo Bonanza!`,
  [
    [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12,
      13,
      14,
      15,
      16,
      17,
      18,
      19,
      20,
      21,
      22,
      23,
      24,
      25,
    ],
  ],
  1,
  true,
  "none",
  "bonanza",
  "none",
  `This is a special game.<br><br>
  
  <p><u>Bingo Bonanza Directions</u>: <br>
  
  1. 40 Bingo numbers are pre-selected before the game begins.<br>  
  2. You'll have 60 seconds to select these numbers on your card. <br>
  3. Regular play resumes.  First player to complete the full card wins!</p>`
);
