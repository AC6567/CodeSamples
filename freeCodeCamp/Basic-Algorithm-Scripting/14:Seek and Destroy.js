/* Challenge #14: Seek and Destroy
Code by Perrin Clark
BlackGuyCoding@gmail.com
https://www.freecodecamp.com/blackguycoding */

function destroyer(arr) {
  // Remove all the values
  var args = arguments;
  var filtArr = arr.filter(function(val) {
    for (var i=1; i < args.length; i++) {
      if (val === args[i]) {
        return false;
      }
    }
    return true;
  });
  return filtArr;
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);
