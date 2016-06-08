/* Challenge #8: Missing letters
Code by Perrin Clark
BlackGuyCoding@gmail.com
https://www.freecodecamp.com/blackguycoding */

function fearNotLetter(str) {
  var letters = str.split("");
  letters = letters.map(function(val) {
    return val.charCodeAt(0);
  });
  for (var i = 0; i <= letters.length; i++) {
    if (letters[0] === letters[i]) continue;
    if (letters[i] - letters[i-1] > 1) return String.fromCharCode(letters[i-1] + 1);
  }
  return undefined;
}

fearNotLetter("abce");
