'use strict';

const Node = require('./node');

class Stack{
  constructor(){
    this.top=null;
  }

  push(value){
    let node=new Node(value);
    try{
      if(this.isEmpty()){
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
  isEmpty(){
    if(this.top)
      return false;
    return true;
  }

}

class Queue{
  constructor(){
    this.front =null;
    this.tail=null;
  }

  enqueue (value){
    let node=new Node(value);
    try{
      if(this.isEmpty()){
        this.front=node;
        this.tail=node;
      }else{
        this.tail.next=node;
        this.tail=node;
      }
    }catch(err){
      throw new Error(`you must enter a value to add it`,err);
    }
  }

  dequeue(){
    try{
      if(!this.isEmpty()){
        let val=this.front.value;
        this.front=this.front.next;
        return val;
      }
    }catch(err){
      throw new Error(`it's an empty queue can't dequeue from it`);
    }
  }
  peek(){
    try{
      if(!this.isEmpty()){
        let val= this.front.value;
        return val;
      }
    }catch(err){
      throw new Error(`it's an empty queue!`);
    }
  }

  isEmpty(){
    if(this.front)return false;
    return true;
  }

}



module.exports={
  Stack :Stack,
  Queue :Queue
};
// module.exports={Stack,Queue};
