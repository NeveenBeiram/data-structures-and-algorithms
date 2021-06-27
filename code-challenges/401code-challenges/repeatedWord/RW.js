'use strict';

const HashTable=require('../hashTable/hashTable');

function repeatedWord(str){
  if(typeof str !=='string'){
    return 'this function work just with string only';
  }//edgeCase
  const words = str.match(/\w+/g);//words in array
  const newHashTable = new HashTable(599);
  for (let i = 0; i < words.length; i++) {
    let word = words[i].toLowerCase();//will use it as key
    if (newHashTable.contains(word)){//if the key exists return the data
      if(newHashTable.get(word)===word) return newHashTable.get(word);
    }
    newHashTable.add(word,word);//if not add it to the table
  }
  return 'No Repeated Word';//if no key repeated
}

module.exports=repeatedWord;
