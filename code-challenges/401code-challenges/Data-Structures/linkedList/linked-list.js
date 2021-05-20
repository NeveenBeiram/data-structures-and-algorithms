
'use strict';
const Node = require('./node.js');

class LinkedList {
  constructor() {
    this.head = null;
  }

  insert (value) {
    try{

      let temp = new Node(value);
      if (!this.head) {
        this.head = temp;
      } else {
        temp.next = this.head;
        this.head = temp;
      }
    }catch(err){
      console.error(`error in insert method`,err);
    //   return err;
    }
  }

  includes(val){
    try{
      if(!this.head){
        return false;
      }else{
        let temp=this.head;
        while (temp.next) {
          if(temp.value===val){
            return true;
          }temp=temp.next;
        //   else{
        //     temp=temp.next;
        //   }
        }
        return false;
      }
    }
    catch(err){
      console.error(`error in includes method`,err);
    }
  }

  toString(){
    try{

      let string='';
      if(!this.head){
        string='NULL';
        return string;
      }else{
        let temp=this.head;
        while (temp){
          string +=`{ ${temp.value} } -> `;
          temp=temp.next;
        }
        string+=`NULL`;
      }
      return string;
      // "{ a } -> { b } -> { c } -> NULL"
    }catch(err){
      console.error(`error in toString method`,err);
    }
  }



}

module.exports = LinkedList;
