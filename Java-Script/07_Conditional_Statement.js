let a = prompt("Enter your age")
a = Number.parseInt(a);  // converting string to integer 
if(a<0){
  alert("This is invalid age")
}
else if(a<9){
  alert("Ypu are a kid now ")
}
else if(a<18 && a>=9){
  alert("You are kid try next time ")
}
else{
  alert("You are valid")
}

// console.log("Done")

console.log("You can", (a<18? "not drive": "drive")) //ternary operator
