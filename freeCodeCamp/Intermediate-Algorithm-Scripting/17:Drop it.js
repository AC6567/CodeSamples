/* Challenge #17: Drop it
Code by Perrin Clark
BlackGuyCoding@gmail.com
https://www.freecodecamp.com/blackguycoding */

function dropElements(array, func) {
  var arr = array;
  var index = -1;
  for (var i = 0; !func(arr[index]); i++) {
    index += 1;
    console.log(index);
    if (i === arr.length) break;
  }
  return arr.slice(index);
}

dropElements([1, 2, 3, 4], function(n) {return n >= 3; });
