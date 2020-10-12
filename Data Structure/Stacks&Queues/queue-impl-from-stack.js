class Queue{
  constructor(){
    this.mainStack = []
    this.tempStack = []
  }

  // O(1)
  push(value){
    this.mainStack.push(value);
    return this
  }

  // O(n)
  pop(){
    // moving items from stack to tempStack except the last one -- O(n)
    while(this.mainStack.length>1){
      this.tempStack.push(this.mainStack.pop())
    }

    // removing the last one
    this.mainStack.pop()
  
    // pushing tempStack items back to mainStack -- O(n)
    while(this.tempStack.length>0){
      this.mainStack.push(this.tempStack.pop())
    }
    return this
  }

  // O(n)
  peek(){
    if(this.mainStack.length>0){
      return this.mainStack[0]
    }
    return null;
  }

  // O(1)
  empty(){
    if(this.mainStack.length ===0){
      return true
    }
    return false
  }
}

const myQ = new Queue()

console.log(myQ.push(10).push(20).push(30).pop().peek())