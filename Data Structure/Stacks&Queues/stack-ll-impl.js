class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack{
  constructor(){
    this.top = null;
    // this.bottom = null;
    this.length = 0;
  }

  // O(1)
  push(value){
    const newNode = new Node(value);
    // If the stack is empty
    // console.log(this)
    // if(this.length==0){
    //   this.top = newNode;
    //   this.bottom = newNode;
    // }else{
    newNode.next = this.top;
    this.top = newNode;
    // }
    this.length++;
    return this
  }

  // O(1)
  pop(){
    if(!this.top){
      return this;
    }
    this.top = this.top.next 
    this.length--;
    return this;
  }

  // O(1)
  peek(){
    console.log(this)
    if(!this.top){
      return "Stack is empty";
    }
    console.log(this.top)
    return this.top
  }

  printList(){
      const array = []
      let node = this.top;
      while(node){
        array.push(node.value);
        node = node.next
      }
      console.log(array)
      return this
  }
}

const myStack = new Stack();

console.log(myStack.push(10).push(20).push(30).pop().pop().peek())