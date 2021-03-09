const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor(mode) {
    this.mode = mode;
  }
  encrypt(message, key) {
    if (this.mode == false) {
      message = message.split("").reverse().join("");
    }

    message = message.toUpperCase();
    key = key.toUpperCase();

    let encryptedMessage = [];
    let isLetter = true;
    let keyIndex = 0;
    let x = 0;
    
    for (let i = 0; i < message.length; i++) {

      if (isLetter == false) {x++;}
      keyIndex = (i - x) % key.length;

      if (message.charCodeAt(i) >= 65 && message.charCodeAt(i) <= 90) {
        encryptedMessage += String.fromCodePoint((message.charCodeAt(i) + key.charCodeAt(keyIndex)) % 26 + 65);
        isLetter = true;
      }
      else {
        encryptedMessage += (String.fromCodePoint(message.charCodeAt(i)));
        isLetter = false;
      }
    }

    return encryptedMessage;
  }    
  decrypt(encryptedMessage, key) {
    if (this.mode == false) {
      encryptedMessage = encryptedMessage.split("").reverse().join("");
    }

    encryptedMessage = encryptedMessage.toUpperCase();
    key = key.toUpperCase();

    let decryptedMessage = [];
    let isLetter = true;
    let keyIndex = 0;
    let x = 0;

    for (let i = 0; i < encryptedMessage.length; i++) {

      if (isLetter == false) {x++;}
      keyIndex = (i - x) % key.length;

      if (encryptedMessage.charCodeAt(i) >= 65 && encryptedMessage.charCodeAt(i) <= 90) {
        decryptedMessage += String.fromCodePoint((encryptedMessage.charCodeAt(i) + 26 - key.charCodeAt(keyIndex)) % 26 + 65);
        isLetter = true;
      }
      else {
        decryptedMessage += (String.fromCodePoint(encryptedMessage.charCodeAt(i)));
        isLetter = false;
      }
    }

    return decryptedMessage;
  }
}

module.exports = VigenereCipheringMachine;
