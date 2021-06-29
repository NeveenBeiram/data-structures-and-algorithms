'Use strict';

function leftJoin(hashTable1, hashTable2) {
  let arr = [];
  for (let i = 0; i < hashTable1.table.length; i++) {
    if (hashTable1.table[i]) {
      let key = [Object.keys(hashTable1.table[i].head.value)[0]][0];
      let value = [Object.values(hashTable1.table[i].head.value)[0]][0];
      arr.push([key, value]);
      if (hashTable1.table[i].head.next) {
        let current = hashTable1.table[i].head.next;
        while (current) {
          let key = Object.keys(current.value)[0];
          let value = Object.values(current.value)[0];
          arr.push([key, value]);
          current = current.next;
        }
      }
    }
  }
  for (let j = 0; j <arr.length; j++) {
    let leftHash = hashTable2.get(arr[j][0]);
    arr[j].push(leftHash);
  }
  if(arr.length===0){
    return null;
  }else return arr;

}

module.exports = leftJoin;

