function booo(n) {
    for (let i = 0; i < n; i++) {
      console.log('booooo!');
    }
  }
  
  booo(4) // O(1)
  
  function arrayOfHiNTimes(n){
    let hiArray = []
    for (let i = 0; i < n; i++) {
      hiArray[i]='hi'
    }
    return hiArray;
  }
  
  arrayOfHiNTimes(5) // O(5) -> O(n)