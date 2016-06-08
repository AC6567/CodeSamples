/* Challenge #7: Confirm the Ending

Code by Perrin Clark
BlackGuyCoding@gmail.com
https://www.freecodecamp.com/blackguycoding */

function confirmEnding(str, target) {
  var compare = str.substr(str.length - target.length);
  if(compare===target) return true;
  return false;
}

confirmEnding("Bastian", "n");
