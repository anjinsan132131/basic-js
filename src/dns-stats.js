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
function getDNSStats( domains ) {
  let result = {};
  let arrItemsToDot = domains.map(item => item.split('.').reverse());

  arrItemsToDot.forEach(item => {
      let demo = '';

      for (let i = 0; i < item.length; i++) {
          demo += `.${item[i]}`
          if (result[demo] === undefined) {
              result[demo] = 1;
          } else {
              result[demo] += 1;
          }

      }
  })
  return result;
};

module.exports = {
  getDNSStats
};
