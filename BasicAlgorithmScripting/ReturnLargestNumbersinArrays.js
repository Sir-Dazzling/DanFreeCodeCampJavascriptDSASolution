// Returning largest numbers in subarrays

// Using reduce
function largestOfFour(arr) {
  return arr.map((arr2) => arr2.reduce((prev, current) => Math.max(prev, current)));
}

// // Using Math.max with array
function largestOfFour(arr) {
  return arr.map((innerArr) => Math.max(...innerArr));
}
