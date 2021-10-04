import { NotImplementedError } from '../extensions/index.js';

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
export default function renameFiles(names) {
  const resArr = []
  if (names.length > 0) {
    const obj = {}
    obj[names[0]] = 0
    resArr.push(names[0])
    for (let i = 1; i < names.length; i += 1) {
      if (!Object.keys(obj).includes(names[i])) {
        obj[names[i]] = 0;
        resArr.push(names[i])
      } else {
        obj[names[i]] += 1
        obj[`${names[i]}(${obj[names[i]]})`] = 0
        resArr.push(`${names[i]}(${obj[names[i]]})`)
      }
    }
  }
  return resArr
}
