let a = "abhi\""  //give length of 5 because \" are 1 string 
console.log(a, a.length)
console.log(a.toUpperCase()) //convert all wornd in lower case
console.log(a.toLowerCase()) //convert all wornd in lower case
console.log(a.slice(2))
console.log(a.slice(1,3))  //between words are print 

let name = "abhishek tyagi"
let newname = name.replace("tyagi", "tyagu")  //replace a word o new word
console.log(newname)

console.log(a.concat("is a friend of ", name))  // joint a string

let b = "       aneesh      "  //we want to remove space 
console.log(b.trim()) //remove extra space

console.log(name[0])
console.log(name[1])

// charater does not change in string
name[0] = 'r' //no this is not possible
