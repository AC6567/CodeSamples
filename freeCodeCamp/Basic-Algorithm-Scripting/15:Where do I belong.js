/* Challenge #15: Where do I belong
Code by Perrin Clark
BlackGuyCoding@gmail.com
https://www.freecodecamp.com/blackguycoding */

function getIndexToIns(arr, num) {
  // Find my place in this sorted array.
  var placedArr = arr.concat(num);
  placedArr.sort(function(pre, cur) {
    return pre - cur;
  });
  var index = placedArr.indexOf(num);
  return index;
}

getIndexToIns([5, 3, 20, 3], 5);
