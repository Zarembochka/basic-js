const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  // remove line with error and write your code here
  const result = matrix.map((element) => element.map((a) => +a));
  const rowCount = matrix.length;
  const colCount = matrix[0].length;
  for (let i = 0; i < rowCount; i++) {
    for (let j = 0; j < colCount; j++) {
      const element = matrix[i][j];
      if (element === true) {
        //check row neighbors
        if (j < colCount) {
          if (matrix[i][j + 1] === false) {
            result[i][j + 1] += 1;
          }
        }
        if (j > 0) {
          if (matrix[i][j - 1] === false) {
            result[i][j - 1] += 1;
          }
        }
        //check column neighbors
        if (i < rowCount) {
          if (matrix[i + 1][j] === false) {
            result[i + 1][j] += 1;
          }
        }
        if (i > 0) {
          if (matrix[i - 1][j] === false) {
            result[i - 1][j] += 1;
          }
        }
        //check diagonal neighbors
        if ((j < colCount) && (i > 0))  {
          if (matrix[i - 1][j + 1] === false) {
            result[i - 1][j + 1] += 1;
          }
        }
        if ((j < colCount) && (i < rowCount))  {
          if (matrix[i + 1][j + 1] === false) {
            result[i + 1][j + 1] += 1;
          }
        }
        if ((j > 0) && (i > 0)) {
          if (matrix[i - 1][j - 1] === false) {
            result[i - 1][j - 1] += 1;
          }
        }
        if ((j > 0) && (i < rowCount)) {
          if (matrix[i + 1][j - 1] === false) {
            result[i + 1][j - 1] += 1;
          }
        }
      }
    }
  }
  return result;
}

module.exports = {
  minesweeper
};
