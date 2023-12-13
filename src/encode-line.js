const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  // remove line with error and write your code here
  if (str.length === 0) {
    return '';
  }
  const result = [];
  let symbol = str[0];
  let count = 1;
  for (let i = 1; i < str.length; i++) {
    if (symbol !== str[i]) {
      count = (count === 1) ? '' : count;
      const encodeSymbol = count + symbol;
      result.push(encodeSymbol);
      symbol = str[i];
      count = 0;
    }
    count += 1;
  }
  count = (count === 1) ? '' : count;
  const encodeSymbol = count + symbol;
  result.push(encodeSymbol);
  return result.join('');
}

module.exports = {
  encodeLine
};
