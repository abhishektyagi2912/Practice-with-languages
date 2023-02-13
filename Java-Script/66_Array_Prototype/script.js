let a = {
  name2: "Abhi",
  language: "JavaScript",
  // method 
  run: () => {
    alert("self run")
  }
}
console.log(a)


let p = {
  run: () => {
    alert("run")
  }
}
//agr vo us object m na mila to uske prototype m milta h 
// agr vo prtotype is the next storage kinda

// here we changte the name 
p.__proto__ = {
  name: "Rishi"
}

// set p is prototype of a 
a.__proto__ = p

//directly we call the method 
a.run()

// a.name is property and name are not thier in a then javascrpit checks it in it's property
console.log(a.name)
