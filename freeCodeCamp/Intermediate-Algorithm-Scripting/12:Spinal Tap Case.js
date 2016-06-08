/* Challenge #12: Spinal Tap Case
Code by Perrin Clark
BlackGuyCoding@gmail.com
https://www.freecodecamp.com/blackguycoding */

function spinalCase(str) {
  // "It's such a fine line between stupid, and clever."
  // --David St. Hubbins
  str = str.split(" ").join("-");
  str = str.split("_").join("-");
  var check = str.split("-");
  check = check.map(function(val) {
    var chars = val.split("");
    chars = chars.map(function(val2) {
      if (val2 == val2.toUpperCase() && val2 !== chars[0]) val2 = "-" + val2.toLowerCase();
      return val2;
    });
    return chars.join("");
  });
  return check.join("-").toLowerCase();
}

spinalCase("AllThe-small Things");
