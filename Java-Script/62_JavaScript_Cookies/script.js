console.log(document.cookie) // y sari cookies print krdeta h
document.cookie = "name=harry1122334400"  // y naya cookies create krne k liye 
document.cookie = "name2=harry11223344002"
document.cookie = "name=harry"
let key = prompt("enter your key")
let value = prompt("enter your value")
document.cookie = `${encodeURIComponent(key)}=${encodeURIComponent(value)}`  // template literals ka use krke encode kiya h jst because without encode key don't take =,; etc value 
// and for decode this cokkie key or value use decodeURIComponets(key ka nam copy paste krdena )
console.log(document.cookie)
