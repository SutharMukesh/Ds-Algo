function mergeSortedArrays(arrayOne, arrayTwo) {
    let mergedArray = [];
    let pointer = 0 
    loop1:
    for (let i = 0; i < arrayOne.length;) {
        for (let j = pointer; j <= arrayTwo.length;) {
            if (!arrayTwo[j] || arrayOne[i] < arrayTwo[j]) {
                console.log("if---", arrayOne[i], arrayTwo[j]);
                mergedArray.push(arrayOne[i]);
                i++;
                continue loop1
            } else {
                console.log("else--", arrayOne[i], arrayTwo[j]);
                mergedArray.push(arrayTwo[j]);
                pointer++
                break
            }
        }
    }
    return mergedArray;
}
// console.log(mergeSortedArrays([0, 3, 4, 31], [3, 4, 6, 30]));


// function mergeSortedArrays(left,right){
//   //left: sorted left sub-array
//   //right: sorted right sub-array
//   res =[];
//   let leftIdx,rightIdx
//   for(leftIdx=0, rightIdx=0; leftIdx<left.length && rightIdx<right.length; ) {
//     if(left[leftIdx] <= right[rightIdx]) {
//     res.push(left[leftIdx++])
//     } else {
//     res.push(right[rightIdx++])
//     }
//   }
//   return res.concat(left.slice(leftIdx)).concat(right.slice(rightIdx));
// }

// function mergeSortedArrays(arrayOne,arrayTwo){
//   let mergedArray =[]

//   // CHECK INPUT
//   if(!Array.isArray(arrayOne) || !Array.isArray(arrayTwo)){
//     return "Invalid Input"
//   }

//   if(arrayOne.length===0){
//     return arrayTwo
//   }
  
//   if(arrayTwo.length===0){
//     return arrayOne
//   }
  
//   let i=0,j=0
//   let array1Item = arrayOne[i];
//   let array2Item = arrayTwo[j];

//   while (array1Item || array2Item){
//     if(!array2Item || array1Item<array2Item){
//       mergedArray.push(array1Item);
//       i++
//       array1Item=arrayOne[i];
//     }else{
//       mergedArray.push(array2Item)
//       j++
//       array2Item=arrayTwo[j];
//     }
//   }
//   return mergedArray
// }

mergeSortedArrays([0,3,4,31], [3,4,6,30]);

