'use strict';

const AnimalShelter=require('./fifo-animal-shelter');

const { expect } = require('@jest/globals');

describe('test fifo-animal-shelter',()=>{

  it('“Happy Path(cat)” - Expected outcome',()=>{
    const shelter=new AnimalShelter();

    let animal ='Cat';
    shelter.enqueue(animal);

    expect(shelter.cat.front.value).toEqual('cat');
    expect(shelter.dog.front).toBeNull();
  });

  it('“Happy Path(dog)” - Expected outcome',()=>{
    const shelter=new AnimalShelter();

    let animal='DOG';
    shelter.enqueue(animal);

    expect(shelter.dog.front.value).toEqual('dog');
    expect(shelter.cat.front).toBeNull();
  });

  it('“Happy Path(cat)” - Expected outcome',()=>{
    const shelter=new AnimalShelter();

    let animal='CAT';
    let animal2='cat';
    shelter.enqueue(animal);
    shelter.enqueue(animal2);

    expect(shelter.cat.dequeue()).toEqual('cat');
    expect(shelter.cat.front.value).toEqual('cat');
    expect(shelter.dog.front).toBeNull();
  });


  it('“Happy Path(dog)” - Expected outcome',()=>{
    const shelter=new AnimalShelter();

    let animal='DOG';
    let animal2='dog';
    shelter.enqueue(animal);
    shelter.enqueue(animal2);

    expect(shelter.dog.dequeue()).toEqual('dog');
    expect(shelter.dog.front.value).toEqual('dog');
    expect(shelter.cat.front).toBeNull();
  });




  it('Expected failure',()=>{
    const shelter=new AnimalShelter();

    let animal='caw';
    shelter.enqueue(animal);
    expect(shelter.cat.front).toBeNull();
    expect(shelter.dog.front).toBeNull();
  });


  it('Edge Case',()=>{
    const shelter=new AnimalShelter();
    shelter.enqueue();
    expect(shelter.cat.front).toBeNull();
    expect(shelter.dog.front).toBeNull();
  });

  it('Edge Case',()=>{
    const shelter=new AnimalShelter();
    expect(shelter.dequeue()).toBeNull;
    expect(shelter.cat.front).toBeNull();
    expect(shelter.dog.front).toBeNull();
  });

  it('Edge Case',()=>{
    const shelter=new AnimalShelter();
    let animal='cat';
    shelter.enqueue(animal);
    expect(shelter.dequeue(animal)).toBe('cat');
    expect(shelter.dequeue('cat')).toBeNull;

  });



});
