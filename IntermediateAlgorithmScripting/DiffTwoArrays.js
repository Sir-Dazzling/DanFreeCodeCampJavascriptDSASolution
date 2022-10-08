/* 
Compare two arrays and return a new array with any items only 
found in one of the two given arrays, but not both. 
In other words, return the symmetric difference of the two arrays.

Note: You can return the array with its elements in any order.
*/

// With concat and filter
function diffArray(arr1, arr2) {
  return arr1.concat(arr2).filter((num) => !arr1.includes(num) || !arr2.includes(num));
}
