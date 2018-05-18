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


function peek(string) {
  let currNode = string.top;
  let displayNode = currNode.data.toString();
  if(currNode === null) {
    throw new Error('Stack is empty');
  }
  return displayNode;
}


function display(string) {
  let currNode = string.top;
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


function is_palindrome(string) {
  string = string.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");
  let testStack = new Stack();
  
  for(let i = 0; i < string.length; i++) {
    testStack.push(string[i]);
  }
  for(let i = 0; i < string.length; i++) {
    let currentLetter = testStack.pop();
    if(currentLetter !== string[i]) {
      return false;
    }
  }
  return true;
}


function matchParenthesis(string) {
  let testStack = new Stack();

  for(let i = 0; i < string.length; i++) {
    if(string[i] === '(') {
      testStack.push(i);
    }
    else if(string[i] === ')') {
      testStack.pop(i);
    }
  }
  if(testStack.top !== null) {
    return false;
  }
  return true;
}


//================================================================
function main() {
  let starTrek = new Stack();
  starTrek.push('Kirk');
  starTrek.push('Spock');
  starTrek.push('McCoy');
  starTrek.push('Scotty');

//   console.log(peek(starTrek));
//   console.log(display(starTrek));
//   console.log(is_palindrome('A man, a plan, a canal: Panama'));
  console.log(matchParenthesis('((1 + 1) + (2 + 2) + (3 + 3))'));
}

main();