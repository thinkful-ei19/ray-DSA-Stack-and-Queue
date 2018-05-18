'use strict';
class _Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
  }

  enqueue(data) {
    const node = new _Node(data);

    if(this.first === null) {
      this.first = node;
    }

    if(this.last) {
      node.next = this.last;
      this.last.prev = node;
    }

    this.last = node;
  }

  dequeue() {
    if(this.first === null) {
      return;
    }

    const node = this.first;
    this.first = node.prev;

    if(node === this.last) {
      this.last = null;
    }

    return node.value;
  }
}


function peek(queue) {
  let currNode = queue.first;
  let displayNode = currNode.value;
  if(currNode === null) {
    throw new Error('Queue is empty');
  }
  return displayNode;
}


//================================================================
function main() {
  let starTrekQ = new Queue();
  starTrekQ.enqueue('Kirk');
  starTrekQ.enqueue('Spock');
  starTrekQ.enqueue('Uhura');
  starTrekQ.enqueue('Sulu');
  starTrekQ.enqueue('Checkov');

  console.log(peek(starTrekQ));
}

main();
