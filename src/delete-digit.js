const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  // remove line with error and write your code here
  const nToString = n.toString();
  let result = 0;
  for (let i = 0; i < nToString.length; i++) {
    const value = nToString.slice(0, i) + nToString.slice(i + 1);
    if (value > result) {
      result = +value;
    }
  }
  return result;
}

module.exports = {
  deleteDigit
};
