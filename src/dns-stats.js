const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  // remove line with error and write your code here
  if (domains.length === 0) {
    return {};
  }
  let result = [];
  for (let i = 0; i < domains.length; i++) {
    let element = domains[i];
    let indexOfDot = element.lastIndexOf('.');
    let domain = '';
    while (indexOfDot !== -1) {
      domain = domain.concat(element.slice(indexOfDot));
      result.push(domain);
      element = element.slice(0, indexOfDot);
      indexOfDot = element.lastIndexOf('.', indexOfDot - 1);
    }
    element = domain.concat('.', element);
    result.push(element);
  }
  const setOfDomains = Array.from(new Set(result));
  result = setOfDomains.reduce((a, b) => (
    {
      ...a, [b]: result.filter((c) => c === b).length,
    }), {});
  return result;
}

module.exports = {
  getDNSStats
};
