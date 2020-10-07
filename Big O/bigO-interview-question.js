/**
 * Given two arrays, create a function that lets a user know whether these two arrays contain any common items.
For Eg:
  a=['a','b','c']
  b=['x','y','z']
  returns false

  a=['a','b','c']
  b=['x','y','a']
  returns true
 */

// Questions
// Array of numbers/string?
// length of two arrays
const a = ['a', 'b', 'c'];
const b = ['x', 'y', 'z', 'a'];

// function isContainCommonItem(a,b){
//   for (let i=0;i<a.length;i++){
//     for(let j=0;j<b.length;j++){
//       if(a[i]===b[j]){
//         return true;
//       }
//     }
//   }
//   return false;
// }

// isContainCommonItem(a,b) 
// /**
// Time = O(a*b)
// Space = O(1) if `var` is used, else its O(a+b)
// */

function isContainCommonItem(a, b) {
  let aObj = {}
  for (let i = 0; i < a.length; i++) {
    if (!aObj[a[i]]) {
      aObj[a[i]] = true 
    }
  }
  for (let j = 0; j < b.length; j++) {
    if (aObj[b[j]]) {
      return true
    }
  }
  return false
}

isContainCommonItem(a, b)
/**
Time = O(a+b)
Space = O(a)
*/

// More Readable Code

function isContainCommonItem(a,b){
  return a.some(item=>b.includes(item))
}
