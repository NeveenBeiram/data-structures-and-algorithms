
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
      // console.error(`error in insert method`,err);
      return err;
      // return new Error;
      // return err;

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


  append(value){
    try{
      let node = new Node(value);
      if (!this.head) {
        this.head = node;
      } else {
        let temp=this.head;
        while(temp.next){
          temp = temp.next;
        }
        temp.next=node;
      }

    }catch(err){
      console.error('error in append method',err);
    }

  }


  insertBefore(value, newVal){
    try {
      let current = this.head;
      let newNode = new Node (newVal);
      if(current.value===value){
        newNode.next=this.head;
        this.head=newNode;
      }else{
        while (current){

          if (current.next.value === value){
            newNode.next = current.next;
            current.next = newNode;
            return;
          }else {
            current = current.next;
          }
        }
      }
    }
    // throw new Error(`the value ${value} not exist in the likedList to add the newValue${newVal}before it `);
    catch (err) {
      throw new Error (`Error in insertBefore method => the value you want to insert before of it  not exists in the likedList`, err);
    }
  }







  insertAfter(value, newVal){
    try {
      let current = this.head;
      let newNode = new Node (newVal);
      while (current){
        if (current.value === value){
          newNode.next = current.next;
          current.next = newNode;
          return;
        }else {
          current = current.next;
        }
      }
      // throw new Error(`the value ${value} not exist in the likedList to add the newValue${newVal} after of it `);
    } catch (err) {
      throw new Error (`Error in insertAfter method -> the value ${value} not exist in the likedList to add the newValue${newVal} after it` , err);
    }
  }



}

module.exports = LinkedList;
