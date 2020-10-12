class Stack{
  constructor(){
    this.data = []
    this.length = this.data.length
  }

  // O(1)
  push(value){
    this.data.push(value)
    this.length = this.data.length
    return this
  }

  // O(1)
  pop(){
    this.data.pop()
    this.length = this.data.length
    return this;
  }

  // O(1)
  peek(){
    return this.data[this.data.length-1];
  }
}

const myStack = new Stack();

console.log(myStack.push(10).push(20).push(30).pop().peek())
console.log(myStack.length)