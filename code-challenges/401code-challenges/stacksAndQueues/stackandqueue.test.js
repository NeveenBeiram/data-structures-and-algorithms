'use strict';

// const stackandqueue=require('./stacks-and-queues');

let { Stack } = require ('./stacks-and-queues.js');
let { Queue } = require ('./stacks-and-queues.js');

// const Stack=require('./stacks-and-queues').Stack;
// const Queue=require('./stacks-and-queues').Queue;


const { expect } = require('@jest/globals');

describe('test stack ',()=>{

  it('Can successfully push onto a stack',()=>{

    let stack=new Stack();
    let value=5;

    stack.push(value);

    expect(stack.top.value).toEqual(5);

  });

  it('Can successfully push multiple values onto a stack',()=>{
    let stack=new Stack();
    let v1=5;
    let v2=10;
    let v3=15;

    stack.push(v1);
    stack.push(v2);
    stack.push(v3);

    expect(stack.peek()).toEqual(15);

  });

  it('Can successfully pop off the stack',()=>{
    let stack=new Stack();
    let v1=5;
    let v2=6;

    stack.push(v1);
    stack.push(v2);

    stack.pop();
    expect(stack.top.value).toBe(v1);
  });


  it('Can successfully empty a stack after multiple pops',()=>{
    let stack=new Stack();
    let v1=5;
    let v2=10;

    stack.push(v1);
    stack.push(v2);

    stack.pop();
    stack.pop();

    expect(stack.top).toBeNull();
    expect(stack.isEmpty()).toBeTruthy();

  });

  it('Can successfully peek the next item on the stack',()=>{
    let stack=new Stack();
    let v1=5;
    let v2=10;

    stack.push(v1);
    stack.push(v2);

    stack.pop();

    expect(stack.peek()).toBe(5);
  });


  it('Can successfully instantiate an empty stack',()=>{
    let stack=new Stack();
    expect(stack.top).toBeNull();
  });

  it('Calling pop or peek on empty stack raises exception',()=>{
    let stack=new Stack();

    expect(stack.pop).toThrowError;
  });

});


describe('test queue ',()=>{


  it('Can successfully enqueue into a queue',()=>{
    let queue=new Queue();
    let v1=5;

    queue.enqueue(v1);

    expect(queue.front.value).toBe(5);


  });

  it('Can successfully enqueue multiple values into a queue',()=>{
    let queue=new Queue();
    let v1=5;
    let v2=10;

    queue.enqueue(v1);
    queue.enqueue(v2);

    expect(queue.peek()).toBe(v1);

  });

  it('Can successfully dequeue out of a queue the expected value',()=>{
    let queue=new Queue();
    let v1=5;
    let v2=10;

    queue.enqueue(v1);
    queue.enqueue(v2);

    // queue.dequeue();

    expect(queue.dequeue()).toBe(v1);
    expect(queue.peek()).toBe(v2);
  });

  it('Can successfully peek into a queue, seeing the expected value',()=>{
    let queue=new Queue();
    let v1=5;
    let v2=10;

    queue.enqueue(v1);
    queue.enqueue(v2);

    expect(queue.peek()).toBe(v1);

  });


  it('Can successfully empty a queue after multiple dequeues',()=>{
    let queue=new Queue();
    let v1=5;
    let v2=10;

    queue.enqueue(v1);
    queue.enqueue(v2);

    queue.dequeue();
    queue.dequeue();

    expect(queue.isEmpty()).toBeTruthy();

  });

  it('Can successfully instantiate an empty queue',()=>{
    let queue=new Queue();

    expect(queue.isEmpty()).toBeTruthy();
  });

  it('Calling dequeue or peek on empty queue raises exception',()=>{
    let queue=new Queue();

    expect(queue.dequeue()).toThrowError;
  });

});

