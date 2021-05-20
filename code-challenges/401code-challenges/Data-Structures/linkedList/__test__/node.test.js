'use strict';

let Node=require('../node');

describe('testing Node ',()=>{
  it('test the constructor',()=>{
    let value=10;
    let node =new Node(value);
    expect(node.value).toEqual(value);
    expect(node.next).toBeNull();
  });
});
