// Array map method
let arr = [45, 23, 56, 60]
// map return some value because it create a new array
let a = arr.map((value, index, array) => {
  // console.log(value, index , array)
  return value + 1
})
console.log(a)

// Array filter method
let b = arr.filter((value) => {
  return value < 55
})
console.log(b, arr) //does not change original array

// Array reduce method
let c = arr.reduce((a, b) => {
  return a + b
})
console.log(c)

// array reduce with new method
const add = (h,h1) =>{
  return h*h1;
}
let newarr = arr.reduce(add) // function as variable 
console.log(newarr)
