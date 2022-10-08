/*
Return an English translated sentence of the passed binary string.

The binary string will be space separated.

*/

function binaryAgent(str) {
  return String.fromCharCode(...str.split(" ").map((char) => parseInt(char, 2)));
}
