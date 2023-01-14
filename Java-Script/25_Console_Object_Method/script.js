console.log("log")
console.info("info")
console.warn("warn")
console.error("err")
// assertion is used to check wheter a condition is true or false
console.assert("err" != false)
console.assert("err" == false)

let obj = {a:1,b:2, c:3}
// table is used to make a table of key value pair
console.table(obj)
console.table(console)

/// give the time taken to reach time to time end with same lable
console.time("forLoop")

for (let i = 0; i < 500; i++) {
  console.log(233)
}

console.timeEnd("forLoop")

console.time("whileLoop")

let i = 0;
while (i < 500) {
  console.log(233)
  i++;
}

console.timeEnd("whileLoop")
