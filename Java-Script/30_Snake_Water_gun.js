alert("Welcome to the snake-water-gun game")
let runagain;
do {
  let a = Math.floor((Math.random() * 3) + 1)
  let comp;
  if (a == 1) {
    comp = "s"
  }
  else if (a == 2) {
    comp = "w"
  }
  else {
    comp = "g"
  }

  let b = prompt("Please enter S, W or G ")
  if (b == "s") {
    if (comp == "s") {
      alert("Game draw computer choose s")
    }
    else if (comp == "w") {
      alert("You won the match computer choose w")
    }
    else {
      alert("You loss the match computer choose g")
    }
  }
  else if (b == "g") {
    if (comp == "s") {
      alert("You won the match computer choose s")
    }
    else if (comp == "w") {
      alert("You loss the match computer choose w")
    }
    else {
      alert("Game Draw computer choose g")
    }
  }
  else if (b == "w") {
    if (comp == "s") {
      alert("You loss the game computer choose s")
    }
    else if (comp == "w") {
      alert("Game Draw computer choose w")
    }
    else {
      alert("You won the game computer choose g")
    }
  }

  runagain = confirm("Do you want to play again")

} while (runagain)
