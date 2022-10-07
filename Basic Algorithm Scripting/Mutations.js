// Procedural
function mutation(arr) {
  let test = arr[1].toLowerCase();
  let target = arr[0].toLowerCase();
  for (let i = 0; i < test.length; i++) {
    if (target.indexOf(test[i]) === -1) return false;
  }
  return true;
}

// using every
function mutation(arr) {
  return arr[1]
    .toLowerCase()
    .split("")
    .every((letter) => arr[0].toLowerCase().indexOf(letter) !== -1);
}
