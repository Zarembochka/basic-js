const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  // remove line with error and write your code here
  if (names.length === 0) {
    return [];
  }
  const result = [];
  const newNames = names.map((element, index) => newName(element, result, names, index));
  return newNames;
}

function newName(name, newArr, OldArr, index) {
  const countNamesFromNewArr = newArr.filter(element => element === name).length;
  if (countNamesFromNewArr === 0) {
    newArr.push(name);
    return name;
  }
  const countNamesFromOldArr = OldArr.filter((element, i) => (element === name) && (i <= index)).length;
  let newCount;
  if ((countNamesFromNewArr === 1) && (countNamesFromOldArr === 1)) {
    newCount = 1;
  } else {
    newCount = countNamesFromOldArr - 1;
  }
  const newName = addCountToName(name, newCount);
  newArr.push(newName);
  return newName;
}

function addCountToName(name, count) {
  return `${name}(${count})`;
}

module.exports = {
  renameFiles
};
