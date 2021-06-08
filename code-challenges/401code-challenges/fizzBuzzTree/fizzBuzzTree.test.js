const fizzBuzzTree= require ('./fizz-buzz-tree').FizzBuzzTree;
const KaryTree = require('./fizz-buzz-tree').KaryTree;
const Node = require('./fizz-buzz-tree').Node;

describe('K-ary tree test',()=>{
  let tree;
  beforeAll(()=>{
    tree=new KaryTree();

    let root1=new Node(5);
    tree.root=root1;
    root1.children[0]=new Node(1);
    root1.children[1]=new Node(5);
    root1.children[2]=new Node(10);

    //                 5
    //     1           5         10
    //17  13  19    3 8 16 5    9 15 30
    //                                5
    root1.children[0].children[0]=new Node(17);
    root1.children[0].children[1]=new Node(13);
    root1.children[0].children[2]=new Node(19);

    root1.children[1].children[0]=new Node(3);
    root1.children[1].children[1]=new Node(8);
    root1.children[1].children[2]=new Node(16);
    root1.children[1].children[3]=new Node(5);


    root1.children[2].children[0]=new Node(9);
    root1.children[2].children[1]=new Node(15);
    root1.children[2].children[2]=new Node(30);

    root1.children[2].children[2].children[0]=new Node(5);
  });
  it('breadth test',()=>{
    expect(tree.breadth()).toEqual([5,1,5,10,17,13,19,3,8,16,5,9,15,30,5]);
  });

  it('FizzBuzzTree func test',()=>{//Fizz3 Buzz5  FizzBuzz3&5
    expect(fizzBuzzTree(tree).breadth()).toEqual(['Buzz','1','Buzz','Buzz','17','13','19','Fizz','8','16','Buzz','Fizz','FizzBuzz','FizzBuzz','Buzz']);
  });
  it('fizzBuzzTree function',()=>{
    let tree = new KaryTree();
    expect(fizzBuzzTree(tree)).toEqual('empty tree');
  });
});
