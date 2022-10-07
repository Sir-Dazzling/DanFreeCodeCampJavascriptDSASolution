// FInd the longest word in the provided sentence

// Solution one
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
  return s.split(" ").reduce(function (longest, word) {
    return Math.max(longest, word.length);
  }, 0);
}

// Using map
function findLongestWordLength(str) {
  return Math.max(...str.split(" ").map((word) => word.length));
}
