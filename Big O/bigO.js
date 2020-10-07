// --------- O(n) --> Linear Time. ----------- //
function findNemo(array){
    console.log("---------------------------------------")
    console.time('For Loop')
    for (let i=0;i<array.length;i++){
      if(array[i]=="nemo"){
        // console.log("Found nemo!");
        break;
      }
    }
    console.timeEnd('For Loop');
    // --------------------------------------- // 
    console.time('Map')
    array.map((element)=>{
      if(element=="nemo"){
        // console.log("Found nemo");
        return;
      }
    })
    console.timeEnd('Map');
  
    // --------------------------------------- // 
    console.time('For each')
    array.forEach((element)=>{
      if(element=="nemo"){
        // console.log("Found nemo");
        return;
      }
    })
    console.timeEnd('For each');
  }
  
  const nemo = ["nemo"];
  findNemo(nemo) // here n =1 so its O(1)
  findNemo(new Array(10000).fill('nemo')) // O(10000)
  findNemo(new Array(10000000).fill('nemo')) // O(10000000)
  
  
  // ----------- O(1) --> Contant Time. ----------- //
  const boxes = [1,2,3,4,5,6];
  function logFirstTwoBoxes(boxes){
    console.log(boxes[0]) // O(1) 
    console.log(boxes[1]) // O(1)
  }
  
  logFirstTwoBoxes(boxes) // O(2) -- O(constant) -- O(1)
  