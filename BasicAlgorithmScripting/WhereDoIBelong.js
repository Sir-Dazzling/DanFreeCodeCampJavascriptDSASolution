function getIndexToIns(arr, num) {
  return arr.filter((val) => num > val).length;
}

/* 
    Explanation
    Count the number of entries that are smaller than the new value num
    The new value would be inserted after these values
*/
