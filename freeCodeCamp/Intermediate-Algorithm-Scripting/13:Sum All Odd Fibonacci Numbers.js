/* Challenge #13: Sum All Odd Fibonacci Numbers
Code by Perrin Clark
BlackGuyCoding@gmail.com
https://www.freecodecamp.com/blackguycoding */

function generateFibs(limit) {
  var fibs = [0, 1];
  for (var i = 2; fibs[i-1] < limit; i++) {
    fibs[i] = fibs[i-2] + fibs[i-1];
  }
  console.log(fibs);
  if (fibs[fibs.length -1 ] > limit) fibs.pop();
  return fibs;
}

function sumFibs(num) {
  var arr = generateFibs(num);
  arr = arr.filter(function(val) {
    return val % 2 == 1;
  });
  arr = arr.reduce(function(prev, current) {
    return prev + current;
  });
  return arr;
}

sumFibs(4);
