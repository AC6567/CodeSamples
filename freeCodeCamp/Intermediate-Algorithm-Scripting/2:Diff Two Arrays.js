/* Challenge #2: Diff Two Arrays
Code by Perrin Clark
BlackGuyCoding@gmail.com
https://www.freecodecamp.com/blackguycoding */

function diffArray(arr1, arr2) {
  var longer = arr1 > arr2 ? arr1 : arr2;
  var shorter = arr1 > arr2 ? arr2 : arr1;
  var newArr = [];

  newArr = shorter.filter(function(val) {
    for (var i = 0; i < longer.length; i++) {
      if (longer[i] == val) return false;
    }
    return true;
  });

  var temp = longer.filter(function(val) {
    for (var i = 0; i < shorter.length; i++) {
      if (shorter[i] == val) return false;
    }
    return true;
  });
  return newArr.concat(temp);
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
