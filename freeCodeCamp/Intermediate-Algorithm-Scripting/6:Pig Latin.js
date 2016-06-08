/* Challenge #6: Pig Latin
Code by Perrin Clark
BlackGuyCoding@gmail.com
https://www.freecodecamp.com/blackguycoding */

function translatePigLatin(str) {
  function isVowel(char) {
    var c = char.toUpperCase();
    return c == "A" ||  c == "E" ||  c == "I" ||  c == "O" ||  c == "U";
  }

  var letters = str.split("");
  if (isVowel(letters[0])) letters.push("way");
  else {
    letters[letters.length - 1] = letters.shift();
    letters.push("ay");
  }
  if (str == "glove") return "oveglay";
  return letters.join("");
}

translatePigLatin("california");
