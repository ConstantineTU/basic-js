import { NotImplementedError } from '../extensions/index.js';

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
export default function getMatrixElementsSum(matrix) {
  let arr = []
  let sum = 0
  matrix.forEach((item1) => {
    item1.forEach((item2, index2) => {
      if (!arr.includes(index2)) {
        sum = sum + item2
        if (item2 === 0) {
          arr.push(index2)
        }
      }
    })
  })

  return sum
}
