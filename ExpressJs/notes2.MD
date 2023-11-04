--> Client and Server

<!-- client contain cokkie and server contain session and both are data -->
<!-- Like humko koi dat abhejna h client s server m or humko vo data store krnvana h server m to humko session use krna pdega -->
<!-- Session is a server side data and cookie is a client side data -->
<!-- If we want to save data in front end then we use cookie and if we want to save data in backend then we use session. -->
<!-- And most safe is session wrt cookie obv because of it is readble kind  -->

--> How to create a session?

<!-- to deal with session we have to import a module called ==> npm i express-session -->
<!-- and then we have to use it in our app.js file -->
<!-- then require it and use it like this:-
const session = require('express-session');

app.use(session({
  resave: false,
  saveUninitialized : false,
  secret: "secretthisisthekey"
}));

"secret" we write anything we want and this is the secret string with the help of that your data is saved AND 
"resave" is used if server value does not change then do not save again it will remove the load from server AND
"saveUninitialized" many times some data does not have name and does not initialise then it do not save it save the data -->

--> Now we have to create a session 

<!-- to create a session we have to use req.session.hrtghABhishek = "Anything" in "/" route of index.js-->


--> How to dlt a session?

<!-- router.get("/unban",function(req,res){
  req.session.destroy(function(err){
    console.log("User Unbanned");
    res.send("User Unbanned");
  });
}); -->

<!-- session is a object and we can dlt it like this req.session.destroy()  -->


**** IMP 
<!-- If we create a session in any route then we can use it in any route of that or index.js file -->
<!-- console.log(req.session); // to see the session -->