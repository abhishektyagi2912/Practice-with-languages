// 1) Change the color with the user reccomdation

// let color = prompt("Enter the page background color")
// document.body.style.background = color

// 2) If entered number is greater then 4 then locate to google 

// let a = prompt("Enter any number")
// a = Number.parseInt(a)

// if(a>4){
//   location.href = "https://google.com"
// }
// else{
//   alert("See you again, Wrong")
// }

// 3) Take an age to user and say he csn drive or not

let runAgain = true

const canDrive = (age) => {
  return age >= 18 ? "Yes" : "NO"
}
while (runAgain) {
  let age = prompt("Enter your age")
  age = Number.parseInt(age)
  if (age < 0) {
    console.error("Please enter a valid age");
    break;
  }

  if (canDrive(age)) {
    alert("Yes you can drive")
  }
  else {
    alert("You cannot drive")
  }
  runAgain = confirm("Do you want to play again?")
}
