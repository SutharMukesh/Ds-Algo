function reverse(str){
    // INPUT VALIDATION
  
    if(!str || typeof str!=="string"){
      return "Invalid Input"
    }
    let reverseArray = []
    for(let i =str.length-1;i>=0;i--){
      reverseArray.push(str[i])
    }
    return reverseArray.join('')
  }
  reverse("Hello World")
  
  function reverse2(str){
    return str.split('').reverse().join('')
  }
  reverse2("Hello World2")
  
  reverse3 = str => str.split('').reverse().join('');
  reverse3("Hello World3")
  
  reverse4 = str => [...str].reverse().join('');
  reverse4("Hello World4")