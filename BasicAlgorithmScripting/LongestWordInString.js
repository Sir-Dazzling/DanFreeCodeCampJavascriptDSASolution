// Find the longest word in a provided sentence

// Using For loop
function findLongestWordLength(str) {
  let strArr = str.split(" ");
  let maxLength = 0;

  for (let i = 0; i < strArr.length; i++) {
    if (strArr[i].length > maxLength) {
      maxLength = strArr[i].length;
    }
  }
  return maxLength;
}

// Using reduce
function findLongestWordLength(s) {
  return s.split(" ").reduce((prev, current) => Math.max(prev, current.length), 0);
}

// Using map
function findLongestWordLength(s) {
  return Math.max(...s.split(" ").map((word) => word.length));
}
