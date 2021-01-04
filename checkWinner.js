function check_value(val) {
  if (val == "X") {
    return "X";
  } else if (val == "O") {
    return "O";
  }
}

module.exports = function check_winner(new_board) {
  if (
    new_board[0] == new_board[1] &&
    new_board[1] == new_board[2] &&
    new_board[0] != "_"
  ) {
    res = check_value(new_board[0]);
    return res;
  } else {
    if (
      new_board[3] == new_board[4] &&
      new_board[4] == new_board[5] &&
      new_board[3] != "_"
    ) {
      res = check_value(new_board[3]);
      return res;
    } else {
      if (
        new_board[6] == new_board[7] &&
        new_board[7] == new_board[8] &&
        new_board[6] != "_"
      ) {
        res = check_value(new_board[6]);
        return res;
      } else {
        if (
          new_board[0] == new_board[3] &&
          new_board[3] == new_board[6] &&
          new_board[0] != "_"
        ) {
          res = check_value(new_board[0]);
          return res;
        } else {
          if (
            new_board[1] == new_board[4] &&
            new_board[4] == new_board[7] &&
            new_board[1] != "_"
          ) {
            res = check_value(new_board[1]);
            return res;
          } else {
            if (
              new_board[2] == new_board[5] &&
              new_board[5] == new_board[8] &&
              new_board[2] != "_"
            ) {
              res = check_value(new_board[2]);
              return res;
            } else {
              if (
                new_board[0] == new_board[4] &&
                new_board[4] == new_board[8] &&
                new_board[0] != "_"
              ) {
                res = check_value(new_board[0]);
                return res;
              } else {
                if (
                  new_board[2] == new_board[4] &&
                  new_board[4] == new_board[6] &&
                  new_board[2] != "_"
                ) {
                  res = check_value(new_board[2]);
                  return res;
                } else {
                  res = "No Winner!";
                  return res;
                }
              }
            }
          }
        }
      }
    }
  }
};
