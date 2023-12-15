const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth(arr) {
    // remove line with error and write your code here
    const arrDepth = arr.map((element) => this.getDepth(element));
    const result = arrDepth.sort((a, b) => b - a)[0];
    return result + 1;
  }
  getDepth(element) {
    if (element instanceof Array) {
      if (element.length === 0) {
        return 1;
      }
      return this.calculateDepth(element);
    }
    return 0;
  }
}

module.exports = {
  DepthCalculator
};
