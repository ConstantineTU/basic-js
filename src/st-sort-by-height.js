import { NotImplementedError } from '../extensions/index.js';

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
export default function sortByHeight(arr) {
  const arrIndexOne = []
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === -1) {
      arrIndexOne.push(i)
    }
  }
  arr.sort((a, b) => a - b)
  arr.splice(0, arrIndexOne.length)
  for (let i = 0; i < arrIndexOne.length; i++) {
    arr.splice(arrIndexOne[i], 0, -1)
  }
  return arr
}
