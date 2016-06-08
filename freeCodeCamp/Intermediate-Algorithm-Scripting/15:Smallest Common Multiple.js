/* Challenge #15: Smallest Common Multiple
Code by Perrin Clark
BlackGuyCoding@gmail.com
https://www.freecodecamp.com/blackguycoding */

ffunction numbersBetween(arr) {
  arr = arr.sort(function(a, b) { return a - b; });
  var nums = [arr[0]];
  for (var i = arr[0] + 1; i < arr[1]; i++) {
    nums.push(i);
  }
  nums.push(arr[1]);
  return nums;
}

function checkDivision(array, number) {
  for (var i = 0; i < array.length; i++) {
    if (number % array[i] !== 0) {
      return false;
    }
  }
  return true;
}

function smallestCommons(arr) {
  var array = numbersBetween(arr);
  var iterator = array[0];
  while (!checkDivision(array, iterator)) {
    iterator++;
  }
  return iterator;
}


smallestCommons([13,1]);
