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
  let displayNode = currNode.data;
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
    if(string[i] === '(' || string[i] === '[' || string[i] === '{') {
      testStack.push(string[i]);
    }
    else if(testStack.top.data === '(' && string[i] === ')') {
      testStack.pop();
    }
    else if(testStack.top.data === '[' && string[i] === ']') {
      testStack.pop();
    }
    else if(testStack.top.data === '{' && string[i] === '}') {
      testStack.pop();
    }
  }
  if(testStack.top !== null) {
    return false;
  }
  return true;
}
  
//   let tempArray = [];
//   for(let i = 0; i < string.length; i++) {
//     const current = string[i];
//     const lastChild = tempArray[tempArray.length - 1];
//     if(current === '(' || current === '[' || current === '{') {
//       tempArray.push(current);
//       console.log(tempArray);
//     }
//     if(current === ')' || current === ']' || current === '}') {
//       if(lastChild === '(' || current === ')') {
//         tempArray.pop();
//       }
//       if(lastChild === '[' || current === ']') {
//         tempArray.pop();
//       }
//       if(lastChild === '{' || current === '}') {
//         tempArray.pop();
//       }
//     }
//   }
//   if(tempArray.length > 0) {
//     // console.log(tempArray);
//     return false;
//   }
//   return true;


function sortStack(stack) {
  let testStack = new Stack();
  
  while(stack.top) {
    let number = stack.pop();
    while(testStack.top && peek(testStack) < number) {
      stack.push(testStack.pop());
    }
    testStack.push(number);
  }
  return testStack;
}


//================================================================
function main() {
  let starTrek = new Stack();
//   starTrek.push('Kirk');
//   starTrek.push('Spock');
//   starTrek.push('McCoy');
//   starTrek.push('Scotty');

  starTrek.push(3);
  starTrek.push(6);
  starTrek.push(2);
  starTrek.push(1);
  starTrek.push(33);
  starTrek.push(23);
//   console.log(peek(starTrek));
//   console.log(display(starTrek));
//   console.log(is_palindrome('A man, a plan, a canal: Panama'));
//   console.log(matchParenthesis('((1 + 1) + (2 + 2))'));
  console.log(sortStack(starTrek));
}

main();