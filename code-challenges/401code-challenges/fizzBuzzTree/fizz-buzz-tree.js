'use strict';

const Queue = require('../stacksAndQueues/stacks-and-queues').Queue;

class Node{
  constructor(value){
    this.value=value;
    this.children=[];
  }
}

class KaryTree {
  constructor(){
    this.root= null;
  }

  breadth() {
    let result = [];
    let current;
    let queue = new Queue();
    if (this.root) {
      current = this.root;
      queue.enqueue(current);
    } else return `it's an empty tree`;

    while (!queue.isEmpty()) {
      current = queue.dequeue();
      result.push(current.value);
      for (let i = 0; i < current.children.length; i++)
        if (current.children[i]) {
          queue.enqueue(current.children[i]);
        }
    }
    return result;

  }
}

function FizzBuzzTree(tree){
  if(tree.root===null) return 'empty tree';
  let fizzBuzzTree = tree;
  let traverse = (node) => {
    if (node.value%5===0 && node.value%3===0) node.value='FizzBuzz';
    else if(node.value%5===0) node.value='Buzz';
    else if(node.value%3===0) node.value='Fizz';
    else node.value= `${node.value}`;

    for (let i = 0; i < node.children.length; i++) {
      traverse(node.children[i]);
    }
  };
  traverse(fizzBuzzTree.root);
  return fizzBuzzTree;
}

module.exports = {
  FizzBuzzTree,
  KaryTree,
  Node,
};
