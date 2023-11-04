---> what is middleware?
<!-- middleware is a function that run before any router, mtllb kisi bhi route s phele agr humko koi kaam krvana h to hum iska use kr skte h
eg -> if we go to any route then we want to check that user is logged in or not, if user is logged in then we want to show the page otherwise we want to redirect to login page -->


----->use kese krte middleware ko that is use 

<!-- app.use(function(req,res,next){
    console.log("this is middleware");
    next();
}) -->

 <!-- app.use(function(req,res,next) ===> take three function and next is a function that is used to call next middleware of routes -->

--> how many middleware we can use in a route?
<!-- we make middleware as much as we want and we can use it in any route we want -->

---> why we use next function in middleware?
<!-- next function is used to call next middleware of routes because if apna middlewaqre chlgya then request are jam and do not go to next route  -->
