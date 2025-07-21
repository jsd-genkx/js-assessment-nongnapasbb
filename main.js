"use strict";
// JS Assessment: Find Your Hat //
import promptSync from "prompt-sync";
import clear from "clear-screen";

const prompt = promptSync({ sigint: true });

const hat = "^";
const hole = "O";
const fieldCharacter = "░";
const pathCharacter = "*";

class Field {
  constructor(board = [[]]) {
    this.newBoard = board;
    console.log(board);
  }
  print() {
    clear();
    console.log("Print the board",this.newBoard);
  }
}

const boardArray = new Field([
  ["*", "░", "░"],
  ["O", "░", "░"],
  ["░", "O", "^"],
]);
boardArray.print();

while (true) {
  const command = prompt(
    "Type R /L /U /D to move. Type Q to quit. Enter your command: ");
  	console.log(`Command:"${command}"`);
	handleCommand(command);
	if (command === "q") {
    break;
  }
}

function handleCommand(command) {
  if (command === "R") {
    console.log("Your character goes right");
  } else if (command === "L") {
    console.log("Your character goes left");
  } else if (command === "U") {
    console.log("Your character goes up");
  } else if (command === "D") {
    console.log("Your character goes down");
  } else if (command === "Q") {
    console.log("quit");
  } else {
    console.log("Unknown command.Please try again.");
  }
}
