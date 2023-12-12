const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  // remove line with error and write your code here
  let string = s2;
  const s1Array = s1.split('');
  const result = s1Array.map((element) => {
    const index = findIndex(element, string);
    if (index >= 0 ) {
      string = formatString(index, string);
      return 1;
    }
    return 0;
  }).filter((element) => element === 1).length;
  return result;
}

function formatString(index, string) {
  const result = string.slice(0, index).concat(string.slice(index + 1));
  return result;
}

function findIndex(char, string) {
  const index = string.indexOf(char);
  return index;
}

module.exports = {
  getCommonCharacterCount
};
