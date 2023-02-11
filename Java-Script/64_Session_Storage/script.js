// sessionStorage.getItem("name")
// sessionStorage.clear()
// sessionStorage.removeItem("name")
// sessionStorage.setItem("name", "harry")
// sessionStorage.removeItem("name")

// sa,e as local storage but it does not store the data if page opens in new tab or reopens 


// this is use for send the data to one page to another run in two tabs you get it 
window.onstorage = (e) => {
        alert("changed")
        console.log(e)
}
