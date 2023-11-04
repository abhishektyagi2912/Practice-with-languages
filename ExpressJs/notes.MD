---> What is express generator?

<!-- Like humko har ek project k starting m sb kuch setup krna hota h like const variable app.use etc. Toh express generator humko ye sb setup krke deta h so that hum directly apna code likh ske. And it make all the folder structure for us and it will also write the basic code -->


---> How to install or setup express generator?

<!-- npm install express-generator -g ==> -g means globally -->
<!-- open cmd file anywhere where you want to create your project -->
<!-- then run this command ==> express appname --view=ejs -->

<!-- now use two commands
1. cd appname
2. npm install -->

<!-- now you open the file and run nodemon only because some code is in bin file and some in app.js file so we have to run nodemon only -->


--> Is their any changes in this file?

<!-- Yes, we have to change the port number in bin/www file because by default it is 3000 but we have to change it to 8000 because we are using 3000 for react if you use it-->
<!-- app.render ==> is app.router you can't change this because you chod dega phir itne errors honge -->

--> How to setup mongodb?

<!-- create a routes folder and create a file in it and name it as users.js here we create and setup mongodb and mongodb is non relational database hota h-->
<!-- npm install mongodb -->
<!-- npm install mongoose -->
<!-- reuire set up and conntion
<!-- make schema -->
<!-- create model and export -->

--> What is asyncronous?

<!-- asyncronous function is that function which can do multiple task at a time -->
<!-- but asyncronus is wait and it execute the syncronous function first and then it execute the asyncronous function -->
<!-- in mongodb (name of imprt).crete() is asyncronous function -->
<!-- then use await keyword before it -->
<!-- important if mongo create a user then it return the user then we have to store it then create a variable and store it in it and then return it -->


--> CRUD operation in mongodb?

 // Create return object

<!--router.get('/create', async function (req, res, next) {
  const createdUser = await User.create({
    //order does not matter
    username: 'johndoe',
    name: 'John Doe',
    age: 27
  });
  res.send(createdUser);
}); -->

// Read return array of object

<!--router.get('/read', async function (req, res, next) {
  const users = await User.find();
  res.send(users);
}); -->   

// Read return single object and if user not found then it return null or blank

<!-- router.get("/readOne", async function(req,res,next){
  const alluser = await User.findOne({username: 'johndoe'});
  res.send(alluser);
}); -->


// Update return object and it update the first object which it find and if it not find then it return null or blank

<!-- router.get('/update', async function (req, res, next) {
  const updatedUser = await User.updateOne({
    username: 'johndoe'
  }, {
    name: 'John Doe',
    age: 28
  });
  res.send(updatedUser);
}); -->


// Delete return object and it delete the first object which it find and if it not find then it return null or blank

<!-- router.get("/dlt", async function(req,res,next){
  const dltuser = await User.findOneAndDelete({username: 'johndoe'});
  res.send(dltuser);
}); -->

