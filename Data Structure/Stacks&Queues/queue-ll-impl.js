class Node{
  constructor(value){
    this.value = value;
    this.next = null;
  }
}

class Queue{
  constructor(){
    this.first = null;
    this.last = null;
    this.length = 0;
  }

  // O(1)
  peek(){
    if(!this.first){
      return null;
    }
    return this.first;
  }

  // O(1)
  enqueue(value){
    const newNode = new Node(value);
    if(this.length === 0){
      this.first = newNode;
      this.last = newNode;
    }else{
      this.last.next = newNode
      this.last = newNode
    }
    this.length++;
    return this;
  }

  // O(1)
  dequeue(){
    if(!this.first){
      return null
    }
    
    this.first = this.first.next
    this.length--;
    return this
  }
}

const myQueue = new Queue();
console.log(myQueue.enqueue(10).enqueue(20).enqueue(30).dequeue().peek())
