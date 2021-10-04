import { NotImplementedError } from '../extensions/index.js';

/**
 * Implement chainMaker object according to task description
 * 
 */
export default {
  chainLinks: [],
  result: '',
  getLength() {
    return this.chainLinks.length;
  },
  addLink(value) {
    if (value === undefined) {
      value = ''
    }
    else if (!value) {
      value = String(value);
    }
    this.chainLinks.push('( ' + value + ' )')
    return this
  },
  removeLink(position) {
    if (typeof position !== 'number' || position <= 0 || position >= this.chainLinks.length) {
      this.chainLinks = []
      throw new Error('You can\'t remove incorrect link!')
    }
    this.chainLinks.splice(position - 1, 1)
    return this
  },
  reverseChain() {
    this.chainLinks.reverse()
    return this
  },
  finishChain() {
    this.result = this.chainLinks.join('~~')
    this.chainLinks = []
    return this.result
  }
};
