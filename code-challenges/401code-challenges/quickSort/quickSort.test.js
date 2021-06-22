'use strict';

const quickSort =require ('./quickSort');
const { expect } = require('@jest/globals');

describe('quick sort test ',()=>{
  it('test',()=>{
    let a=[8,4,23,42,16,15];
    expect(quickSort(a,0,5)).toEqual([4,8,15,16,23,42]);
  });
  it(' Reverse-sorted',()=>{
    let a=[20,18,12,8,5,-2];
    expect(quickSort(a,0,5)).toEqual([-2,5,8,12,18,20]);
  });

  it('Few uniques',()=>{
    let a=[5,12,7,5,5,7];
    expect(quickSort(a,0,5)).toEqual([5,5,5,7,7,12]);
  });

  it('Nearly-sorted',()=>{
    let a=[2,3,5,7,13,11];
    expect(quickSort(a,0,5)).toEqual([2,3,5,7,11,13]);
  });

  it('edge case',()=>{
    expect(quickSort()).toEqual(`you must enter an array and right`);
  });
  it('edge case',()=>{
    let a=[1,-5,3];
    expect(quickSort(a)).toEqual(`you must enter an array and right`);
  });


});

