class DoublyNode{
    constructor(value){
      this.value=value;
      this.prev=null;
      this.next=null;
    }
  }
  
  class DoublyLinkedList{
    constructor(value){
      this.head = new DoublyNode(value)
      this.tail = this.head
      this.length = 1
    }
  
    append(value){
      let newNode = new DoublyNode(value);
      newNode.prev = this.tail
      this.tail.next = newNode
      this.tail = newNode
      this.length++;
      return this
    }
  
  
    prepend(value){
      let newNode = new DoublyNode(value);
      newNode.next = this.head
      this.head.prev = newNode
      this.head = newNode
      this.length++;
      return this
    }
  
  
    insert(index, value){
      // head
      if(index === 0){
        return this.prepend(value)
      }else if(index >= this.length){
        return this.append(value)
      }else{
        let indexNode = this.getNodeAtIndex(index);
        let prevIndexNode = this.getNodeAtIndex(index-1)
        let newNode = new DoublyNode(value);
        newNode.prev = prevIndexNode
        prevIndexNode.next = newNode
  
        newNode.next = indexNode
        indexNode.prev = newNode
        this.length++;
        return this
      }
    }
  
  
    remove(index){
      if(index==undefined){
        return this
      }
      if(index===0){
        this.head = this.head.next
        this.head.prev = null
        this.length--;
        return this
      }else if(index>=this.length){
        let prevIndexNode = this.getNodeAtIndex(this.length-2)
        this.tail = prevIndexNode
        this.tail.next = null
        this.length--;
        return this
      }else{
        let prevIndexNode = this.getNodeAtIndex(index-1)
        let nextIndexNode = this.getNodeAtIndex(index+1)
        prevIndexNode.next = nextIndexNode
        nextIndexNode.prev = prevIndexNode
        this.length--;
        return this
      }
    }
  
    getNodeAtIndex(index){
      let node = this.head;
      let i = 0;
      while(node){
        if(i === index){
          return node
        }
        i++
        node = node.next
      }
    }
  
    printList(){
      const array = []
      let node = this.head;
      while(node){
        array.push(node.value);
        node = node.next
      }
      console.log(array)
      return this
    }
  }
  
  let myList = new DoublyLinkedList(10)
  myList.append(2).prepend(20).insert(1,99).remove(4).printList()