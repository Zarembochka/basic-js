const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  // remove line with error and write your code here
  let result = str;
  if (Object.hasOwn(options, 'addition')) {
    let addition = options['addition'];
    if (Object.hasOwn(options, 'additionRepeatTimes')) {
      let additionalSeparatorLength = 1;
      if (Object.hasOwn(options, 'additionSeparator')) {
        addition += options['additionSeparator'];
        additionalSeparatorLength = options['additionSeparator'].length;
      } else {
        addition = addition.concat('|');
      }
      addition = addition.repeat(options['additionRepeatTimes']);
      addition = addition.slice(0, -additionalSeparatorLength);
      result += addition;
    } else {
      result += addition;
    }
  }
  if (Object.hasOwn(options, 'repeatTimes')) {
    let lengthSeparator = 1;
    if (Object.hasOwn(options, 'separator')) {
      result = result.concat(options['separator']);
      lengthSeparator = options['separator'].length;
    } else {
      result = result.concat('+');
    }
    result = result.repeat(options['repeatTimes']);
    result = result.slice(0, -lengthSeparator);
  }
  return result;
}

module.exports = {
  repeater
};
