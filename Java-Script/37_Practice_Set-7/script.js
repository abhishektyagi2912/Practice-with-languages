// 1) change th ecolor of navbar with the help of java script
document.getElementsByTagName("nav")[0].firstElementChild.style.color = "red"

//2) change the color of first child and last child

document.getElementsByTagName("nav")[0].firstElementChild.style.color = "green"
document.getElementsByTagName("nav")[0].lastElementChild.style.color = "green"

//3) CHange background of all li tag
Array.from(document.getElementsByTagName("li")).forEach((element) =>{
  element.style.background = "cyan";
})

// ALl closest ,match or contain only show nearest elemnt no function is their to show farthest element
