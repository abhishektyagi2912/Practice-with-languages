let a = document.getElementsByClassName("container")[0]

// or we can also create onclick or wirte a js directyly in html file go and see 
a.onclick = () => {
  let b = document.getElementsByClassName("container")[0]
  b.innerHTML = "Hello World!"
}
