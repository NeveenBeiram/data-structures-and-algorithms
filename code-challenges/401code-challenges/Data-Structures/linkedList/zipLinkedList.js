'use strict';


const LinkedList =require('./linked-list');

function ZipLists(list1,list2){
  try{

    let zipLinkedList=new LinkedList();

    let current1=list1.head;
    let current2=list2.head;


    while(current1 || current2){
      if(current1){
        zipLinkedList.append(current1.value);
        current1=current1.next;
      }

      if(current2){
        zipLinkedList.append(current2.value);
        current2=current2.next;
      }
    }
    return zipLinkedList;
  }catch(err){
    throw new Error('error:',err);
  }

}


module.exports=ZipLists;


