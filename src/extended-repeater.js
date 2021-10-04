import { NotImplementedError } from '../extensions/index.js';

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
export default function repeater(str, options) {
  let obj = {
    repeatTimes: options.repeatTimes || 1,
    separator: options.separator || '+',
    addition: 'addition' in options ? options.addition : '',
    additionRepeatTimes: options.additionRepeatTimes || 1,
    additionSeparator: options.additionSeparator || '|'
  };
  let result = ""
  for (let i = 0; i < obj.repeatTimes; i++) {
    result += str;
    for (let j = 0; j < obj.additionRepeatTimes; j++) {
      result += obj.addition;
      if (j < obj.additionRepeatTimes - 1) {
        result += obj.additionSeparator
      }
    }
    if (i < obj.repeatTimes - 1) {
      result += obj.separator
    }
  }
  return result;
}