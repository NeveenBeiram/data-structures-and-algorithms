'use strict';

let insertShiftArray=require('./array-shift.js');



describe('testing the insert shift array function',()=>{
  it('it should return array with the value in the middle of it',()=>{
    expect(insertShiftArray([30,8,17,55], 12)).toEqual([30,8,12,17,55]);
    expect(insertShiftArray([2,7,20,23,30], 21)).toEqual([2,7,20,21,23,30]);
    expect(insertShiftArray([], 10)).toEqual([10]);
  });
  it('test empty arr',()=>{
    expect(insertShiftArray([],10)).toEqual([10]);
  });
  it('test different data type value',()=>{
    expect(insertShiftArray([5,10],'s')).toEqual([5,'s',10]);
  });

});

