var loader = document.getElementById("preloader")

window.addEventListener("load", function(){
  loader.style.display = "none"
})

submit.addEventListener("click", (e) => {
  if (todo.value != "" && desc.value != "") {

    let todoc = todo.value // to get the value
    let descc = desc.value
    localStorage.setItem("todo", JSON.stringify([todoc, descc]))
    // console.log(e)
    title.innerHTML = `
  
  <div class="card" style="width: 18rem; ">
      <div class="card-body">
        <h5 class="card-title">${todoc}</h5>
        <h6 class="card-subtitle mb-2 text-muted">${descc}</h6>
      </div>
  `
  }
  else {
    alert("Enter some task")
  }
  e.preventDefault()


  todo.value = ""
  desc.value = ""

})

deletet.addEventListener("click", (e) => {
  e.preventDefault()  // this prevent the page to reload
  localStorage.removeItem("todo") // this is the specific key 
  title.innerHTML = " "
})

