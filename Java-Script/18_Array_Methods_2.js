// let num = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// let num_more = [11, 12, 13, 14, 15, 16, 17, 18, 19]
// let num_even_more = [211, 212, 213, 214, 415, 416, 417, 418, 419]

// console.log(num.length)
// console.log(num_more.length)

//delete 

// delete num[0]    // y dlt krta h pr space rkhta hai
// console.log(num)
// console.log(num.length)

//Concat

// let newArray = num.concat(num_more, num_even_more)
// console.log(newArray)

// sort method

let compare = (a, b)=>{
  return b - a
}
let num = [551, 22, 3, 14, 5, 6, 7, 8, 229]
num.sort(compare) ///sort in decreasing order
num.reverse()     //so use reverse 
console.log(num)

// Splice and Slice
let numb = [551, 22, 3, 14, 5, 6, 7, 8, 229]
let deletedValues = num.splice(2, 4, 1021, 1022, 1023, 1024, 1025)
console.log(numb)
console.log(deletedValues)

// let newNum = num.slice(3)
let newNum = numb.slice(3, 5)
console.log(newNum)
