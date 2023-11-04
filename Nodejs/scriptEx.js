
const express = require('express');
const app = express();

app.set('view engine', 'ejs');
app.use(express.static('./public'))

// app.use(function(req,res,next){
//     console.log("this is middleware");
//     next();
// })

app.get('/', (req, res) => {
    res.render("index", { title: "KK" });
})

app.get('/profile', (req, res) => {
    res.send("Hello");
})
// dynamic routing
app.get('/profile/:username', (req, res) => {
    res.send(`you are looking at the profile of ${req.params.username} `);
})

app.get('/error', (req, res,next) => {
    // this code search error handler in all over the code
    throw new Error("Something went wrong");
})

// error handler
app.use(function errorHandler(err, req, res, next) {
    if (res.headersSent) {
        return next(err)
    }
    res.status(500)
    res.render('error', { error: err })
});

// console.log("server is running")
app.listen(3000, () => console.log("server is Listening on port 3000"));   
