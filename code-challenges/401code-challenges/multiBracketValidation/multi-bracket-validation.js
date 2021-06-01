'use strict';

const Stack=require('../stacksAndQueues/stacks-and-queues').Stack;

function multiBracketValidation(input){

  const stack =new Stack();

  if(input){

    for(let i=0; i<input.length ; i++){
      if(input[i]==='{' || input[i]==='(' || input[i]==='['){
        stack.push(input[i]);
      }else{
        if(input[i]==='}' || input[i]===')' || input[i]===']'){
          let b;
          if(input[i]==='}'){
            b='{';
          }if(input[i]===')'){
            b='(';
          }if(input[i]===']'){
            b='[';
          }
          if(b===stack.peek()){
            stack.pop();
          }
          else return false;

        }

      }
    }
    if(stack.isEmpty()) return true;
    else return false;
  }else{
    return 'you must enter input';
  }

}


module.exports=multiBracketValidation;
