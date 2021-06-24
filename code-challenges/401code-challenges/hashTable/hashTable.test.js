'use strict';

const HashTable=require('./hashTable');

describe('HashTable Test',()=>{

  it('Adding a key/value to your hashtable results in the value being in the data structure',()=>{
    let hashTable=new HashTable(599);
    hashTable.add('firstName','neveen');
    expect(hashTable.table[hashTable.hash('firstName')]).toBeDefined();
  });

  it('Retrieving based on a key returns the value stored',()=>{
    let hashTable = new HashTable(599);
    hashTable.add('firstName','neveen');
    expect(hashTable.get('firstName')).toEqual('neveen');
  });

  it('Successfully returns null for a key that does not exist in the hashtable',()=>{
    let hashTable = new HashTable(599);
    hashTable.add('firstName','neveen');

    expect(hashTable.get('lastName')).toBeNull();
  });

  it('Successfully handle a collision within the hashtable',()=>{
    let hashTable = new HashTable(599);
    hashTable.add('test','N');
    hashTable.add('ttes','B');

    expect(hashTable.contains('test')).toBeDefined();
    expect(hashTable.contains('ttes')).toBeDefined();
  });

  it('Successfully retrieve a value from a bucket within the hashtable that has a collision',()=>{
    let hashTable = new HashTable(599);
    hashTable.add('test','N');
    hashTable.add('ttes','B');

    expect(hashTable.get('test')).toEqual('N');
    expect(hashTable.get('ttes')).toEqual('B');
  });

  it('Successfully hash a key to an in-range value',()=>{
    let hashTable=new HashTable(599);
    let index = hashTable.hash('abcd');
    expect(index >= 0).toEqual(true);
    expect(index < 599).toEqual(true);
  });

  it('return true when the key is exists',()=>{
    let hashTable = new HashTable(599);
    hashTable.add('test','N');

    expect(hashTable.contains('test')).toBeTruthy;
  });

  it('return false when the key is exists',()=>{
    let hashTable = new HashTable(1021);
    hashTable.add('test','N');

    expect(hashTable.contains('mmmmm')).toEqual(false);
  });


});



