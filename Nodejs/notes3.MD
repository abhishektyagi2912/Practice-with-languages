---> How to setup static files?
<!--1. static files are those files which are not change like css,frontendjs, images, etc. -->
<!-- 2. create "public" folder and put all static files in it. -->
<!-- 3. Configure the express static by using middleware app.use(express.static('./public')) then we link css in ejs then public are automaticlly attach before the path so we only define the path that is inde the public like (../style/style.css or /style/style.css) not ../public/style/style.css -->
