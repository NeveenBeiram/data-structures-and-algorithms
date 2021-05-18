'use strict';
/**
 * Take an array and number
 *  and return the index of the number if it in the array
 *  or -1 if it is not in the array
 * @param {array} sortedArray array of numbers
 * @param {number} number the number that we want to search
 * @returns {number}
 */

module.exports=function binarySearch(sortedArray, number){
  let start = 0;
  let end = sortedArray.length - 1;

  while (start <= end) {
    let middle = Math.floor((start + end) / 2);

    if (sortedArray[middle] === number) {
      // here we found the number
      return middle;
    } else if (sortedArray[middle] < number) {
      // here continue searching to the right of the array
      start = middle + 1;
    } else {
      // here continue searching to the left of the array
      end = middle - 1;
    }
  }
  // here the number wasn't found
  return -1;
};
