'use strict';

const Stack=require('./stack');

class PseudoQueue{

  constructor(){
    this.queueStack=new Stack();
    this.helperStack=new Stack();
  }

  enqueue(value){
    try{
      this.queueStack.push(value);
    }catch(e){
      throw new Error('you must enter a value !');
    }
  }

  dequeue(){
    try{

      while(this.queueStack.top){
        this.helperStack.push(this.queueStack.pop());
      }
      let val=this.helperStack.pop();
      while(this.helperStack.top){
        this.queueStack.push(this.helperStack.pop());
      }
      return val;
    }catch(e){
      throw new Error(`it's an empty stack!`,e);
    }
  }


}

module.exports=PseudoQueue;
