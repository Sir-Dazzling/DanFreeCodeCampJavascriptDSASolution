/*
We'll pass you an array of two numbers. 
Return the sum of those two numbers plus the sum of all the numbers between them. 
The lowest number will not always come first.

For example, sumAll([4,1]) should return 10 because sum of all the numbers 
between 1 and 4 (both inclusive) is 10.

*/

// Using for loop and math functions
function sumAll(arr) {
  let computedSum = 0;
  let max = Math.max(...arr);
  let min = Math.min(...arr);

  for (let i = min; i <= max; i++) {
    computedSum += i;
  }
  return computedSum;
}

// Cleaner approach
function sumAll(arr) {
  let computedSum = 0;
  for (let i = Math.min(...arr); i <= Math.max(...arr); i++) {
    computedSum += i;
  }
  return computedSum;
}

// Wirh Recurssion
function sumAll(arr) {
  const [first, last] = [...arr].sort((a, b) => a - b);
  return first !== last ? first + sumAll([first + 1, last]) : first;
}
