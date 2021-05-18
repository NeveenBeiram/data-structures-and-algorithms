'use strict';

let binarySearch=require('./array-binary-search');



describe('testing array binary search ',()=>{
  it('return the index of the value that we search about it,if it in the array ',()=>{
    expect(binarySearch([1,2,3,4,5,6],4)).toEqual(3);
    expect(binarySearch([2,7,20,23,30],21)).toEqual(-1);
    expect(binarySearch([], 10)).toEqual(-1);
  });
});
