/* Challenge #16: Caesars Cipher
Code by Perrin Clark
BlackGuyCoding@gmail.com
https://www.freecodecamp.com/blackguycoding */

function rot13(str) {
  function shift(chr) {
    if (!(chr.match(/[A-Z]/))) return chr;
    var code = chr.charCodeAt(0) - 13;
    if (code < 65) {
      return String.fromCharCode(90 - (64 - code));
    } else {
      return String.fromCharCode(code);
    }
  }

  return str.split('').map(shift).join('');
}

// Change the inputs below to test
rot13("SERR PBQR PNZC");
