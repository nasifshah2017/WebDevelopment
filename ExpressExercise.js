var express = require("express");
var app = express();

/** "/" => "Hi there! Welcome to my assignment" **/

app.get("/", function(req, res){
    res.send("Hi there, welcome to my assignment!")
});

/** "/speak/pig" => "OINK!" **/

app.get("/speak/pig", function(req, res){
    res.send("The Pig says 'OINK!' ");
});

/** "/speak/cow" => "MOO!" **/

app.get("/speak/cow", function(req, res){
    res.send("The Cow says 'MOO!' ");
});

/** "/speak/dog" => "WOOF WOOF!" **/

app.get("/speak/dog", function(req, res){
    res.send("TheDog says 'WOOF WOOF!' ");
});

/** "repeat/hello/3" should print "hello hello hello" **/

app.get("/repeat/hello/:number", function(req, res){
    var number = req.params.number;
        for(var i = 0; i <= number; i++){
            res.send("HELLO");
        }
});

/** "repeat/blah/2" should print "blah blah" **/

app.get("/repeat/blah/:number", function(req, res){
    var number = req.params.number;
        for(var i = 0; i <= number; i++){
            res.send("BLAH");
        }
});

/** For writing gibberish URL address we will get
 "Sorry page not found... What are you doing with your life" **/
 
 app.get("*", function(req, res){
     res.send("Sorry page not found... What are you doing with your life");
 });

// Tell Express to Listen for Requests (Start Server)

/** Listen to a particluar PORT and IP address **/

app.listen(process.env.PORT, process.env.IP, function(){ /** process.env.PORT returns the identity number of Cloud9's server (port) **/
        console.log("Server has started !!!")            /** process.env.IP returns the IP adress of Cloud9's server (port) **/
});



