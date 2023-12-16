const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  result: '',
  getLength() {
    // remove line with error and write your code here
    if (this.result.length === 0) {
      return 0;
    }
    const arr = this.result.split('~~');
    return arr.length;
  },
  addLink(value) {
    // remove line with error and write your code here
    if (this.result.length === 0) {
      this.result = `( ${value} )`;
    } else {
      this.result += `~~( ${value} )`;
    }
    return this;
  },
  removeLink(position) {
    // remove line with error and write your code here
    const arr = this.result.split('~~');
    if ((position <= 0) || (position > arr.length)) {
      this.result = '';
      throw new NotImplementedError("You can\'t remove incorrect link!");
    }
    try {
      const newArr = arr.slice(0, position - 1).concat(arr.slice(position));
      this.result = newArr.join('~~');
    } catch (error) {
      this.result = '';
      throw new NotImplementedError("You can\'t remove incorrect link!");
    }
    return this;
  },
  reverseChain() {
    // remove line with error and write your code here
    if (this.result.length === 0) {
      return this;
    }
    const arr = this.result.split('~~');
    this.result = arr.reverse().join('~~');
    return this;
  },
  finishChain() {
    // remove line with error and write your code here
    const result = this.result;
    this.result = '';
    return result;
  }
};

module.exports = {
  chainMaker
};
