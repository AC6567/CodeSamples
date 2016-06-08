/* Challenge #21: Arguments Optional
Code by Perrin Clark
BlackGuyCoding@gmail.com
https://www.freecodecamp.com/blackguycoding */

function addTogether() {
  var args = (arguments.length === 1 ? [arguments[0]] : Array.apply(null, arguments));
  if (args.length === 2 && typeof args[1] === "number") return args[0] + args[1];

  if (args.length === 1 && !isNaN(args[0])) return function(a) {
    if (typeof a !== "number") return undefined;
    return parseInt(args[0]) + parseInt(a);
  };
  return undefined;
}

addTogether(2)([3]);
