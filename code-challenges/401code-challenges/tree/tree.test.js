'use strict';

const Node = require('./tree').Node;
const BinaryTree = require('./tree').BinaryTree;
const BinarySearchTree = require('./tree').BinarySearchTree;
const { expect } = require('@jest/globals');

let tree=null;
describe('binary tree test',()=>{


  beforeAll(()=>{
    let one=new Node(1);
    let two=new Node(2);
    let three =new Node(3);
    let four=new Node(4);
    let five=new Node(5);
    let six=new Node(6);
    let seven=new Node(7);

    one.left=two;
    two.right=three;
    three.left=four;
    four.left=five;
    one.right=six;
    six.right=seven;
    //         1
    //    2          6
    //        3          7
    //      4
    //   5
    tree=new BinaryTree();
    tree.root=one;
  });

  it('pre traverse',()=>{
    let expected=[1,2,3,4,5,6,7];
    let preOrderResult=tree.preOrder();

    expect(preOrderResult).toEqual(expected);
  });

  it('in traverse',()=>{
    let expected=[2,5,4,3,1,6,7];

    let inOrderResult=tree.inOrder();

    expect(inOrderResult).toEqual(expected);
  });

  it('post traverse',()=>{
    let expected=[5,4,3,2,7,6,1];
    let postResult=tree.postOrder();
    expect(postResult).toEqual(expected);
  });



  it('findMaximumValue test',()=>{
    let one=new Node(1);
    let two=new Node(2);
    let three =new Node(3);
    let four=new Node(4);
    let five=new Node(5);
    let six=new Node(6);
    let seven=new Node(7);

    one.left=two;
    two.right=three;
    three.left=four;
    four.left=five;
    one.right=six;
    six.right=seven;
    //         1
    //    2          6
    //        3          7
    //      4
    //   5
    tree=new BinaryTree();
    tree.root=one;
    expect(tree.findMaximumValue()).toEqual(7);
  });
  it('find maximum empty tree',()=>{
    tree=new BinaryTree();
    expect(tree.findMaximumValue()).toBe(`it's an empty tree!`);
  });


});

describe('binary search tree test',()=>{


  it('add',()=>{
    let bst =new BinarySearchTree();

    bst.add(5);
    bst.add(1);
    bst.add(6);
    bst.add(7);
    bst.add(3);
    bst.add(4);
    bst.add(2);

    expect(bst.root.value).toEqual(5);
    expect(bst.root.left.value).toEqual(1);
    expect(bst.root.right.value).toEqual(6);
    expect(bst.root.right.right.value).toEqual(7);
    expect(bst.root.left.right.value).toEqual(3);
    expect(bst.root.left.right.right.value).toEqual(4);
    expect(bst.root.left.right.left.value).toEqual(2);



  });

  it('contains',()=>{

    let bst =new BinarySearchTree();

    bst.add(5);
    bst.add(1);
    bst.add(6);
    bst.add(7);
    bst.add(3);
    bst.add(4);
    bst.add(2);

    expect(bst.contains(5)).toBeTruthy();
    expect(bst.contains(4)).toBeTruthy();

    expect(bst.contains(9)).toBeFalsy();


  });

  it('edge case add value not number',()=>{
    let bst =new BinarySearchTree();
    bst.add(5);
    bst.add(10);

    expect(bst.add('n')).toEqual(`you can just add numbers to the BST !`);
  });



  it('edge case in contains method value not number',()=>{
    let bst =new BinarySearchTree();
    bst.add(5);
    bst.add(10);

    expect(bst.contains('n')).toEqual(`it's not number and the BST contains numbers !`);
  });

  it('Can successfully instantiate an empty tree',()=>{
    let bt=new BinaryTree();

    expect(bt.root).toBeNull();

    let bst =new BinarySearchTree();
    expect(bst.root).toBeNull();
  });

  it('Can successfully instantiate a tree with a single root node',()=>{
    let bt=new BinaryTree();
    bt.root=new Node(5);

    expect(bt.root.value).toEqual(5);

    let bst=new BinaryTree();
    bst.root=new Node(5);

    expect(bst.root.value).toEqual(5);

  });


});

