'use strict';

const Node = require('../node');
const LinkedList = require('../linked-list');
const { expect } = require('@jest/globals');

describe('liked list class', () => {

  it('instantiate an empty linked list',()=>{
    let linkedList=new LinkedList();
    expect(linkedList.head).toBeNull();
  });

  it('Can properly insert into the linked list (should add new item to empty linked list)', () => {

    let ll = new LinkedList();
    let value = 5;
    //act
    ll.insert(value);
    //assert
    expect(ll.head.value).toEqual(value);
    expect(ll.head.next).toBeNull();
  });

  it('test err', () => {

    let ll = new LinkedList();
    // let value = 5;
    //act
    ll.insert();
    //assert
    expect(ll.head.value).toThrowError;
    // expect(ll.head.next).toBeNull();
  });

  it('Can properly insert into the linked list (should add to the Head( The head property will properly point to the first node in the linked list))', () => {
    //arrange
    let ll = new LinkedList();
    ll.insert(5);
    let newValue = 10;
    //act
    ll.insert(newValue);
    //assert
    expect(ll.head.value).toEqual(newValue);
    expect(ll.head.next.value).toEqual(5);
    expect(ll.head.next.next).toBeNull();
  });




  it('insert multiple nodes into the linked list',()=>{
    let ll = new LinkedList();
    ll.insert(11);
    ll.insert(12);
    ll.insert(10);
    expect(ll.head.value).toEqual(10);
    expect(ll.head.next.value).toEqual(12);
    expect(ll.head.next.next.value).toEqual(11);
    expect(ll.head.next.next.next).toBeNull();
  });


  it('return true if there is the value in the LL', () => {
    //arrange
    let ll = new LinkedList();
    ll.insert(5);
    ll.insert(6);
    ll.insert(10);

    //act
    ll.insert(12);
    //assert
    // expect(ll.head).not().toBeNull();
    expect(ll.includes(6)).toBeTruthy();
  });


  it('return true if there is the value in the LL', () => {
    //arrange
    let ll = new LinkedList();
    //act
    //assert
    // expect(ll.head).not().toBeNull();
    expect(ll.includes(6)).toBeFalsy();
  });

  it('return false if the value is not in the LL', () => {
    //arrange
    let ll = new LinkedList();
    ll.insert(5);
    ll.insert(6);
    ll.insert(10);

    //act
    //assert
    // expect(ll.head).not().toBeNull();
    expect(ll.includes(12)).toBeFalsy();
  });


  it('Can properly return a collection of all the values that exist in the linked list',()=>{
    let ll=new LinkedList();
    ll.insert(5);
    ll.insert(6);
    ll.insert(7);
    ll.insert(8);
    expect(ll.toString()).toEqual('{ 8 } -> { 7 } -> { 6 } -> { 5 } -> NULL');

  });

  it('Can properly return a collection of all the values that exist in the linked list',()=>{
    let ll=new LinkedList();
    expect(ll.toString()).toEqual('NULL');

  });




  it ('should throw error',()=>{
    //arrange
    let linkedList = new LinkedList ();
    //act
    linkedList.insert();

    //assert
    expect(linkedList.head.value).toThrowError;

  });


});
