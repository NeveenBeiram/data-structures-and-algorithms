'use strict';

const mergeSort=require('./mergeSort');
const { expect } = require('@jest/globals');

describe('mergeSort test',()=>{

  it('test',()=>{
    let arr=[1,-5,3,20,-10];
    expect(mergeSort(arr)).toEqual([-10,-5,1,3,20]);
  });

  it('test2',()=>{
    let arr=[60,10,5,80];
    expect(mergeSort(arr)).toEqual([5,10,60,80]);
  });
  it('test3',()=>{
    let arr=[8,4,23,42,16,15];
    expect(mergeSort(arr)).toEqual([4,8,15,16,23,42]);
  });
  it('test4 Reverse-sorted',()=>{
    let arr= [20,18,12,8,5,-2];
    expect(mergeSort(arr)).toEqual([-2,5,8,12,18,20]);
  });
  it('test5 Few uniques',()=>{
    let arr=[5,12,7,5,5,7];
    expect(mergeSort(arr)).toEqual([5,5,5,7,7,12]);
  });
  it('test6 Nearly-sorted',()=>{
    let arr=[2,3,5,7,13,11];
    expect(mergeSort(arr)).toEqual([2,3,5,7,11,13]);
  });
  it('test with str',()=>{
    let a=['a','f','','d'];
    expect(mergeSort(a)).toEqual(['','a','d','f']);
  });
  it('test with empty element',()=>{
    let a=['a','f','d'];
    expect(mergeSort(a)).toEqual(['a','d','f']);
  });
  it('test with not arr',()=>{
    let a='ab';
    expect(mergeSort(a)).toEqual(`you should enter an array`);
  });
  it('test with no arrg',()=>{
    expect(mergeSort()).toEqual(`you should enter an array`);
  });
});
