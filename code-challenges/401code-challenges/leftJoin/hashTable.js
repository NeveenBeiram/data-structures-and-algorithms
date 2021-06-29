'use strict';

const LinkedList = require('../Data-Structures/linkedList/linked-list');

class HashTable {
  constructor(size) {
    this.table = new Array(size);
  }

  hash(key) {
    const sum = key.split('').reduce((acc, val) => {
      return acc * val.charCodeAt(0);
    }, 1);
    return (sum * 71) % this.table.length;
  }

  add(key, value) {
    const bucket = this.hash(key);
    if (!this.table[bucket]) {
      this.table[bucket] = new LinkedList();
    }
    this.table[bucket].append({ [key]: value });
  }

  contains(key) {
    const bucket = this.hash(key);
    if(this.table[bucket]){
      return true;
    }else return false;
  }

  get(key) {
    const bucket = this.hash(key);
    if (this.contains(key)) {
      if (this.table[bucket].head) {
        let current = this.table[bucket].head;
        if (Object.keys(current.value)[0] === key) return current.value[key];
        while (current.next) {
          current = current.next;
          if (Object.keys(current.value)[0] === key) return current.value[key];
        }
      }
    }
    return null;
  }
}

module.exports = HashTable;
