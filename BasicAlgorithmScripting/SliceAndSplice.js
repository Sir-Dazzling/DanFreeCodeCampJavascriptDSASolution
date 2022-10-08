/* 
You are given two arrays and an index.

Copy each element of the first array into the second array, in order.

Begin inserting elements at index n of the second array.

Return the resulting array. 
The input arrays should remain the same after the function runs.
*/

function frankenSplice(arr1, arr2, n) {
  let updatedArr = [...arr2];
  updatedArr.splice(n, 0, ...arr1);
  return updatedArr;
}

// Cleaner approach
function frankenSplice(arr1, arr2, n) {
  return [...arr2.slice(0, n), ...arr1, ...arr2.slice(n)];
}

// Explantion
/*
    Use spread operators with slice to return an array.
    First spread operator uses the slice method to only give 
    the portion of arr2 from index 0 to ‘n.’
    Second spread operator passes all elements from arr1.
    Third spread operator uses the slice method 
    to return all elements starting at index ‘n’ to the end of the array.
*/
