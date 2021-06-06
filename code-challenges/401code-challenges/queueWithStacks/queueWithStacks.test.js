'use strict';

const PseudoQueue=require('./queue-with-stacks');

const { expect } = require('@jest/globals');

describe('test queue with stacks',()=>{

  it('Happy Path',()=>{
    let pseudoQueue=new PseudoQueue();
    pseudoQueue.enqueue(5);
    pseudoQueue.enqueue(10);
    pseudoQueue.enqueue(15);



    expect(pseudoQueue.dequeue()).toEqual(5);
  });

  it('Edge Case',()=>{
    let pseudoQueue=new PseudoQueue();

    expect(pseudoQueue.enqueue()).toThrowError;

  });

  it('Expected failure',()=>{
    let pseudoQueue=new PseudoQueue();
    expect(pseudoQueue.dequeue()).toThrowError;

  });

});
