// Add first n natural number
/*
let sum = 0
let n = prompt("Enter the range")
n = Number.parseInt(n)
for(let i=1; i<=n; i++){
  sum+=i;
}
console.log(sum)
*/

// Create an object an access
let obj={
  'abhishek':18,
  'tyagi':19,
  'is':20,
  'best':21,
  'coder':22
}
//this is for in loop
for(let a in obj){
  console.log("Number of the " + a + " are "+ obj[a] )
}
//this is for off loop
//this is used for access the element and print the word by word
for(let b of "Harry"){
  console.log(b)
}
