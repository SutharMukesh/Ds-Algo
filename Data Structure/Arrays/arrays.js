let strings = [1,2,3,4,5]

// Lookup O(1)
console.log(strings[0])

// Push O(1)
strings.push(8);
console.log(strings)

// Insert O(n)
strings.splice(2,0,"new")
console.log(strings)

strings.unshift('first')
console.log(strings)

// delete O(n)
strings.splice(3,1)
strings.splice(0,1)
console.log(strings)
