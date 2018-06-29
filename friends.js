var express = require("express"); //Import "Express"
var app = express(); //Use variable to execute "Express"
var bodyParser = require("body-parser"); //Requiring body-parser

/** Telling "Express" to use body-parser **/

app.use(bodyParser.urlencoded({extended:true}));

/** Setting route files to ejs format **/

app.set("view engine", "ejs");

/** Friends' Array **/

var friends = ["Tony", "Miranda", "Justin", "Pierre", "Lily"];

/** Setting up ROOT route **/

app.get("/", function(req, res){
    res.render("home");
});

/** Setting the Post route to add new friends **/

app.post("/addfriend", function(req, res){
    var newFriend = req.body.newfriend; 
    friends.push(newFriend);
    res.redirect("/friends"); //The command will update the page after adding new friend
});

/** Setting up the Friends' template **/

app.get("/friends", function(req, res){
    res.render("friends", {friends: friends}); //In "friends: friends" the first friends can be anything but the
    //But the second one refers to the variable friends
});

/** Listening post requests **/

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Server started!!!");
});
