let a = [1, 2, 3, 4, 5, 6]
let num = a.toString() //this convert into an string
console.log(num, a)

let c = a.join(" and ") // join the array and return the typeof string
console.log(c, typeof c)

let d = a.push(56)  // return the size of an array and add element into the last 
console.log(a, d, typeof d)

let e = a.pop() // pop out last element and return the poped element
console.log(a, e)

let f = a.shift()  // remove the first element of an array 
console.log(a, f, typeof f)

let g = a.unshift(0)
console.log(a, g, typeof g)
