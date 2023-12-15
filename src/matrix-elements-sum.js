const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  // remove line with error and write your code here
  if (matrix === []) {
    return 0;
  }
  const rowCount = matrix.length;
  const colCount = matrix[0].length;
  let result = 0;
  for (let j = 0; j < colCount; j++) {
    for (let i = 0; i < rowCount; i++) {
      const element = matrix[i][j];
      if (element === 0) {
        break;
      }
      result += element;
    }
  }
  return result;
}

module.exports = {
  getMatrixElementsSum
};
