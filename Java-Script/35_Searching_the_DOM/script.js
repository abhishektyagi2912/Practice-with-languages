// Change the card title to red

let ctitle = document.getElementById("firstcardtitle")
ctitle.style.color = "red"

let ctitles = document.querySelectorAll(".card-title")
ctitles[0].style.color = "blue"
ctitles[1].style.color = "red"
ctitles[2].style.color = "green"
console.log(ctitles)

// this is a class of go somewhere
document.querySelector(".this").style.color = "black"  //select only first element 
document.querySelector(".this").style.background = "red"

console.log(document.getElementsByTagName("a"))   //return all the tag name started by a
console.log(document.querySelector(".card").getElementsByTagName("a")) //return all the tag name started by a in card class[0]
console.log(document.getElementsByName("search"))  //dont forget elements ka s 
