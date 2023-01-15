let x = document.getElementsByTagName('span')[0]
console.log(x)
let y = document.getElementsByTagName('span')[0]
console.dir(y)
console.log(document.body.firstChild.nodeName) 
console.log(document.body.firstElementChild.nodeName)

// Give the first element in innner class
first.innerHTML 
first.innerHTML = "<i>hey I am italic</i>" 

// Give the all elmenet that are written in first class
first.outerHTML 
first.outerHTML = "<div>hey</div>"

//Return first child data what it is 
document.body.firstChild.data 

// textContent give the all content are written in DOM or html 
console.log(document.body.textContent)

// hidden is used to show hide the element
first.hidden = true
