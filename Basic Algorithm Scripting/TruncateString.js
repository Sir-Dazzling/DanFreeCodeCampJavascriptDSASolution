// Truncate a string (first argument)
// if it is longer than the given maximum string length (second argument).
// Return the truncated string with a ... ending.

// Using slice
function truncateString(str, num) {
  if (str.length > num) {
    return str.slice(0, num) + "...";
  } else {
    return str;
  }
}

// Cleaner approach
function truncateString(str, num) {
  return str.length > num ? str.slice(0, num) + "..." : str;
}
