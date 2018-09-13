var express = require("express"); //Basic express importing
var app = express();
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: true}));

app.set("view engine", "ejs");

var campgrounds = [
        {name: "Salmon Creek", image: "https://pixabay.com/get/ea36b70928f21c22d2524518b7444795ea76e5d004b0144293f3c77ca4e4b2_340.jpg" },
        {name: "Granite Hill", image: "https://pixabay.com/get/e835b20e29f7083ed1584d05fb1d4e97e07ee3d21cac104496f6c27fa2eebcbf_340.jpg" },
        {name: "Mountain Goat's Rest", image: "https://pixabay.com/get/e837b1072af4003ed1584d05fb1d4e97e07ee3d21cac104496f6c27fa2eebcbf_340.jpg" }
        
        
];

app.get("/", function(req, res){
    res.render("landing");
});

app.get("/campgrounds", function(req, res){
    
        
        res.render("campgrounds", {campgrounds:campgrounds});
});

app.post("/campgrounds", function(req, res){ //The POST route will allow the user to add new campgrounds 
    //get data from form and add to campgrounds array
    var name = req.body.name;
    var image = req.body.image;
    var newCampground = {name: name, image: image};
    campgrounds.push(newCampground);
    //redirect back to campgrounds page
    res.redirect("/campgrounds"); //The redirect always work as a get request
});

app.get("/campgrounds/new", function(req, res){ //It will show the form, and will send the data to the POST route
    res.render("new.ejs");                      //It will render the form
});


app.listen(process.env.PORT, process.env.IP, function(){
    console.log("The YelpCamp Server Has Started!");
});