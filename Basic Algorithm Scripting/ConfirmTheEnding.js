// COnfirm the ending of a string with params

// Using slice
function confirmEnding(str, target) {
  return str.slice(str.length - target.length) === target;
}

// Using Regex
function confirmEnding(str, target) {
  let myRegex = new RegExp(`${target}$`);
  return myRegex.test(str);
}

// If a negative number is provided as the first parameter to slice(),
// the offset is taken backwards from the end of the string.
function confirmEnding(str, target) {
  return str.slice(-target.length) === target;
}
