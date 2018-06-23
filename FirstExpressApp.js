/** console.log("OUR EXPRESS APP WILL GO HERE!"); **/
/** Now we need to download Express App package from https://expressjs.com/ **/
/** Using npm install express **/

var express = require("express");

/** We cannot execute "Express" as just express() **/
/** because it has lot of diffrent methods inside it **/
/** We can define it as a variable **/

var app = express();

/** Everything we do with Express will be app.SomeMethods **/

/** Now we will define our very first ROUTE **/

// "/" => "Hi there!"

app.get("/", function(req, res){
    res.send("Hi there!"); /** Responding with text to make it work we need port to "listen" on **/ 
    
});

/** Argument "req" represents all the information on the request that's made by the user **/
/** Argument "res" represents all the information on the response that's sent by server to the user **/
// "/bye" => "Goodbye!"
app.get("/bye", function(req, res){
    res.send("Goodbye!!");
});
// "/dog" => "MEOW!"
app.get("/dog", function(req, res){
    res.send("MEOW!!!");
});

app.get("/r/:subredditName", function(req, res){
    var subreddit = req.params.subredditName;
    res.send("WELCOME TO THE " + subreddit.toUpperCase() +  " SUBREDDIT!");
});

app.get("/r/:subredditName/comments/:id/:title/", function(req, res){
    res.send("WELCOME TO THE COMMENTS PAGE!");
});

/** This ROUTE will show "YOU ARE A STAR!!!" for anything we write after our URL than the objects we defined **/

app.get("*", function(req, res){
    res.send("YOU ARE A STAR!!!");
});
 



// Tell Express to Listen for Requests (Start Server)

/** Listen to a particluar PORT and IP address **/

app.listen(process.env.PORT, process.env.IP, function(){ /** process.env.PORT returns the identity number of Cloud9's server (port) **/
        console.log("Server has started !!!")            /** process.env.IP returns the IP adress of Cloud9's server (port) **/
});

/** Cloud9 hosts our site on their own URL, which we can find by clicking the preview and the preview running application **/
            
/** To install type $ npm install express on console **/   
/** The URL: "https://my-first-web-dev-proj-nasifshah.c9users.io/bye" will output "Goodbye!!"" **/
/** The URL: "https://my-first-web-dev-proj-nasifshah.c9users.io/" will output "Hi there" **/
/** The URL: "https://my-first-web-dev-proj-nasifshah.c9users.io/dog" will output "MEOW!!!" **/

/** nasifshah:~/workspace $ cd IntroToExpress

nasifshah:~/workspace $ cd IntroToExpress

nasifshah:~/workspace/IntroToExpress $ cd FirstExpressApp

nasifshah:~/workspace/IntroToExpress/FirstExpressApp $ node FirstExpressApp.js

Server has started !!!

^C
nasifshah:~/workspace/IntroToExpress/FirstExpressApp $ node FirstExpressApp.js

Server has started !!!

^C
nasifshah:~/workspace/IntroToExpress/FirstExpressApp $ node FirstExpressApp.js

Server has started !!!

^C
nasifshah:~/workspace/IntroToExpress/FirstExpressApp $ node FirstExpressApp.js

Server has started !!!

^C
nasifshah:~/workspace/IntroToExpress/FirstExpressApp $ 

nasifshah:~/workspace/IntroToExpress/FirstExpressApp $ node FirstExpressApp.js

Server has started !!!

^C
nasifshah:~/workspace/IntroToExpress/FirstExpressApp $ node FirstExpressApp.js

Server has started !!!

[ subredditName: 'hello' ]

[ subredditName: 'puppies' ]

^C
nasifshah:~/workspace/IntroToExpress/FirstExpressApp $ node FirstExpressApp.js

Server has started !!!

^C
nasifshah:~/workspace/IntroToExpress/FirstExpressApp $ 

nasifshah:~/workspace/IntroToExpress/FirstExpressApp $ node FirstExpressApp.js

Server has started !!!

^C
nasifshah:~/workspace/IntroToExpress/FirstExpressApp $ node FirstExpressApp.js

Server has started !!!

^C
nasifshah:~/workspace/IntroToExpress/FirstExpressApp $ node FirstExpressApp.js

Server has started !!! **/
