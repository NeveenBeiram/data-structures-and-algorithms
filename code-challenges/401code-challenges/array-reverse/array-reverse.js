'use strict';

let arr=[2,6,9];

function rA(array){
  let arr2=[];

  /*
  second way:
  for (let i=0 ;i<=array.length+1 ;i++){
     arr2.push(array.pop());
*/

  for(let i=array.length-1;i>=0;i--){
    arr2.push(array[i]);
  }

  return(arr2);
}


console.log(rA(arr));

console.log('---');
let array2= [5,20,25];
console.log(rA ( array2 ));

module.exports=rA;
