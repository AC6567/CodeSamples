/* Challenge #3: Check for Palindromes
Code by Perrin Clark
BlackGuyCoding@gmail.com
https://www.freecodecamp.com/blackguycoding */

function palindrome(str) {
  var normalizedStr = str.replace(/[\W_]/g, '').toLowerCase();
  var reverseStr = normalizedStr.split('').reverse().join('');
  return normalizedStr === reverseStr;
}

palindrome('eye');
