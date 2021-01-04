display_board = require("./displayBoard");

module.exports = function update_board(board, pos, player) {
  board[pos - 1] = player;
  display_board(board);
  return board;
};
