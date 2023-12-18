const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(n) {
  // remove line with error and write your code here
  let numToCalc = n;
  let sumOfDigits = 0;
  let result = 0;
  while (numToCalc > 9) {
    const lastDigit = numToCalc % 10;
    numToCalc = (numToCalc - lastDigit) / 10;
    sumOfDigits += lastDigit;
  }
  sumOfDigits += numToCalc;
  while (sumOfDigits > 9) {
    const lastDigit = sumOfDigits % 10;
    sumOfDigits = (sumOfDigits - lastDigit) / 10;
    result += lastDigit;
  }
  result += sumOfDigits;
  return result;
}

module.exports = {
  getSumOfDigits
};
