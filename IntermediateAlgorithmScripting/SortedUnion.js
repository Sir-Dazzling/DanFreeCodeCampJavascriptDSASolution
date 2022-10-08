// Using forEach
function uniteUnique(...arr) {
  const updatedArr = [];

  arr.forEach((arr1) => {
    arr1.forEach((element) => {
      if (!updatedArr.includes(element)) {
        updatedArr.push(element);
      }
    });
  });
  return updatedArr;
}

// Using Set and flat
function uniteUnique(...arr) {
  return [...new Set(arr.flat())];
}
