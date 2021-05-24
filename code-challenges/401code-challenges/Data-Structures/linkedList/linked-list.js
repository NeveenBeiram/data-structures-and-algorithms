
'use strict';
const Node = require('./node.js');

class LinkedList {
  constructor() {
    this.head = null;
    this.size=0;
  }

  insert (value) {
    try{

      let temp = new Node(value);
      if (!this.head) {
        this.head = temp;
        this.size++;
      } else {
        temp.next = this.head;
        this.head = temp;
        this.size++;
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
        this.size++;
      } else {
        let temp=this.head;
        while(temp.next){
          temp = temp.next;
        }
        temp.next=node;
        this.size++;
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
        this.size++;
      }else{
        while (current){

          if (current.next.value === value){
            newNode.next = current.next;
            current.next = newNode;
            this.size++;
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
          this.size++;
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


  kthFromEnd(k){

    try{

      let temp=this.head;
      let count=this.size-1;
      while(temp){
        if(k===count){
          return temp.value;
        }
        count--;
        temp=temp.next;
      }
    }catch(err){
      throw new Error (`Error in kthFromEnd method -> the k not in the linkedList` , err);
    }
  }

}



module.exports = LinkedList;
