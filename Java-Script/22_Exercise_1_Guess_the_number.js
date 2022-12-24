let ans = Math.floor(Math.random()*100) 
let guess = 0
let a
console.log("Let's start the game Guess The Number")
do {
  a = prompt("Guess the correct number")
  if (a<ans) {
    console.log("Try to guess the number greater then current guess")
    guess++;
  }
  else if (a>ans) {
    console.log("Try to guess the number less then current guess")
    guess++;
  }
  else {
    alert("You Enter the correct number")
  }
} while (a!=ans)

console.log("The correct number is"+ ans + " you take " + guess+ " guesses ")
let final = 100-guess
console.log("Your remaining guess is " + final)
