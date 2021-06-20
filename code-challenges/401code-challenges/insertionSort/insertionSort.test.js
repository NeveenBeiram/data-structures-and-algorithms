'use strict';
const insertionSort = require('./insertionSort');


describe('insertion sort test',()=>{

  it('test', () => {
    let array = [50, 15, 10, 6, 4, -3];
    expect(insertionSort(array)).toEqual([-3, 4, 6, 10, 15, 50]);
  });


  it('test2', () => {
    let array = [8,4,23,42,16,15] ;
    expect(insertionSort(array)).toEqual([4,8,15,16,23,42]);
  });

  it('Reverse-sorted', () => {
    let array = [20,18,12,8,5,-2] ;
    expect(insertionSort(array)).toEqual([-2,5,8,12,18,20]);
  });

  it('Few uniques', () => {
    let array = [5,12,7,5,5,7] ;
    expect(insertionSort(array)).toEqual([5,5,5,7,7,12]);
  });


  it('Nearly-sorted', () => {
    let array = [2,3,5,7,13,11] ;
    expect(insertionSort(array)).toEqual([2,3,5,7,11,13]);
  });

  it('edge case1', () => {
    expect(insertionSort()).toEqual(`you must enter an array`);
  });
  it('edge case2', () => {
    expect(insertionSort(9)).toEqual(`you must enter an array`);
  });
  it('edge case3', () => {
    expect(insertionSort('5')).toEqual(`you must enter an array`);
  });


});
