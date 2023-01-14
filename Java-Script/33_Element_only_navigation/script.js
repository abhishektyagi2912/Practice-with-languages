//this run only when no color is given to background in css 
const changeBgRed = () => {
  document.body.firstElementChild.style.background = "red"
}
// if we call changebgred in console then color is change

let b = document.body
console.log("First child of b is: ", b.firstChild)
console.log("First Element child of b is: ", b.firstElementChild)
