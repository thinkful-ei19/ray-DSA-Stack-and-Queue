'use strict';
class _Node {
  constructor(data, next) {
    this.data = data;
    this.next = next;
  }
}

class Stack {
  constructor() {
    this.top = null;
  }

  push(data) {
    if(this.top === null) {
      this.top = new _Node(data, null);
      return this.top;
    }
    const node = new _Node(data, this.top);
    this.top = node;
  }

  pop() {
    const node = this.top;
    this.top = node.next;
    return node.data;
  }
}


function peek(stack) {
  let currNode = stack.top;
  let displayNode = currNode.data.toString();
  if(currNode === null) {
    throw new Error('Stack is empty');
  }
  return displayNode;
}


function display(stack) {
  let currNode = stack.top;
  let displayStack = currNode.data.toString();
  while(currNode.next !== null) {
    displayStack += ', ' + currNode.next.data.toString();
    currNode = currNode.next;
  }
  if(currNode === null) {
    throw new Error('Stack is empty');
  }
  return displayStack;
}

//================================================================
function main() {
  let starTrek = new Stack();
  starTrek.push('Kirk');
  starTrek.push('Spock');
  starTrek.push('McCoy');
  starTrek.push('Scotty');

//   console.log(peek(starTrek));
  console.log(display(starTrek));
}

main();