'use strict';
const Node = require('./node.js');


class Stack{
  constructor(){
    this.top=null;
  }

  push(value){
    let node=new Node(value);
    try{
      if(!this.top){
        this.top=node;
      }else{
        node.next=this.top;
        this.top=node;
      }
    }catch(err){
      throw new Error('you must enter a value to add it',err);
    }
  }

  pop(){
    try{
      if(this.top){
        let val=this.top.value;
        this.top=this.top.next;
        return val;
      }

    }catch(err){
      throw new Error(`it is an empty stack you can't pop from it `,err);
    }

  }

  peek(){
    if(this.top){
      return this.top.value;
    }else{
      throw new Error(`it's an empty stack`);
    }

  }

}

module.exports=Stack;
