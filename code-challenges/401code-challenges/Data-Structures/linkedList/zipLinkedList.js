'use strict';


// const LinkedList =require('./linked-list');

// function ZipLists(list1,list2){
//   try{

//     let zipLinkedList=new LinkedList();

//     let current1=list1.head;
//     let current2=list2.head;


//     while(current1 || current2){
//       if(current1){
//         zipLinkedList.append(current1.value);
//         current1=current1.next;
//       }

//       if(current2){
//         zipLinkedList.append(current2.value);
//         current2=current2.next;
//       }
//     }
//     return zipLinkedList;
//   }catch(err){
//     throw new Error('error:',err);
//   }

// }

function ZipLists (list1,list2){
  try{

    if (!list1.head && !list2.head) {
      return 'Both Lists are Empty !!';
    }

    if (list1.head === null && !list2.head===null){
      return list2.head;
    }

    if (list2.head ===null&& !list1.head===null){
      return list1.head;
    }

    let l1head = list1.head;
    let l2head = list2.head;
    while (l1head.next && l2head.next ){
      list1.insertAfter(l1head.value,l2head.value);
      l2head = l2head.next;
      l1head = l1head.next.next;
    }

    while (l2head.next){
      list1.append(l2head.value);
      l2head = l2head.next;
      l1head = l1head.next ;
    }

    if (!l2head.next && !l1head.next){
      list1.append(l2head.value);
    }else{
      list1.insertAfter(l1head.value,l2head.value);
    }
    return list1;

  }catch(e){
    console.log(`error: ${e}`);
  }
}
module.exports=ZipLists;


