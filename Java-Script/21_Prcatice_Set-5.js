// // 1) take an array input from user and add in the array 

// let arr = [1, 2, 3, 4, 5, 6, 7, 83]
// let a = prompt("Enter the number")
// a = Number.parseInt(a) // because it take string
// arr.push(a)
// console.log(arr)

// // 2) keep adding a number until 0 is not entered

// let arr = [1, 2]
// let a
// do {
//   a = prompt("Enter the number")
//   a = Number.parseInt(a)
//   arr.push(a)
// } while (a != 0)
// console.log(arr)

// //3) filter an array in which element is divisble by 10

// let arr = [1, 2, 30, 4, 50, 6, 7, 83, 670]
// let a = arr.filter((a)=>{
//   return a%10==0
// })
// console.log(a)

// //4) square number array creation
// let arr = [1, 2, 30, 4, 50, 6, 7, 83, 670]
// let a = arr.map((a)=>{
//   return a*a
// })
// console.log(a)

//5) use reduce to calculate factorial
let arr = [1, 2, 3, 4, 5]
let a = arr.reduce((a)=>{
  return a*a
})
console.log(a)
