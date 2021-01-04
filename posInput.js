readlineSync = require("readline-sync");

module.exports = function user_input(board) {
  while (true) {
    pos = readlineSync.question("Enter position you'd like to play: ");
    if (isNaN(parseInt(pos))) {
      console.log("Invalid input");
    } else {
      if (pos >= 1 && pos <= 9) {
        if (board[pos - 1] == "_") {
          return pos;
        } else {
          console.log("position is full");
        }
      } else {
        console.log("Input out of bounds");
      }
    }
  }
};
