let p = fetch("https://goweather.herokuapp.com/weather/Ny") //new york weather api
p.then((response) => {
  console.log(response.status)
  console.log(response.ok)
  console.log(response.headers)
  // console.log(response.text)  //we run only one file in json and text otherwise error occurs
  return response.json()
}).then((value2) => {
  // if we run rsponse.json then we get javascript file otherwise we get string 
  console.log(value2)
})
