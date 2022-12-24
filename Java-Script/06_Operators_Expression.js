console.log("Operators in js")

let a = 10;
let b = 4;
//Airthmetic operaors
console.log("a + b = ", a + b)
console.log("a - b = ", a - b)
console.log("a / b = ", a / b)
console.log("a ** b = ", a ** b)
console.log("a % b = ", a % b)
console.log("++a = ", ++a) //var hua 11
console.log("a++ = ", a++) //12 hua return 
console.log("--a = ", --a) //aate hi 11 hogya
console.log("a-- = ", a--) //11 print hua then 10 hua baad me
console.log("a = ", a) // 10 hu aprint
console.log("a-- = ", a--) // 10 hua print last m ayega 9
console.log(a)

//Assignment Operators
let assignment = 1;
assignment += 5 // same as assignment = assignment + 5
console.log("a is now = ", assignment)  //assignment is 6 here 
assignment -= 5 // same as assignment = assignment - 5
console.log("a is now = ", assignment) //assignment is 1 here
assignment *= 5 // same as assignment = assignment * 5
console.log("a is now = ", assignment) // assignment is 5 here
assignment /= 5 // same as assignment = assignment / 5
console.log("a is now = ", assignment) ///5/5 =1 ans

// Logical Operators
let x = 5;
let y = 6;
console.log(x<y && x==5)
console.log(x>y || x==5)
console.log(!false)
console.log(!true)

// Comparison Operators 
let comp1 = 6;
let comp2 = 7;
console.log("comp1 == comp2 is ", comp1 == comp2)
console.log("comp1 != comp2 is ", comp1 != comp2)
console.log("comp1 === comp2 is ", comp1 === comp2)  //false because equal to hai type is also same like string ==string and value 6==6 both are equal then it is true
console.log("comp1 !== comp2 is ", comp1 !== comp2)
console.log("comp1 > comp2 is ", comp1 > comp2)
