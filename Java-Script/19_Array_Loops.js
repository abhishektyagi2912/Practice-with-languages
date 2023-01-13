let num = [3, 5, 1, 2, 4]

// for(let i=0;i<num.length;i++){
//   console.log(num[i])
// }

// for each loop
num.forEach((element)=>{
  console.log(element*element)
})

// Array from
let a = "Abhi"
let b = Array.from(a);
console.log(b)

// for of loop
for(let item of num){
  console.log(item)
}

// for in loop
for(let i in num){
  console.log(i)
  console.log(num[i])
}
