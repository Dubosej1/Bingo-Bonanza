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
  `Complete 3 lines of 5 numbers or the 4 corners.  Free Space is included.  A line can be horizontal, vertical or diagonal.`
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
  `Complete 3 lines of 5 numbers or the 4 corners.  Free Space is included.  A line can be horizontal, vertical or diagonal.`
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

export const doubleHardwayBingo = new winningPattern(
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

export const tripleHardwayBingo = new winningPattern(
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
  `Complete the letter L Pattern`
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
  `Complete the letter L Pattern`
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
  `Complete the letter L Pattern`
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
  `Complete the letter T Pattern`
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
  `A bingo number is first called.  All numbers ending with the last digit of that called number are wild.  You'll have 1 min to select all the wild numbers on your card, then regular play resumes.  Complete a regular bingo pattern.`
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
  `A bingo number is first called.  All numbers ending with the last digit of that called number are wild.  You'll have 1 min to select all the wild numbers on your card, then regular play resumes.  Complete a regular bingo pattern.`
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
  `A bingo number is first called.  All numbers ending with the last digit of that called number are wild.  You'll have 1 min to select all the wild numbers on your card, then regular play resumes.  Complete a regular bingo pattern.`
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
  `A bingo number is first called.  All numbers ending with the last digit of that called number are wild.  You'll have 1 min to select all the wild numbers on your card, then regular play resumes.  Complete a regular bingo pattern.`
);

export const fourPostageStamps = new winningPattern(
  `Four Postage Stamps`,
  [[1, 2, 4, 5, 6, 7, 9, 10, 16, 17, 19, 20, 21, 22, 24, 25]],
  1,
  false,
  "N",
  "normal",
  "none",
  `A bingo number is first called.  All numbers ending with the last digit of that called number are wild.  You'll have 1 min to select all the wild numbers on your card, then regular play resumes.  Complete a regular bingo pattern.`
);

export const smKiteLeft = new winningPattern(
  `Small Kite (Left)`,
  [[1, 2, 6, 7, 13, 19, 25]],
  1,
  true,
  "none",
  "normal",
  "none",
  `A bingo number is first called.  All numbers ending with the last digit of that called number are wild.  You'll have 1 min to select all the wild numbers on your card, then regular play resumes.  Complete a regular bingo pattern.`
);

export const smKiteRight = new winningPattern(
  `Small Kite (Right)`,
  [[5, 9, 13, 16, 17, 21, 22]],
  1,
  true,
  "none",
  "normal",
  "none",
  `A bingo number is first called.  All numbers ending with the last digit of that called number are wild.  You'll have 1 min to select all the wild numbers on your card, then regular play resumes.  Complete a regular bingo pattern.`
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
  `A bingo number is first called.  All numbers ending with the last digit of that called number are wild.  You'll have 1 min to select all the wild numbers on your card, then regular play resumes.  Complete a regular bingo pattern.`
);

export const lgKiteLeft = new winningPattern(
  `Large Kite (Left)`,
  [[1, 2, 3, 6, 7, 8, 11, 12, 13, 19, 25]],
  1,
  true,
  "none",
  "normal",
  "none",
  `A bingo number is first called.  All numbers ending with the last digit of that called number are wild.  You'll have 1 min to select all the wild numbers on your card, then regular play resumes.  Complete a regular bingo pattern.`
);

export const lgKiteRight = new winningPattern(
  `Large Kite (Right)`,
  [[5, 9, 11, 12, 13, 16, 17, 18, 21, 22, 23]],
  1,
  true,
  "none",
  "normal",
  "none",
  `A bingo number is first called.  All numbers ending with the last digit of that called number are wild.  You'll have 1 min to select all the wild numbers on your card, then regular play resumes.  Complete a regular bingo pattern.`
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
  `A bingo number is first called.  All numbers ending with the last digit of that called number are wild.  You'll have 1 min to select all the wild numbers on your card, then regular play resumes.  Complete a regular bingo pattern.`
);

export const smPictureFrame = new winningPattern(
  `Small Picture Frame`,
  [[7, 8, 9, 12, 14, 17, 18, 19]],
  1,
  false,
  "none",
  "normal",
  "none",
  `A bingo number is first called.  All numbers ending with the last digit of that called number are wild.  You'll have 1 min to select all the wild numbers on your card, then regular play resumes.  Complete a regular bingo pattern.`
);

export const lgPictureFrame = new winningPattern(
  `Large Picture Frame`,
  [[1, 2, 3, 4, 5, 6, 10, 11, 15, 16, 20, 21, 22, 23, 24, 25]],
  1,
  false,
  "none",
  "normal",
  "none",
  `A bingo number is first called.  All numbers ending with the last digit of that called number are wild.  You'll have 1 min to select all the wild numbers on your card, then regular play resumes.  Complete a regular bingo pattern.`
);

export const pyramid = new winningPattern(
  `Pyramid`,
  [[5, 9, 10, 13, 14, 15, 19, 20, 25]],
  1,
  true,
  "none",
  "normal",
  "none",
  `A bingo number is first called.  All numbers ending with the last digit of that called number are wild.  You'll have 1 min to select all the wild numbers on your card, then regular play resumes.  Complete a regular bingo pattern.`
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
  `A bingo number is first called.  All numbers ending with the last digit of that called number are wild.  You'll have 1 min to select all the wild numbers on your card, then regular play resumes.  Complete a regular bingo pattern.`
);

export const bowTie = new winningPattern(
  `Bow Tie`,
  [[1, 2, 3, 4, 5, 7, 8, 9, 13, 17, 18, 19, 21, 22, 23, 24, 25]],
  1,
  true,
  "N",
  "normal",
  "none",
  `A bingo number is first called.  All numbers ending with the last digit of that called number are wild.  You'll have 1 min to select all the wild numbers on your card, then regular play resumes.  Complete a regular bingo pattern.`
);

export const hourglass = new winningPattern(
  `Hourglass`,
  [[1, 5, 6, 7, 9, 10, 11, 12, 13, 14, 15, 16, 17, 19, 20, 21, 25]],
  1,
  true,
  "none",
  "normal",
  "none",
  `A bingo number is first called.  All numbers ending with the last digit of that called number are wild.  You'll have 1 min to select all the wild numbers on your card, then regular play resumes.  Complete a regular bingo pattern.`
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
  `A bingo number is first called.  All numbers ending with the last digit of that called number are wild.  You'll have 1 min to select all the wild numbers on your card, then regular play resumes.  Complete a regular bingo pattern.`
);

export const cross = new winningPattern(
  `Cross`,
  [[3, 8, 11, 12, 13, 14, 15, 18, 23]],
  1,
  true,
  "none",
  "normal",
  "none",
  `A bingo number is first called.  All numbers ending with the last digit of that called number are wild.  You'll have 1 min to select all the wild numbers on your card, then regular play resumes.  Complete a regular bingo pattern.`
);

export const doubleCross = new winningPattern(
  `Double Cross`,
  [[7, 9, 11, 12, 13, 14, 15, 17, 19]],
  1,
  true,
  "BO",
  "normal",
  "none",
  `A bingo number is first called.  All numbers ending with the last digit of that called number are wild.  You'll have 1 min to select all the wild numbers on your card, then regular play resumes.  Complete a regular bingo pattern.`
);

export const checkerBoard = new winningPattern(
  `Checker Board`,
  [[1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25]],
  1,
  true,
  "none",
  "normal",
  "none",
  `A bingo number is first called.  All numbers ending with the last digit of that called number are wild.  You'll have 1 min to select all the wild numbers on your card, then regular play resumes.  Complete a regular bingo pattern.`
);

export const gridPattern = new winningPattern(
  `Grid Pattern`,
  [[2, 4, 6, 7, 8, 9, 10, 12, 14, 16, 17, 18, 19, 20, 22, 24]],
  1,
  false,
  "none",
  "normal",
  "none",
  `A bingo number is first called.  All numbers ending with the last digit of that called number are wild.  You'll have 1 min to select all the wild numbers on your card, then regular play resumes.  Complete a regular bingo pattern.`
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
  `A bingo number is first called.  All numbers ending with the last digit of that called number are wild.  You'll have 1 min to select all the wild numbers on your card, then regular play resumes.  Complete a regular bingo pattern.`
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
  `Complete a line of 5 numbers or the 4 corners.  Free Space is included.  A line can be horizontal, vertical or diagonal.`
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
  `Complete 2 lines of 5 numbers or the 4 corners.  Free Space is included.  A line can be horizontal, vertical or diagonal.`
);

export const proghardtoDoubleHard = new winningPattern(
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
  `Complete 1 lines of 5 numbers.  Free Space is NOT included.  A line can be horizontal, vertical or diagonal.`
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
  `Complete 2 lines of 5 numbers.  Free Space is NOT included.  A line can be horizontal, vertical or diagonal.`
);

export const progLToPicFrame = new winningPattern(
  `Round 1: Letter L`,
  [[1, 2, 3, 4, 5, 10, 15, 20, 25]],
  1,
  false,
  "none",
  "progressive",
  "lgPictureFrame",
  `Complete the letter L Pattern`
);

export const progPyramidToHourglass = new winningPattern(
  `Round 1: Pyramid`,
  [[5, 9, 10, 13, 14, 15, 19, 20, 25]],
  1,
  true,
  "none",
  "progressive",
  "hourglass",
  `A bingo number is first called.  All numbers ending with the last digit of that called number are wild.  You'll have 1 min to select all the wild numbers on your card, then regular play resumes.  Complete a regular bingo pattern.`
);

export const progBToJailBars = new winningPattern(
  `Round 1: B Column Only`,
  [[1, 2, 3, 4, 5]],
  1,
  false,
  "INGO",
  "progressive",
  "jailBars",
  `Complete the B Column only`
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
  `Bingo numbers will be called at twice the speed. Complete the full card!`
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
  `Progressive Game:
  Game 1: Complete either a Letter X or Letter L pattern.
  Game 2: Complete the other letter pattern from Game 1.
  Game 3: Complete the full card.`
);

export const uPickEm = new winningPattern(
  `U Pick 'Em`,
  [[7, 8, 9, 12, 13, 14, 17, 18, 19]],
  1,
  true,
  "none",
  "upickem",
  "none",
  `Pick 8 numbers between 1 and 75.  Game is played on a 9 square board.  Complete board to win.`
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
  `40 Bingo numbers are pre-selected before the game begins.  You'll have 1 minute to fill out your card, before more numbers are called as normal.  First player to complete full card wins.`
);
