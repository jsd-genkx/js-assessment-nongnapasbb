"use strict";
import promptSync from "prompt-sync";
import clear from "clear-screen";

const prompt = promptSync({ sigint: true });

const hat = "^";
const hole = "O";
const fieldCharacter = "░";
const pathCharacter = "*";

const resultFoundHat = "found hat";
const resultFoundHole = "found hole";
const resultFoundField = "found field";
const resultFoundBorder = "found border";
const resultInsideBoard = "inside board";
const resultOutsideBoard = "outside board";

function randomNumber(number) {
  return Math.floor(Math.random() * number);
}
class Field {
  constructor(board = [[]]) {
    this.newBoard = board;
    this.currentPosition = { x: 0, y: 0 };
    this.createRandomBoard();
    this.setCurrentPosition();
  }
  print() {
    // clear();
    for (let i = 0; i < this.newBoard.length; i++) {
      console.log(this.newBoard[i].join(" "));
    }
  }
  createRandomBoard() {
    this.newBoard = [
      ["░", "░", "░"],
      ["░", "░", "░"],
      ["░", "░", "░"],
    ];
    const boardHeight = this.newBoard.length;
    const boardWidth = this.newBoard[0].length;
    const holePosition = {
      x: randomNumber(boardWidth),
      y: randomNumber(boardHeight),
    };
    const hatPosition = {
      x: randomNumber(boardWidth),
      y: randomNumber(boardHeight),
    };
    const pathCharacterPosition = {
      x: randomNumber(boardWidth),
      y: randomNumber(boardHeight),
    };
    this.newBoard[holePosition.y][holePosition.x] = hole;
    this.newBoard[hatPosition.y][hatPosition.x] = hat;
    this.newBoard[pathCharacterPosition.y][pathCharacterPosition.x] =
      pathCharacter;
  }
  checkBeforeMove(nextPosition) {
    const boardHeight = this.newBoard.length;
    const boardWidth = this.newBoard[0].length;
    if (nextPosition.y < 0 || nextPosition.x < 0) {
      return resultOutsideBoard;
    }
    if (this.newBoard[nextPosition.y][nextPosition.x] === fieldCharacter) {
      return resultFoundField;
    } else if (this.newBoard[nextPosition.y][nextPosition.x] === hat) {
      return resultFoundHat;
    } else if (this.newBoard[nextPosition.y][nextPosition.x] === hole) {
      return resultFoundHole;
    } else if (
      nextPosition.y < boardHeight && // Check below
      nextPosition.y >= 0 && // Check above
      nextPosition.x < boardWidth && // Check right
      nextPosition.x >= 0 // Check left
    ) {
      return resultInsideBoard;
    } else {
      return resultOutsideBoard;
    }
  }
  move(nextPosition) {
    const result = this.checkBeforeMove(nextPosition);
    if (result === resultFoundField) {
      this.currentPosition.x = nextPosition.x;
      this.currentPosition.y = nextPosition.y;
      this.newBoard[this.currentPosition.y][this.currentPosition.x] =
        pathCharacter;
    }
    return result;
  }

  moveRight() {
    console.log("Your character moves right!");
    const nextPosition = {
      x: this.currentPosition.x + 1,
      y: this.currentPosition.y,
    };
    const result = this.move(nextPosition);
    return result;
  }
  moveLeft() {
    console.log("Your character moves left!");
    const nextPosition = {
      x: this.currentPosition.x - 1,
      y: this.currentPosition.y,
    };
    const result = this.move(nextPosition);
    return result;
  }
  moveUp() {
    console.log("Your character goes up!");
    const nextPosition = {
      x: this.currentPosition.x,
      y: this.currentPosition.y - 1,
    };
    const result = this.move(nextPosition);
    return result;
  }
  moveDown() {
    console.log("Your character goes down!");
    const nextPosition = {
      x: this.currentPosition.x,
      y: this.currentPosition.y + 1,
    };
    const result = this.move(nextPosition);
    return result;
  }
  setCurrentPosition() {
    for (let i = 0; i < this.newBoard.length; i++) {
      for (let j = 0; j < this.newBoard[i].length; j++) {
        if (this.newBoard[i][j] === "*") {
          this.currentPosition.x = j;
          this.currentPosition.y = i;
        }
      }
    }
  }
  getCurrentPosition() {
    return `x=${this.currentPosition.x} y=${this.currentPosition.y}`;
  }
}

const boardArray = new Field([
  ["*", "░", "░"],
  ["O", "░", "░"],
  ["░", "O", "^"],
]);

while (true) {
  boardArray.print();
  const moveCommand = prompt(
    "Type R / L / U / D to move. Type Q to quit. Enter your command: "
  );
  console.log(`COMMAND: ${moveCommand}`);
  const result = handleCommand(moveCommand);
  if (result === resultOutsideBoard) {
    console.log("You are outside of the board. You lose - Game Over!");
    break;
  } else if (result === resultFoundHole) {
    console.log("You fell into a hole. You lose - Game Over!");
    break;
  } else if (result === resultFoundHat) {
    console.log("You found the hat. Congrats! You win - End Game!");
    break;
  } else if (moveCommand !== "Q") {
    console.log("You are still inside the board. Keep playing!");
  }
  if (moveCommand === "Q") {
    break;
  }
}
function handleCommand(moveCommand) {
  if (moveCommand === "R") {
    const result = boardArray.moveRight();
    return result;
  } else if (moveCommand === "L") {
    const result = boardArray.moveLeft();
    return result;
  } else if (moveCommand === "U") {
    const result = boardArray.moveUp();
    return result;
  } else if (moveCommand === "D") {
    const result = boardArray.moveDown();
    return result;
  } else if (moveCommand === "Q") {
    console.log("You quit the game. See you next time!");
  } else {
    console.log("Enter a valid command. Try again!");
  }
}
