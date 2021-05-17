'use strict';

module.exports= function insertShiftArray(arr,value ){
  let newArr=[];
  if(arr.length){
    for(let i=0;i<arr.length;i++){
      let theIndex=Math.ceil(arr.length/2);
      // Math.ceil(7.004)//8
      //Math.ceil(4)//4
      //Math.ceil(-7.004)//-7
      if(i===theIndex){
        newArr.push(value);
        newArr.push(arr[i]);
      }else{
        newArr.push(arr[i]);
      }
    }
  }else{
    newArr.push(value);
    // return newArr;
  }
  return newArr;
};




// let a=[1,2,3,4];
// let b=[9,10,6,7,8];
// insertShiftArray(a,5);
// insertShiftArray(b,2);

// let test=[];
// insertShiftArray(test,6);

// module.exports={
//   insertShiftArray
// };
