document.write("Hello")

const sum = (a, b, c) => {
  console.log("Yes I am running " + (a + b + c))
  a + b
}

setTimeout(sum, 1000, 1, 2, 7)  // ek sec baad y sum ko print kr dega kitne bhi variable d skte h hum isme

// let a = setTimeout(function() {
//   alert("I am inside of settimeout")
// }, 5000)


// setInterval(function() {
//   alert("setinterval")
// }, 3000)


// let b = prompt("Do you want to run the settimout?")
// if ("n" == b) {
//   clearTimeout(a)
// }
// console.log(a)
