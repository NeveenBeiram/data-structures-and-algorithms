'use strict';

const Node = require('../node');
const LinkedList = require('../linked-list');
const { expect } = require('@jest/globals');

const ZipLists=require('../zipLinkedList');


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



  it('should append new item to empty linked list', () => {
    //arrange
    let ll = new LinkedList();
    let value = 5;
    //act
    ll.append(value);
    //assert
    // expect(ll.head).not().toBeNull();
    expect(ll.head.value).toEqual(value);
    expect(ll.head.next).toBeNull();
  });

  it('should append new item to a not empty linked list', () => {
    //arrange
    let ll = new LinkedList();
    ll.append(5);
    let newValue = 10;
    //act
    ll.append(newValue);
    //assert
    expect(ll.head.value).toEqual(5);
    expect(ll.head.next.value).toEqual(newValue);
    expect(ll.head.next.next).toBeNull();
  });

  it('should add the value before specific value',()=>{
    let ll=new LinkedList();
    ll.append(5);
    ll.append(6);
    ll.append(10);

    let value=6;
    let newValue=15;

    ll.insertBefore(6,15);

    expect(ll.head.next.value).toEqual(newValue);
    expect(ll.head.next.next.value).toEqual(value);

  });



  it('should add the value after specific value',()=>{
    let ll=new LinkedList();
    ll.append(5);
    ll.append(6);
    ll.append(10);

    let value=6;
    let newValue=15;

    ll.insertAfter(6,15);

    expect(ll.head.next.value).toEqual(value);
    expect(ll.head.next.next.value).toEqual(newValue);
    expect(ll.head.next.next.next.value).toEqual(10);

  });

  it('should throw error if not specifying the value in the append',()=>{
    let ll=new LinkedList();

    expect(ll.append()).toThrowError;
  });



  it('should throw error if the value not exist to add after it',()=>{
    let ll=new LinkedList();
    ll.append(5);
    ll.append(6);
    ll.append(10);

    let value=6;
    let newValue=15;

    // ll.insertAfter(2,15);
    expect(ll.insertAfter(value,newValue)).toThrowError;


  });

  it('should throw error if the value not exist to add before it',()=>{
    let ll=new LinkedList();
    ll.append(5);
    ll.append(6);
    ll.append(10);

    let value=2;
    let newValue=15;

    // ll.insertAfter(2,15);
    expect(ll.insertAfter(value,newValue)).toThrowError;


  });

  it('should add the value before specific value (check if the value we want to insert before of it, it is the head)',()=>{
    let ll=new LinkedList();
    ll.append(5);
    ll.append(6);
    ll.append(10);

    let value=5;
    let newValue=15;

    ll.insertBefore(value,newValue);

    expect(ll.head.value).toEqual(newValue);
    expect(ll.head.next.value).toEqual(value);

  });



  it('should add the value after specific value (check the insert to the last)',()=>{
    let ll=new LinkedList();
    ll.append(5);
    ll.append(6);
    ll.append(10);

    let value=10;
    let newValue=15;

    ll.insertAfter(value,newValue);

    expect(ll.head.next.next.value).toEqual(value);
    expect(ll.head.next.next.next.value).toEqual(newValue);
    // expect(ll.head.next.next.next.value).toEqual(10);

  });

  it('Can successfully add multiple nodes to the end of a linked list',()=>{
    let ll=new LinkedList();
    ll.append(5);
    ll.append(10);

    ll.append(2);

    expect(ll.head.value).toEqual(5);
    expect(ll.head.next.value).toEqual(10);
    expect(ll.head.next.next.value).toEqual(2);

  });

  it('error in append',()=>{
    let ll=new LinkedList();

    ll.append();
    expect(ll.head.value).toThrowError;
  });


  it('should find kth value in a linked list', () => {
    let ll=new LinkedList();
    ll.append(5);
    ll.append(10);
    ll.append(15);
    ll.append(20);

    expect(ll.kthFromEnd(0)).toEqual(20);
    expect(ll.kthFromEnd(1)).toEqual(15);
    expect(ll.kthFromEnd(2)).toEqual(10);
    expect(ll.kthFromEnd(3)).toEqual(5);
  });

  it('kth error the k grater than the length',()=>{
    let ll=new LinkedList();
    ll.append(5);
    ll.append(10);
    ll.append(15);
    ll.append(20);
    expect(ll.kthFromEnd(5)).toThrowError;
  });

  it('kth error the k is equal to the size',()=>{
    let ll=new LinkedList();
    ll.append(5);
    ll.append(10);
    ll.append(15);
    ll.append(20);
    expect(ll.kthFromEnd(4)).toThrowError;
  });

  it('kth -> k negative number',()=>{
    let ll=new LinkedList();
    ll.append(5);
    ll.append(10);
    ll.append(15);
    ll.append(20);
    expect(ll.kthFromEnd(-1)).toThrowError;
  });

  it('kth -> linkedlist of size 1',()=>{
    let ll=new LinkedList();
    ll.append(5);

    expect(ll.kthFromEnd(0)).toEqual(5);
  });

  it('kth -> linkedlist of size 1',()=>{
    let ll=new LinkedList();
    ll.append(5);

    expect(ll.kthFromEnd(1)).toThrowError;
  });

});

describe('zipLinkedList', () => {
  it('test zipLists',()=>{
    let list1=new LinkedList();
    list1.append(1);
    list1.append(3);
    list1.append(5);

    let list2=new LinkedList();
    list2.append(2);
    list2.append(4);
    list2.append(6);

    // let zl=new LinkedList();
    let zipList=ZipLists(list1,list2);

    expect(zipList.toString()).toEqual(`{ 1 } -> { 2 } -> { 3 } -> { 4 } -> { 5 } -> { 6 } -> NULL`);


  });
  it('test err',()=>{
    let num=5;
    let list1=new LinkedList();
    list1.append(5);
    list1.append(4);

    let zipList=ZipLists(list1,num);

    expect(zipList).toThrowError;
});

});
