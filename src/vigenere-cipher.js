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


const ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

class VigenereCipheringMachine {
  constructor(data = true) {
    this.data = data;
    this.alphabet = ALPHABET;
  }

  encrypt(mess, key) {
    if(!mess || !key) throw new Error('Incorrect arguments!');

    let newArr = [];
    let step = -1;
    for (let i = 0; i < mess.length; i++) {
      if (this.alphabet.indexOf(mess[i].toUpperCase()) > -1) {
        step++;
        let number = (this.alphabet.indexOf(mess[i].toUpperCase()) + this.alphabet.indexOf(key[step % key.length].toUpperCase())) % this.alphabet.length;
        newArr = [...newArr, ...this.alphabet[number]];
      } else {
        newArr = [...newArr, ...mess[i]];
      }
    }
    return this.data ? newArr.join('') : newArr.reverse().join('');
  }   

  decrypt(mess, key) {
    if(!mess || !key) throw new Error('Incorrect arguments!');

    let newArr = [];
    let step = -1;
    for (let i = 0; i < mess.length; i++) {
      if (this.alphabet.indexOf(mess[i].toUpperCase()) > -1) {
        step++;
        let number = (this.alphabet.indexOf(mess[i].toUpperCase()) + this.alphabet.length - this.alphabet.indexOf(key[step % key.length].toUpperCase())) % this.alphabet.length;
        newArr = [...newArr, ...this.alphabet[number]];
      } else {
        newArr = [...newArr, ...mess[i]];
      }
    }
    return this.data ? newArr.join('') : newArr.reverse().join('');
  }
}

module.exports = {
  VigenereCipheringMachine
};
