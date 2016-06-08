/* Challenge #1: Sum All Numbers in a Range
Code by Perrin Clark
BlackGuyCoding@gmail.com
https://www.freecodecamp.com/blackguycoding */

function sumAll(arr) {
  let smallest = Math.min(arr[0], arr[1]);
  let largest = Math.max(arr[0], arr[1]);
  let sum = 0;

  for (let i = smallest; i <= largest; i++) {
    sum += i;
  }

  return sum;
}

sumAll([1, 4]);
