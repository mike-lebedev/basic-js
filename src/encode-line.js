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
  if (!str) {
    return '';
  }
  const n = str.length;
  let prev = str[0];
  let count = 1;
  let encoded = '';
  for (let i = 1; i < n; i++) {
    if (str[i] === prev) {
      count++;
    } else {
      encoded += count > 1 ? count + prev : prev;
      prev = str[i];
      count = 1;
    }
  }
  encoded += count > 1 ? count + prev : prev;
  return encoded;
}

module.exports = {
  encodeLine
};
