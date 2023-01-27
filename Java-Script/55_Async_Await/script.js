async function abhishek() {
  let a = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("27");
    }, 2000)
  })
  let b = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("21");
    }, 5000)
  })

  console.log("Fetching A function Please wait ....");
  let A = await a;
  // y krta h wait mtlb parrallel execution ko rok deta h 
  console.log("Fetching A function is fetched " + A)
  console.log("Fetching B function please wait....");
  let B = await b;
  console.log("Fetching A function is fetched " + B)
  return[A,B]
}

// console.log("Hey i'm waiting ....")  //it run in parrallel it does not wait fr the function

const me = async() => {
  console.log("Hey i'm waiting ....")
}

// if we use this then it wait when abhishek function is not executed
const main1 = async () => {
  console.log("Welcome to weather control room")
  let a = await abhishek()
  let b = await me()
}
main1()
// abhishek()
