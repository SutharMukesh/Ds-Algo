class Marray{
    constructor(){
      this.length = 0
      this.data = {}
    }
  
    get(index){
      return this.data[index];
    }
  
    push(item){
      this.data[this.length] = item;
      this.length++;
      return this.length;
    }
  
    pop(){
      const item = this.data[this.length-1];
      console.log(item)
      delete this.data[this.length-1];
      this.length--;
      return item; 
    }
  
    delete(index){
      const item = this.data[index]
      this.shiftItems(index)
      // return this.data
    }
  
    shiftItems(index){
      for(let i=index;i<this.length-1;i++){
          this.data[i] = this.data[i+1];
      }
      delete this.data[this.length-1]
      this.length--
    }
  }
  
  
  const a = new Marray();
  console.log(a.push(10))
  console.log(a.push(20))
  console.log(a.push(30))
  console.log(a.push(40))
  console.log(a.get(0))
  // console.log(a.pop())
  console.log(a)
  a.delete(0)
  console.log(a)
  // console.log(a.delete(1))