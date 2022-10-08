// Using Divisibility Checking
function sumPrimes(num) {
  function isPrime(num) {
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i == 0) return false;
    }
    return true;
  }

  // Check all numbers for primality
  let sum = 0;
  for (let i = 2; i <= num; i++) {
    if (isPrime(i)) sum += i;
  }
  return sum;
}

/* 
    Explanation
    We loop over all values in our range, adding them to the sum if they are prime.
Our primality checking function returns false if the target number is divisible by any number in between 2 and the square root of the target number. We only need to check up to the square root because the square root of a number is the largest possible unique divisor.
*/

// Using reduce
