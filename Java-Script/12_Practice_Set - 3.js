//Q-1) Take an input when the user does not hit the corrrect number
/*
let i
let n = 4
while(i!=n){
  console.log("Try again")
  i = prompt("Enter a number")
}
console.log("You have entered a correct number")
*/
//Q-2) Find mean using function
const mean = (a,b,c)=>{
  return (a+b+c)/3
}
console.log("Mean is",mean(2,3,4))

//Q-3) Access the object value
let marks = {
  abhishek: 90,
  shubham: 9,
  lovish: 56,
  Monika: 4
}

for(let i in marks){
  console.log("the marks of " + i + " are "+ marks[i])
}
// Object.keys(marks) this is the way to access object
for (let i = 0; i < Object.keys(marks).length; i++) {
  // console.log("The marks of " + Object.keys(marks)[i] + " are " + marks[Object.keys(marks)[i]])
}
