/* Challenge #13: Falsy Bouncer
Code by Perrin Clark
BlackGuyCoding@gmail.com
https://www.freecodecamp.com/blackguycoding */

function bouncer(arr) {
  // Don't show a false ID to this bouncer.
  var filtArr = arr.filter(function(val) {
    return Boolean(val);
  });
  return filtArr;
}

bouncer([7, "ate", "", false, 9]);
