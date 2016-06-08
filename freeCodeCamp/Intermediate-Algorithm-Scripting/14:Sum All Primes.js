/* Challenge #14: Sum All Primes
Code by Perrin Clark
BlackGuyCoding@gmail.com
https://www.freecodecamp.com/blackguycoding */

function isPrime(n) {
  for ( var i = 2; i <= Math.sqrt(n); i++ ) {
      if ( n % i === 0 ) {
          return false;
      }
  }
  if (n === 1 || n === 0) return false;
  return true;
}

function generatePrimes(limit) {
  var primes = [2];
  for (var i = 3; i <= limit; i++) {
    if (isPrime(i)) primes.push(i);
  }
  if (primes[primes.length-1] > limit) prmies.pop();
  return primes;
}

function sumPrimes(num) {
  return generatePrimes(num).reduce(function(a, b) {
    return a + b;
  });
}


sumPrimes(997);
