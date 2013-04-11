module.exports = function (matrix) {
  var N = matrix.length;

  var currentMaxSize = 0;
  var col = 0;
  var square;

  while (N - col > currentMaxSize) {
    for (var row = 0; row < matrix.length; row++) {
      var size = N - Math.max(row, col);
      while (size > currentMaxSize) {
        if (isSquare(matrix, row, col, size)){
          currentMaxSize = size;
          square = { row: row, col: col, size: size}
          break;
        } ;
        size--;
      }
    }
    col++;
  }
  return currentMaxSize * currentMaxSize;
}

var isSquare = function (matrix, row, col, size) {
  for (var i = 0; i < size; i++) {
    if (!matrix[row][col + i]) {
      return false;
    };
    if (!matrix[row + size - 1][col + i]) {
      return false;
    };
  };

  //no need to check corner
  for (var j = 1; j < size - 1; j++) {
    if (!matrix[row + j][col]) {
      return false;
    };
    if (!matrix[row + j][col + size - 1]) {
      return false;
    };
  };

  return true;
}
