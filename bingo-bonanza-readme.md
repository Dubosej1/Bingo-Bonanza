# Bingo Bonanza
***
>A game app with lots of different bingo patterns and ways of playing  

Bingo Bonanza is a game app that provides a basic Bingo experiences against 3 CPU players.  You're not limited to just a traditional Bingo game of gettiing 5 squares in a row.  You can select from up to 50 different Bingo patterns and games.

# Play the Game Right Now
***
Bingo Bonanza is live right now.  Visit https://bingo-bonanza.netlify.app to play the game.

# Game Rules
***
## Object of the Game
The object of the game is to get a BINGO before the other CPU players.  A "BINGO" is when you successfully complete the bingo pattern on your card, by covering the relevant number squares.
## Playing the Game
1. Press the `[New Game]` button to start a new Bingo Game
2. A modal will pop up, indicating the current bingo pattern you're about to play.  Press the `[Rules]` button to view instructions on how the bingo pattern works.  Press the `[Start Round]` button to start the round.
3. Bingo Numbers will be called out at a regular interval.  Press the corresponding square on your Bingo card, that matches the Bingo Number.  The square will change to a different color, indicating that you covered it.  You can press the square again to uncover it, if you made a mistake.
4. When you have completed the current Bingo pattern on your card, press the `[BINGO]` button to indicate that you have a BINGO.  If you have a valid Bingo before the other CPU players, you'll win the round.  If you have an invalid Bingo, then the game will resume after 5 seconds.  You'll lose if any of the other CPU players get a BINGO before you do.
5. After the round ends, you can press the `[Next Round]` button to start a new round with the same bingo pattern.  
6. You can also press the `[Options]` at any time between rounds to change the current bingo pattern.

### Notes
- An invalid BINGO includes having an incomplete pattern or having an uncalled bingo number in your pattern.
- During the round, the "EXAMPLE BOARD" continually scrolls through all the possible BINGOs you can get on the current pattern.  Use it to see how the pattern works in action.  It's located next to the title of the Bingo pattern, near the top of the screen.
- During the round, use the "USED NUMBER BOARD" to keep track of the numbers called during the round.  It's located to the right of your bingo board.
- At any time during the round, you can press the `[End Game]` button to end the round.
- On small screens: You can any of the `[CPU Player]` buttons to view their bingo board.  This is only available on small screens.

## Settings Menu
At any time in-between rounds, you can press the `[Options]` button to enter the "SETTINGS MENU".  Here, you can choose a different bingo pattern to play from a dropdown menu.  Once you choose a bingo pattern, press the `[Select]` button to choose it.  Once you select it, you can press the `[Rules]` button to view the rules for the pattern.  Once you're done selecting the pattern, you can press the `[X]` button to close the modal.

### Notes on some Bingo Patterns
- Some bingo patterns are in the form of letters and shapes.  These patterns can also have "CRAZY" versions, where you can get a BINGO from the rotated versions of the pattern too.  Refer to the "EXAMPLE BOARD" during the round to see what possible patterns you can get.
- "PROGRESSIVE GAMES" are when you play 2 bingo patterns on the same card.  When a BINGO is called on the 1st pattern, then you use the same card to play the 2nd pattern.  The round ends when BINGO is called on the 2nd pattern.  "SUPER JACKPOT" is an example of a Progressive Game.
- The "QUICKIE" pattern is played with a faster interval of numbers called.  Be careful.

# Development
***

### Installation

You can download the code to your computer:
````
# Clone the repository
$ git clone https://github.com/Dubosej1/bingo-bonanza
````

## Built With
- Sass: a CSS Preprocessor

## Dependencies

### Sass (CSS styling)

If you want to use Sass, you will need to install it on your computer.  You can do so via `npm install sass`.

The Sass file is located in `sass/main.scss`.  The file will need to be compiled to the CSS file before you can render.  You can do that by running the script: `npm run compile:sass`.  The `-watch` flag is active, so you can continually make changes and have it render automatically, until you stop the script via `^C`.

# Contribute
***

#### Bugs Reports and Feature Requests

Please use the ["issue tracker"](https://github.com/Dubosej1/bingo-bonanza/issues) to report any bugs or file feature requests.

#### Pull Requests

If you want to fix a bug or add features yourself, follow these steps:

- Fork the repo
- Create a new branch (git checkout -b improve-feature)
- Make the appropriate changes in the files
- Add changes to reflect the changes made
- Commit your changes (git commit -am 'Improve feature')
- Push to the branch (git push origin improve-feature)
- Create a Pull Request

