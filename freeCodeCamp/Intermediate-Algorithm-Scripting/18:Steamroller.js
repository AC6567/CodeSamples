/* Challenge #18: Steamroller
Code by Perrin Clark
BlackGuyCoding@gmail.com
https://www.freecodecamp.com/blackguycoding */

function steamrollArray(arr) {
  var array = arr.join().split(",");
  array = array.map(function(val) {
    if (val === "") return [];
    else if (val === "[object Object]") return {};

    if (isNaN(val)) return  val;
    return parseInt(val);
  });
  return array.filter(function(val) {
    console.log(val);
    if (Array.isArray(val)) return false;
    return true;
  });

}

steamrollArray([1, [], [3, [[4]]]]);
