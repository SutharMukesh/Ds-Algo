const a = [1, 2, 3, 4, 5, 6];

function logAllPairOfArray(a){
  for (let i = 0; i < a.length; i++) {
    for (let j = 0;j<a.length;j++){ 
      console.log(a[i]+" "+a[j]); // O(n * n) = O(n^2)
    }
  }
}

logAllPairOfArray(a); // O(n^2)