'use strict';

const LinkedList = require('../../401code-challenges/Data-Structures/linkedList/linked-list');

class HashTable{

  constructor (size) {
    this.size = size;
    this.table = new Array(size);
  }

  hash(key) {
    let hash = 0;
    hash = key.split('').reduce((result, n) => {
      return result + n.charCodeAt(0);
    }, 0) * 599 % this.size;
    return hash;
  }


  add(key, value) {
    let hash = this.hash(key);
    if (!this.table[hash]) {
      this.table[hash] = new LinkedList();
    }
    let keyValuePair = { [key]: value };
    this.table[hash].append(keyValuePair);
  }


  contains(key){
    let hash = this.hash(key);
    if(this.table[hash]){
      return true;
    }else{
      return false;
    }
  }


  get(key){
    const hash=this.hash(key);
    if(this.contains(key)){
      if(this.table[hash].head){
        let current=this.table[hash].head;
        while(current){
          if (Object.keys(current.value)[0] === key) {
            return current.value[key];
          } current = current.next;
        }
      }
    }
    // return `there is nothing to return in this key ${key}`;
    return null;
  }



}

module.exports=HashTable;
