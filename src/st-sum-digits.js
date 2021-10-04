import { NotImplementedError } from '../extensions/index.js';

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
export default function getSumOfDigits(n) {
  let result
  const getSum = function (n) {
    let arr = `${n}`.split('')
    let sum = arr.reduce((sum, current) => sum + +current, 0)
    return sum
  }
  result = getSum(n)
  while (result > 9) {
    result = getSum(result)
  }
  return result
}
