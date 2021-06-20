'use strict';


function insertionSort(array){
  if(array){
    if(typeof array ===typeof 9){
      return `you must enter an array`;
    }
    if(typeof array===typeof '9'){
      return `you must enter an array`;
    }

    for (let i = 1; i < array.length; i++) {
      let temp = array[i];
      let j = i-1;
      while ((j >=0) && (temp < array[j])) {
        array[j+1] = array[j];
        j--;
      }
      array[j+1] = temp;
    }
    return array;
  }else return `you must enter an array`;
}

module.exports=insertionSort;
