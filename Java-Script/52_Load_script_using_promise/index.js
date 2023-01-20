// this is use for reject and resolve the data 
let p1 = new Promise((resolve, reject) => {
  // resolve(56);  if we use this this run instant
        setTimeout(() => {
                console.log("Resolved after 2 seconds")
                resolve(56)
        }, 2000)
})
// promise arec ruun parrallely
//after uppe code next code is execute in then 
p1.then((value) => {
        console.log(value)
        return new Promise((resolve, reject) => {
                setTimeout(() => { resolve("Promise 2") }, 2000)
        }) 
}).then((value) => {
        console.log("We are done")
  // it return immediately 
        return 2  
}).then((value)=>{
        console.log("Now we are pakka done")
})
