'use strict';
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}
class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(value) {
    if (!value) return null;
    let node = new Node(value);
    if (!this.head) {
      this.head = node;
      this.tail = this.head;
    } else {
      node.prev = this.tail;
      this.tail.next = node;
      this.tail = node;
    }
    this.length += 1;
    return this;
  }
  get(index) {
    if (index < 0 || index >= this.length || !this.head) return null;
    let node = this.head;
    for (let i = 0; i < index; i++) {
      node = node.next;
    }
    return node;
  }
  pop() {
    if (!this.head || this.length === 0) return null;
    let node = this.tail;
    this.tail = this.tail.prev;
    this.length -= 1;
    return node;
  }
  shift() {
    if (this.length === 0) return null;
    let node = this.head;
    this.head = this.head.next;
    this.length -= 1;
    return node;
  }
  unShift(value) {
    if (!value) return null;
    let node = new Node(value);
    if (this.length === 0) {
      this.head = node;
      this.tail = node;
      this.length = 1;
    } else {
      this.head.prev = node;
      node.next = this.head;
      this.head = node;
      this.length += 1;
    }
    return this;
  }
  insert(index, value) {
    if (index < 0 || index > this.length) return false;
    if (index === 0) {
      this.unShift(value);
    } else if (index === this.length) {
      this.push(value);
    } else {
      let preNode = this.get(index - 1);
      let currentNode = preNode.next;
      let node = new Node(value);
      currentNode.prev = node;
      preNode.next = node;
      this.length += 1;
    }
    return true;
  }
  set(index, value) {
    let foundNode = this.get(index);
    if (foundNode) {
      foundNode.value = value;
      return true;
    }
    return false;
  }
  remove(index) {
    if (index < 0 || index >= this.length) return null;
    if (index === 0) {
      return this.shift();
    } else if (index === this.length - 1) {
      return this.pop();
    } else {
      let preNode = this.get(index - 1);
      let removed = preNode.next;
      preNode.next = removed.next;
      preNode.next.prev = preNode;
      this.length -= 1;
      return removed;
    }
  }
}

let list = new DoublyLinkedList();
list.push(1);
list.push(2);
list.push(3);
console.log(list.remove(2));

module.exports = DoublyLinkedList;
