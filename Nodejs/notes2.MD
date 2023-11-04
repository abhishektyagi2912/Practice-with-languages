--> What is diffrence between node and express?

<!-- with the help of node we can create server and express is a framework of node which is used to create server and routing, handle request mean we use feature of server. -->
<!-- with node we use express but with express we can not use node -->
<!-- but in node thier is feature to make server with HTTP module but this is bit difficult to code in node so we use express to make server and routing and handle request. -->
 <!-- but but express at the end use the HTTP module of node to make server and routing and handle request. -->

 ---> What is dyanamic routing?
 <!-- Aisa koi bhi route jiska ek hi part change hota h usko dyanamic route kehte h. like facebook.com/username -->
 <!-- here username is dyanamic route. and we use facebook.com/:username to make dyanamic route. : this represent that iske baad jo bhi ayega vo change ho skta-->
<!-- after the semicolon we can write anything like name, id, etc and it called as params. and we can access it by req.params.name, req.params.id, etc. -->

---> What is template engine?
<!-- Template engine is used to create dynamic HTML pages. -->
<!-- here we use ejs and html k pass power nhi hoti calculate krne ki but ejs has option to calculate and show result in html page. -->

---> How to setup ejs?

1) install ejs
<!-- npm install ejs -->

2) configure ejs
<!-- app.set('view engine', 'ejs'); -->

3) create views folder and create ejs file in it.
<!-- views folder is used to store all ejs file. -->

4) use render or replace send with render 
<!-- res.render('index'); ==>  do not use .ejs extensionin render function. -->

---> How to pass data from server to ejs file?
<!-- res.render('index', {title: 'Home'}); here title is key and Home is value mean in html page where tittle is thier it will replace with Home. -->
<!-- then we wrap the title like <%= title%>in html page. -->

