'use strict';

const HashTable=require('../hashTable/hashTable');

// const BT =require('../tree/tree').BinaryTree;


function hashMapTreeIntersection(tree1,tree2){
  if(tree1.root===null || tree2.root===null){
    return `tree is empty!`;
  }
  let arr=[];
  const newHashTable = new HashTable(3533);
  let arr1=tree1.preOrder();
  let arr2=tree2.preOrder();

  for (let i = 0; i <arr1.length; i++) {
    let key = arr1[i].toString();
    let val = arr1[i];
    if (!newHashTable.contains(key)){
      newHashTable.add(key,val);
    }
  }
  for (let i = 0; i <arr2.length; i++) {
    let key = arr2[i].toString();
    let val2 = arr2[i];
    if(newHashTable.contains(key)){
      arr.push(val2);
    }
  }
  if(arr.length>0){
    return arr;
  }else{
    return 'no match value';
  }
}

module.exports=hashMapTreeIntersection;



