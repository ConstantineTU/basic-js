import { NotImplementedError } from '../extensions/index.js';

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
export default class VigenereCipheringMachine {
  constructor(result = true) {
    this.result = result;
  }
  encrypt(message, key) {
    if (!message || !key) throw new Error('Incorrect arguments!')
    message = message.toUpperCase()
    key = key.toUpperCase()
    while (key.length < message.length) {
      key += key
    }
    let
      result = '',
      encryptCode = 0,
      j = 0;
    for (let i = 0; i < message.length; i++) {
      let messCode = message.charCodeAt(i);
      if (messCode >= 65 && messCode <= 90) {
        let setKeyCode = key.charCodeAt(j) - 65;
        if (messCode + setKeyCode > 90) {
          encryptCode = messCode + setKeyCode - 26;
        } else {
          encryptCode = messCode + setKeyCode;
        }
        result += String.fromCharCode(encryptCode)
        j++
      } else {
        result += message[i]
      }
    }
    return this.result ? result : result.split('').reverse().join('')
  }
  decrypt(message, key) {
    if (!message || !key) throw new Error('Incorrect arguments!')
    message = message.toUpperCase()
    key = key.toUpperCase()
    while (key.length < message.length) {
      key += key
    }
    let
      result = '',
      decryptCode = 0,
      j = 0
    for (let i = 0; i < message.length; i++) {
      let messCode = message.charCodeAt(i)
      if (messCode >= 65 && messCode <= 90) {
        let setKeyCode = key.charCodeAt(j) - 65
        if (messCode - setKeyCode < 65) {
          decryptCode = messCode - setKeyCode + 26
        } else {
          decryptCode = messCode - setKeyCode
        }
        result += String.fromCharCode(decryptCode)
        j++
      } else {
        result += message[i]
      }
    }
    return this.result ? result : result.split('').reverse().join('')
  }
}
