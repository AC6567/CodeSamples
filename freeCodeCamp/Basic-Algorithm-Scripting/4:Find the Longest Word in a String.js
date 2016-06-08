/* Challenge #4: Find the Longest Word in a String
Code by Perrin Clark
BlackGuyCoding@gmail.com
https://www.freecodecamp.com/blackguycoding */

function findLongestWord(str) {
  return str.split(' ').sort(function(curr, next) {
    return next.length - curr.length;
  })[0].length;
}

findLongestWord("The quick brown fox jumped over the lazy dog");
