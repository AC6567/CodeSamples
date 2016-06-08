/* Challenge #8: Repeat a string repeat a string
Code by Perrin Clark
BlackGuyCoding@gmail.com
https://www.freecodecamp.com/blackguycoding */

function truncateString(str, num) {
  // Clear out that junk in your trunk
  if (num >= str.length) return str;
  var result = '';
  if (num > 3) num -= 3;
  result = str.slice(0, num) + '...';
  return result;
}

truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length + 2);
