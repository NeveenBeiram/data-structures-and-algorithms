'use strict';

const Node = require('../tree/tree').Node;

const BT = require('../tree/tree').BinaryTree;

const hashMapTreeIntersection=require('./hashmap-tree-intersection');


describe('hash map treeIntersection Test', () => {
  let tree1,tree2, tree3;
  beforeAll(()=>{
    tree1 = new BT();
    tree2 = new BT();
    tree3 = new BT();

    //tree1
    const one1 = new Node(150);
    tree1.root=one1;
    let m=new Node(80);
    one1.right=m;
    let g=new Node(60);
    m.left=g;
    let h=new Node(90);
    g.left=h;

    //tree2
    const one2 = new Node(150);
    tree2.root=one2;
    let t2=new Node(30);
    one2.left=t2;
    let th2=new Node(60);
    let f2=new Node(80);
    one2.right=th2;
    th2.left=f2;
    let l=new Node(10);
    f2.left=l;


    //tree3
    let one3=new Node(10);
    tree3.root=one3;
    let t=new Node(2);
    let th=new Node(3);
    one3.right=t;
    one3.left=th;
    let f=new Node(7);
    th.right=f;

  });
  it('can return a set of values found in both trees', () => {
    expect(hashMapTreeIntersection(tree1, tree2)).toEqual([150,60,80]);
  });
  it('can return a set of values found in both trees', () => {
    expect(hashMapTreeIntersection(tree2, tree3)).toEqual([10]);
  });
  it('return an exception if the trees values are unique', () => {
    expect(hashMapTreeIntersection(tree1, tree3)).toEqual('no match value');
  });
});


