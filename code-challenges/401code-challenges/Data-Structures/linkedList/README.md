# Singly Linked List

A Linked List is a sequence of Nodes that are linked to each other.
The most defining feature of a Linked List is that each Node references the next Node in the linkedList.

<hr>

## Challenge

functions for the linked list 
1. insert : add nodes to the head of the linked list 
2. includes : check if the value exists in the linked list 
3. toString : return string representing the value of all nodes in the linked list 

<hr>

## Approach & Efficiency

* create node class has two properties 
    1. value 
    2. next pointer to point to the next node (by default it's null).

* create linkedList class has property --> head and these methods : 
    * insert method that insert node to the beginning of linkedList(to the head).
        Space: O(1) Time:O(1)
    * include method that search for value if it's exist in linkedList.
       Space: O(1) Time:O(n)
    * toString return the value of each node formatted like : {a}->{b}->NULL.
       Space: O(n) Time:O(n)
<hr>

## API

![white board](./codechalleng5.png)


