//Google Question
//Given an array = [2,5,1,2,3,5,1,2,4]:
//It should return 2

//Given an array = [2,1,1,2,3,5,1,2,4]:
//It should return 1

//Given an array = [2,3,4,5]:
//It should return undefined


function firstRecurringCharacter(input) {
    if(!Array.isArray(input)){
      return "Invalid input, please give me an array!"
    }
    const charMap = {}
    for(let i=0;i<input.length;i++){
      if(charMap[input[i]]){
        return input[i]
      }
      charMap[input[i]]=true
    }
  }
  
  firstRecurringCharacter([2,1,1,2,3,5,1,2,4])
  //Bonus... What if we had this:
  // [2,5,5,2,3,5,1,2,4]
  // return 5 because the pairs are before 2,2