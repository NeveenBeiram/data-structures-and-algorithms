'use strict';

const rA = require('./array-reverse');



describe('array reverse', () => {
  it ('return a reversed array', ()=>{
    // arrange

    let numbers1 = [1, 2, 3, 4, 5, 6];
    let numbers2 = [10, 5, 100, 2, 19, -9, 80, -12];

    // act

    // assert
    expect(rA(numbers1)).toEqual([6, 5, 4, 3, 2, 1]);
    expect(rA(numbers2)).toEqual([-12,80,-9,19,2,100,5,10]);
  });

});
