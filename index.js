readlineSync = require("readline-sync");
update_board = require("./updateBoard");
display_board = require("./displayBoard");
user_input = require("./posInput");
check_winner = require("./checkWinner");

board = ["_", "_", "_", "_", "_", "_", "_", "_", "_"];
player = "X";
display_board(board);

for (let i = 0; i < 9; i++) {
  pos = user_input(board);

  board = update_board(board, pos, player);

  res = check_winner(board);

  if (res == "X") {
    console.log("X is the winner");
    break;
  } else {
    if (res == "O") {
      console.log("O is the winner");
      break;
    } else {
      if (board.includes("_")) {
        if (player == "X") {
          player = "O";
        } else {
          player = "X";
        }
        continue;
      } else {
        console.log("No winner");
        break;
      }
    }
  }
}
