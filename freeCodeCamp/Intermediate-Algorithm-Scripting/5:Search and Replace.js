/* Challenge #5: Search and Replace
Code by Perrin Clark
BlackGuyCoding@gmail.com
https://www.freecodecamp.com/blackguycoding */

function myReplace(str, before, after) {
  var words = str.split(" ");
  for (var i = 0; i < words.length; i++) {
    if (words[i] == before && words[i][0] == words[i].charAt(0).toUpperCase()) words[i] = after.charAt(0).toUpperCase() + after.slice(1);
    else if (words[i] == before) words[i] = after;
  }
  return words.join(" ");
}

myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");
