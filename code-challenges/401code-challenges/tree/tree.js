'use strict';
const Queue = require('../stacksAndQueues/stacks-and-queues').Queue;

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {

  constructor() {
    this.root = null;
  }


  preOrder() {
    let pre = [];

    let traverse = (node) => {
      pre.push(node.value);
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    };
    traverse(this.root);
    return pre;

  }


  inOrder() {
    let inO = [];

    let traverse = (node) => {
      if (node.left) traverse(node.left);
      inO.push(node.value);
      if (node.right) traverse(node.right);
    };
    traverse(this.root);
    return inO;

  }


  postOrder() {
    let post = [];


    let traverse = (node) => {
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
      post.push(node.value);
    };
    traverse(this.root);
    return post;
  }

  findMaximumValue() {

    if (this.root) {
      let max = this.root.value;
      let maximum = (node) => {
        if (node.value > max) {
          max = node.value;
        } if (node.left) {
          maximum(node.left);
        } if (node.right) {
          maximum(node.right);
        }
      };
      maximum(this.root);
      return max;
    } else return `it's an empty tree!`;


  }

  breadthFirst() {

    if(this.root ===null){
      return `it's an empty tree`;
    }
    let output = [];
    let queue = new Queue();

    queue.enqueue(this.root);

    while (queue.peek()) {
      let front = queue.dequeue();
      output.push(front.value);
      if (front.left)
        queue.enqueue(front.left);
      if (front.right)
        queue.enqueue(front.right);
    }
    return output;
  }


}



class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  add(value) {
    if (typeof (value) !== typeof (2)) {
      return `you can just add numbers to the BST !`;
    }
    let node = new Node(value);
    if (this.root === null) {
      this.root = node;
    }

    else {
      let position = (currentNode) => {
        if (value >= currentNode.value) {
          if (currentNode.right === null) {
            currentNode.right = node;
            return;
          } else {
            return position(currentNode.right);
          }
        } else if (value < currentNode.value) {
          if (currentNode.left === null) {
            currentNode.left = node;
            return;
          } else {
            return position(currentNode.left);
          }
        }

      }; return position(this.root);
    }


  }


  contains(value) {
    if (typeof (value) !== typeof (2)) {
      return `it's not number and the BST contains numbers !`;
    }
    if (this.root === null) { return `it's an empty bst!`; }
    let current = this.root;
    while (current) {
      if (current.value === value) {
        return true;
      }
      if (value > current.value) {
        current = current.right;
      } else if (value < current.value) {
        current = current.left;
      }
    }
    return false;
  }

}

module.exports = {
  Node,
  BinaryTree,
  BinarySearchTree
};
