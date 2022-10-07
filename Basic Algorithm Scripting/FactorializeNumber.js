// Factorialize a number

// Using recursion
function factorialize(num) {
  if (num === 0) {
    return 1;
  }
  return num * factorialize(num - 1);
}

// Using tail-head recurssion to optimize memory usage
function factorialize(num, factorial = 1) {
  if (num === 0) return 1;
  return factorialize(num - 1, factorial * num);
}

// Using reduce
function factorialize(num) {
  return num < 0 ? 1 : new Array(num).fill(undefined).reduce((product, _, index) => product * (index + 1), 1);
}
