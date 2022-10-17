const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */

const DISCARD_NEXT = '--discard-next';
const DISCARD_PREV = '--discard-prev';
const DOUBLE_NEXT = '--double-next';
const DOUBLE_PREV = '--double-prev';

function transform( arr ) {
  if(!Array.isArray(arr)) {
    throw Error("'arr' parameter must be an instance of the Array!");
  }
  
  let newArr = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === DISCARD_NEXT) {
      if (arr[i + 2] === DOUBLE_PREV || arr[i + 2] === DISCARD_PREV) {
        i++;
      }
      i++;
    } else if (arr[i] === DISCARD_PREV) {
      if (i !== 0) {
        newArr.pop();
      }
    } else if (arr[i] === DOUBLE_NEXT) {
      if (i < arr.length - 1) {
        newArr.push(arr[i + 1]);
      }
    } else if (arr[i] === DOUBLE_PREV) {
      if (i !== 0) {
        newArr.push(arr[i - 1]);
      }
    } else {
      newArr.push(arr[i]);
    }
  }
  return newArr;
};

module.exports = {
  transform
};
