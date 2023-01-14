alert("Enter the value of a!")
let a = prompt("Enter a here", "578") //default prompt is given 
a = Number.parseInt(a)
alert("You entered a of type " + (typeof a))  // this shows type of a which is number
let write = confirm("Do you want to write it to the page") //it return true or false 
if (write) {
  // this fumction call write the document 
  document.write(a)
}
else {
  document.write("Please allow me to write")  
}
