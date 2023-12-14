const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(email) {
  // remove line with error and write your code here
  const mailIndex = email.lastIndexOf('@');
  return email.slice(mailIndex + 1);
}

module.exports = {
  getEmailDomain
};
