--> How to use cookies?

<!-- to use cookies we have to install a module called ==> npm i cookie-parser -->
<!-- but is u use express generator then it is already installed -->
<!-- then we have to use it in our app.js file -->
<!-- then require it and use it like this:-
const cookieParser = require('cookie-parser');
app.use(cookieParser()); -->

--> How to set cookies?

<!-- Cokkies are set in browser then cokkie are send in response header to the browser and then browser store it in the browser memory. -->
<!-- Cokkie is method then we give two things in it one is name and other is value. -->
<!-- res.cookie("name","value"); -->

--> How to get cookies?

<!-- Assume cokkie are saved from browser and we see it from server side then we will find it in request header. -->
<!-- so we use req.cookies to get the value of cokkie. -->
<!--if we get the value of cokkie then we have to use it like this:- req.cookies.name; -->

--> How to delete cookies?

<!-- I say res to delete the cokkie and then send it to the browser and then browser delete it from the browser memory. -->
<!-- res.clearCookie("name"); -->