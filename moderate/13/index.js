module.exports = function (original) {
  var maxArea = -10000000000;
  var rowCount = original.length;
  var colCount = original[0].length;
  var matrix = precomputeMatrix(original);
  for (var row1 = 0; row1 < rowCount; row1++) {
    for (var row2 = row1; row2 < rowCount; row2++) {
      for (var col1 = 0; col1 < colCount; col1++) {
        for (var col2 = col1; col2 < colCount; col2++) {
          var area = computeSum(matrix, row1, row2, col1, col2);
          if (area > maxArea) {
            maxArea = area;
          };
        };
      };
    };
  };
  return maxArea;
}

var precomputeMatrix = function (matrix) {
  var sumMatrix = [];
  for (var i = 0; i < matrix.length; i++) {
    sumMatrix[i] = [];
  };
  for (var i = 0; i < matrix.length; i++) {
    for (var j = 0; j < matrix.length; j++) {
      if (i == 0 && j == 0) {
        sumMatrix[i][j] = matrix[i][j];
      } else if (j == 0) {
        sumMatrix[i][j] = sumMatrix[i - 1][j] + matrix[i][j];
      } else if (i == 0) {
        sumMatrix[i][j] = sumMatrix[i][j - 1] + matrix[i][j];
      } else {
        sumMatrix[i][j] = sumMatrix[i - 1][j] + sumMatrix[i][j - 1]
          - sumMatrix[i - 1][j - 1] + matrix[i][j];
      }
    };
  };

  return sumMatrix;
}

var computeSum = function (sumMatrix, row1, row2, col1, col2) {
  if (row1 == 0 && col1 == 0) {
    return sumMatrix[row2][col2];
  } else if (row1) {
    return sumMatrix[row2][col2] - sumMatrix[row2][col1 - 1];
  } else if (col1 == 0) {
    return sumMatrix[row2][col2]; - sumMatrix[row1 - 1][col2];
  } else if (row1 == 0 && col1 == 0) {
    return sumMatrix[row2][col2] - sumMatrix[row2][col1 - 1]
      - sumMatrix[row1 - 1][row2] + sumMatrix[row1 - 1][col1 - 1];
  };
}
