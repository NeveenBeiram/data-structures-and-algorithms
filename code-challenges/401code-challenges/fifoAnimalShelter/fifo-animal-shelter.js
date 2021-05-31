'use strict';

const Queue=require('../stacksAndQueues/stacks-and-queues').Queue;

class AnimalShelter{

  constructor(){

    this.cat=new Queue();
    this.dog=new Queue();
  }
  enqueue(animal){

    if(animal){
      animal=animal.toLowerCase();
      if(animal==='dog'){
        this.dog.enqueue(animal);
      }else if (animal==='cat'){
        this.cat.enqueue(animal);
      }else{
        // throw Error(`you can't enter :${animal} it's just dog or cat`);
        return;
      }
    }else{
      return;
    //   throw new Error(`you must enter an animal to enqueue`);
    }


  }

  dequeue(pref){
    try{
      if(pref){
        pref=pref.toLowerCase();
        if(pref==='dog'){
          return this.dog.dequeue();
        }else if(pref==='cat'){
          return this.cat.dequeue();
        }
        else return null;
      }else{
        //   throw new Error('you have to enter the animal shelter cat or dog to try dequeue from it');
        return;
      }
    }
    catch(e){
    //   throw new Error(`it's an empty shelter!`,e);
      return;
    }
  }

}

module.exports=AnimalShelter;
