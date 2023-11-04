// hERE WE LEARN IN NODE JS ABOUT MODULES export and import
// var a = 12
// var b = 5

// // console.log(a + b)
// module.exports = b


// Here we learn about the express module
const express = require('express');
const app = express();

app.use(function(req,res,next){
    console.log("this is middleware");
    next();
})

app.get('/', (req, res) => {
    res.send("i want something very good noo but why ");
    console.log(req.query);
})

app.get('/profile', (req, res) => {
    res.send("login page to dhunle phele");
})

console.log("server is running")
app.listen(3000);   
