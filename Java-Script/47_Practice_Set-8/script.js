// Q-1) make button and give diffrents commands   
// ANs in html page

// Q-2) Bookmark the page or add links
//ANS in html page

// q-3) again q-2 but with js
// document.getElementById("google").addEventListener("click", function() { 
//   window.location = "https://www.google.com";
// win.focus();
// })

//Q-4) Fetch data every 5 sec  // not yet imp we read in next videos
// const fetchContent = async (url) => {
//   con = await fetch(url);
//   let a = await con.json()
//   return a;
// }

// setInterval(async function() {
//   let url = "https://jsonplaceholder.typicode.com/todos/1"
//   console.log(await fetchContent(url))
// }, 3000)

//q-5) MAke bulb
setInterval(async function() {
  document.querySelector("#bulb").classList.toggle("bulb")
}, 300)
