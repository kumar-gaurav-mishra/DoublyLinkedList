'use strict';
const chai = require('chai');
chai.should();
let DoublyLinkedList = require('./index');
describe('Doubly Linked List', () => {
  let list;
  beforeEach(() => {
    list = new DoublyLinkedList();
    [1, 2, 3, 4, 5].forEach(el => list.push(el));
  });
  describe('Instantiation', () => {
    it('Should return the instance of Singly Linked List', () => {
      (typeof list).should.be.equals('object');
      (typeof list.length).should.be.equals('number');
    });
    it('Instances and Values', () => {
      list.length.should.be.equals(5);
      console.log(list);
      list.get(0).value.should.be.equals(1);
      list.get(1).value.should.be.equals(2);
      (list.get(-1) === null).should.be.equals(true);
      (list.get(10) === null).should.be.equals(true);
    });
    it('Push Method', () => {
      list.length.should.be.equals(5);
      (list.get(5) === null).should.be.equals(true);
      list.push(10);
      list.length.should.be.equals(6);
      list.get(5).value.should.be.equals(10);
      (list.push() === null).should.be.equals(true);
    });
    it('Pop Method', () => {
      list.length.should.be.equals(5);
      list.get(4).value.should.be.equals(5);
      list.pop();
      list.length.should.be.equals(4);
      (list.get(4) === null).should.be.equals(true);
      let tempList = new DoublyLinkedList();
      tempList.push(1);
      tempList.pop();
      (tempList.pop() === null).should.be.equals(true);
    });
    it('Shift Method', () => {
      list.length.should.be.equals(5);
      list.get(0).value.should.be.equals(1);
      list.shift();
      list.length.should.be.equals(4);
      list.get(0).value.should.be.equals(2);
      let tempList = new DoublyLinkedList();
      (tempList.shift() === null).should.be.equals(true);
      tempList.push(1);
      tempList.shift().value.should.be.equals(1);
    });
    it('unShift Method', () => {
      list.length.should.be.equals(5);
      list.get(0).value.should.be.equals(1);
      list.unShift(10);
      list.length.should.be.equals(6);
      list.get(0).value.should.be.equals(10);
      (list.unShift() === null).should.be.equals(true);
      let tempList = new DoublyLinkedList();
      (tempList.unShift(5).head.value === 5).should.be.equals(true);
    });
    it('Insert Method', () => {
      list.length.should.be.equals(5);
      list.get(0).value.should.be.equals(1);
      list.insert(0, 10);
      list.length.should.be.equals(6);
      list.get(0).value.should.be.equals(10);
      (list.insert(-1, 20) === false).should.be.equals(true);
      (list.insert(6, 20) === true).should.be.equals(true);
      (list.insert(2, 15) === true).should.be.equals(true);
    });
    it('Set Method', () => {
      list.length.should.be.equals(5);
      list.get(0).value.should.be.equals(1);
      list.set(0, 10);
      list.length.should.be.equals(5);
      list.get(0).value.should.be.equals(10);
      (list.set(10, 20) === false).should.be.equals(true);
    });
    it('remove Method', () => {
      list.length.should.be.equals(5);
      list.get(0).value.should.be.equals(1);
      list.remove(0);
      list.length.should.be.equals(4);
      list.get(0).value.should.be.equals(2);
      (list.remove(-1) === null).should.be.equals(true);
      (list.remove(0).value === 2).should.be.equals(true);
      (list.remove(2).value === 5).should.be.equals(true);
      list.push(10);
      list.push(20);
      list.push(40);
      (list.remove(1).value === 4).should.be.equals(true);
    });
    // it('reverse Method', () => {
    //   list.reverse();
    //   list.length.should.be.equals(5);
    //   list.get(0).value.should.be.equals(5);
    //   list.get(1).value.should.be.equals(4);
    //   list.get(2).value.should.be.equals(3);
    //   list.get(3).value.should.be.equals(2);
    //   list.get(4).value.should.be.equals(1);
    //   let tempList = new SinglyLinkedList();
    //   tempList.push(1);
    //   tempList.reverse();
    // });
  });
});
