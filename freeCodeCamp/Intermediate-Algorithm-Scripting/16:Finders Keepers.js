/* Challenge #16: Finders Keepers
Code by Perrin Clark
BlackGuyCoding@gmail.com
https://www.freecodecamp.com/blackguycoding */

function findElement(arr, func) {
  var num = [];
  arr.filter(function(val) {
    if (func(val)) {
      num.push(val);
      return true;
    }
    return false;
  });
  return num[0];
}

findElement([1, 2, 3, 4], function(num){ return num % 2 === 0; });
