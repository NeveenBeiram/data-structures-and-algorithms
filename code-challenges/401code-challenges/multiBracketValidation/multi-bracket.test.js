'use strict';

const multiBracketValidation=require('./multi-bracket-validation');
const { expect } = require('@jest/globals');


describe('multi-bracket-validation test',()=>{

  it('“Happy Path” - Expected outcome (true)',()=>{

    expect(multiBracketValidation('{}')).toBeTruthy();
    expect(multiBracketValidation('{}(){}')).toBeTruthy();
    expect(multiBracketValidation('()[[Extra Characters]]')).toBeTruthy();
    expect(multiBracketValidation('(){}[[]]')).toBeTruthy();
    expect(multiBracketValidation('{}{Code}[Fellows](())')).toBeTruthy();

  });

  it('Expected failure  (false)',()=>{
    expect(multiBracketValidation('[({}]')).toBeFalsy();
    expect(multiBracketValidation('(](')).toBeFalsy();

  });

  it('Edge Case (if applicable/obvious)',()=>{


    expect(multiBracketValidation()).toBe('you must enter input');
  });



});
