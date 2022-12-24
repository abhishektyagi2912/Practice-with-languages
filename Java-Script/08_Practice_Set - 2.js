//Q-1) Check your age is between 10 and 20
/*
let a = prompt("Enter your age")
a = Number.parseInt(a);
if(a >= 10 && a < 20){
  console.log("Your age lie betwwen 10 or 20 ")
}
else{
  console.log("Your age does not lie between 10 and 20 ")
} 
*/

//Q-2) Switch Case of age
/*
let a = prompt("Enter your age" ) // return a string and prompt take an string 
// a = Number.parseInt(a);
switch(a){
  case '12':
    console.log("Your age is 12")
    break;
  case '13':
    console.log("Your age is 13")
    break;
  case '14':
    console.log("Your age is 14")
    break;
  case '15':
    console.log("Your age is 15")
    break;
  default:
    console.log("Your age is not special ")
}
*/

//Q-3) Your age is divisible by 2 and 3 
/*
let num = prompt("What is your age?")
num = Number.parseInt(num)
if (num % 2 == 0 && num % 3 == 0) {
  console.log("Your number is divisible by 2 and 3")
}
else {
  console.log("Your number is not divisible by 2 and 3")

*/

//Q-4) Check if you are eligible to drive 

let a = prompt("Enter your age")
a = Number.parseInt(a)
let age = a>18 ? "Eligible" : "Not Eligible"
console.log(age)
