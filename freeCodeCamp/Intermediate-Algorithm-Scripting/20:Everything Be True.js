/* Challenge #20: Everything Be True
Code by Perrin Clark
BlackGuyCoding@gmail.com
https://www.freecodecamp.com/blackguycoding */

function truthCheck(collection, pre) {
  var values = [];
  collection.map(function(val) {
    for (var key in val) {
      if (val.hasOwnProperty(pre) && Boolean(val[pre])) values.push(true);
      else values.push(false);
    }
    return val;
  });
  return values.reduce(function(p, c) {
    return c && p;
  });
}

truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex")
