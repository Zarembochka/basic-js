const { NotImplementedError } = require('../extensions/index.js');

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
class VigenereCipheringMachine {
  constructor (direct = true) {
    this.direct = direct;
    this.alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  }
  encrypt(message, key) {
    // remove line with error and write your code here
    if (arguments.length < 2) {
      //throw new NotImplementedError('Incorrect arguments!');
      throw new TypeError('Incorrect arguments!');
    }
    if (message === undefined) {
      throw new TypeError('Incorrect arguments!');
    }
    const keyToEncrypt = this.getKeyToEncrypt(message, key);
    let result = Array.from(message).map((symbol, index) => this.encryptSymbol(symbol.toUpperCase(), keyToEncrypt[index].toUpperCase()));
    if (!this.direct) {
      result = result.reverse();
    }
    return result.join('');
  }
  decrypt(message, key) {
    // remove line with error and write your code here
    if (arguments.length < 2) {
      //throw new NotImplementedError('Incorrect arguments!');
      throw new TypeError('Incorrect arguments!');
    }
    if (message === undefined) {
      throw new TypeError('Incorrect arguments!');
    }
    const keyToEncrypt = this.getKeyToEncrypt(message, key);
    let result = Array.from(message).map((symbol, index) => this.decryptSymbol(symbol.toUpperCase(), keyToEncrypt[index].toUpperCase()));
    if (!this.direct) {
      result = result.reverse();
    }
    return result.join('');
  }
  getKeyToEncrypt(message, key) {
    let keyToEncrypt = '';
    let indexToAdd = 0;
    for (let i = 0; i < message.length; i++) {
      if (message[i] === ' ') {
        keyToEncrypt += ' ';
        indexToAdd -= 1;
        continue;
      }
      if (i + indexToAdd >= key.length) {
        indexToAdd -= key.length;
      }
      keyToEncrypt += key[i + indexToAdd];
    }
    return keyToEncrypt;
  }
  encryptSymbol(symbol, key) {
    const indexFromAlphabet = this.alphabet.indexOf(symbol);
    if (indexFromAlphabet === -1) {
      return symbol;
    }
    const indexFromKey = this.alphabet.indexOf(key);
    const indexEncryptSymbol = (indexFromAlphabet + indexFromKey) % this.alphabet.length;
    return this.alphabet.at(indexEncryptSymbol);
  }
  decryptSymbol(symbol, key) {
    const indexFromAlphabet = this.alphabet.indexOf(symbol);
    if (indexFromAlphabet === -1) {
      return symbol;
    }
    const indexFromKey = this.alphabet.indexOf(key);
    const indexEncryptSymbol = (indexFromAlphabet - indexFromKey) % this.alphabet.length;
    return this.alphabet.at(indexEncryptSymbol);
  }
}

module.exports = {
  VigenereCipheringMachine
};
