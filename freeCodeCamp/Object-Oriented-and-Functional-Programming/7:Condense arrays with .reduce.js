/* Challenge #7: Condense arrays with .reduce
Code by Perrin Clark
BlackGuyCoding@gmail.com
https://www.freecodecamp.com/blackguycoding */

var array = [4,5,6,7,8];
var singleVal = 0;

// Only change code below this line.
var singleVal = [4,5,6,7,8].reduce(function(previousVal, currentVal) {
  return previousVal+currentVal;
});
