class HashTable {
    constructor(size){
      this.data = new Array(size);
    }
  
    _hash(key) {
      let hash = 0;
      for (let i =0; i < key.length; i++){
          hash = (hash + key.charCodeAt(i) * i) % this.data.length
      }
      return hash;
    }
    set(key,value){
      const keyHash = this._hash(key)
      // TO solve Hash collision
      // if data exists in a memory, then push 
      if(!this.data[keyHash]){
        this.data[keyHash] = []
      }
      this.data[keyHash].push([key,value])
      console.log("")
      console.log(this.data)
    }
    get(key){
      const keyHash = this._hash(key)
      console.log(keyHash)
      if(this.data[keyHash]){
        for (let i=0;i<this.data[keyHash].length;i++){
          if (this.data[keyHash][i][0]==key){
            return this.data[keyHash][i][1]
          }
        }
      }
    }
  
    keys(){
      const keyArray = []
      for(let i=0;i<this.data.length;i++){
        if(this.data[i]){
          if(this.data[i].length>1){
            for(let j=0;j<this.data[i].length;j++){
              keyArray.push(this.data[i][j][0])
            }
          }else{
            keyArray.push(this.data[i][0][0])
          }
        }
      }
      console.log("KEYS")
      console.log(keyArray)
    }
  }
  
  const myHashTable = new HashTable(2);
  myHashTable.set('grapes', 10000)
  myHashTable.set('grape',20000)
  myHashTable.set('grap',20000)
  myHashTable.set('apples', 9)
  // myHashTable.get('grapes')
  
  myHashTable.keys()
  