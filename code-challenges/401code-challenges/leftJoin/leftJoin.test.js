'use strict';

const HashTable = require('./hashTable');
const leftJoin = require('./leftJoin');

describe('test left join ', () => {

  it('correct left join', () => {
    let hashTable1 = new HashTable(16);
    let hashTable2 = new HashTable(16);
    hashTable1.add('fond', 'enamour');
    hashTable1.add('wrath', 'anger');
    hashTable1.add('diligent', 'employed');
    hashTable1.add('outfit', 'garb');
    hashTable1.add('guide', 'usher');

    hashTable2.add('fond', 'averse');
    hashTable2.add('wrath', 'delight');
    hashTable2.add('diligent', 'idle');
    hashTable2.add('guide', 'follow');
    hashTable2.add('flow', 'jam');

    let results = leftJoin(hashTable1, hashTable2);
    expect(results).toEqual([
      ['fond', 'enamour', 'averse'],
      ['wrath', 'anger', 'delight'],
      ['diligent', 'employed', 'idle'],
      ['outfit', 'garb', null],
      ['guide', 'usher', 'follow']
    ]);
  });

  it('Edge case : if the HashTables are empty or when the first hashtable is empty', () => {
    let hashTable1 = new HashTable(16);
    let hashTable2 = new HashTable(16);
    let hashTable3 = new HashTable(16);

    hashTable3.add('fond', 'enamour');
    hashTable3.add('wrath', 'anger');
    hashTable3.add('diligent', 'employed');
    hashTable3.add('outfit', 'garb');
    hashTable3.add('guide', 'usher');

    let result = leftJoin(hashTable1, hashTable2);
    let result2 = leftJoin(hashTable1, hashTable3);
    expect(result).toBe(null);
    expect(result2).toBe(null);
  });

  it('null when no keys match between the two tables', () => {
    let hashTable1 = new HashTable(16);
    let hashTable2 = new HashTable(16);
    hashTable1.add('fond', 'enamour');
    hashTable1.add('wrath', 'anger');
    hashTable1.add('diligent', 'employed');
    hashTable1.add('outfit', 'garb');
    hashTable1.add('guide', 'usher');

    hashTable2.add('a', 'e');
    hashTable2.add('b', 'd');
    hashTable2.add('c', 'c');
    hashTable2.add('d', 'b');
    hashTable2.add('e', 'a');
    let results = leftJoin(hashTable1, hashTable2);
    expect(results).toEqual([
      ['fond', 'enamour', null],
      ['wrath', 'anger', null],
      ['diligent', 'employed', null],
      ['outfit', 'garb', null],
      ['guide', 'usher', null]
    ]);
  });

});
