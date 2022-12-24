console.log("var let and constant")
let a=67
a=12 ///this is update an let
const author ="Abhishek Tyagi"  //not be updated 
// let author = 5 //not updated thorws an error
var b="Abhishek";
var c= null
var d= undefined

{
  var b= 'this'
  console.log(b)
}/// var are not blocked-scoped variable 
console.log(b)

{
  let a=26
  console.log(a)
}/// let is blocked scoped variable means in block we change it does not change outside of it 
console.log(a)
