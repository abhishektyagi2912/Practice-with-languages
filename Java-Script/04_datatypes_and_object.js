//nn ss bb u are the primitive data types in java script -primitive
let a = null;
let b= 124;
let c= "Abhishek"
let d= Symbol("I am a symbol")
let e= true;
let f= BigInt(567)+BigInt(3)
let g= undefined // or we declare it as let g by default it is undefined
console.log(a, b, c, d, e, f, g)
console.log(typeof d)

// objects in javascript :- non primitve datatypes
const item = {
  "abhishek" : true,
  "abhi": false,
  "tyagi": 67,
  "name":undefined
}
console.log(item["abhishek"])
console.log(item.name)  // another way to access the word in object
console.log(item['tyagi'])
