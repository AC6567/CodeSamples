/* Challenge #10: Sorted Union
Code by Perrin Clark
BlackGuyCoding@gmail.com
https://www.freecodecamp.com/blackguycoding */

function uniteUnique() {
  var arrs = (arguments.length === 1 ? [arguments[0]] : Array.apply(null, arguments));
  var newArr = [];
  for (var i = 0; i < arrs.length; i++) {
    for (var j = 0; j < arrs[i].length; j++) {
      if (newArr.indexOf(arrs[i][j]) === -1) newArr.push(arrs[i][j]);
    }
  }
  return newArr;
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
