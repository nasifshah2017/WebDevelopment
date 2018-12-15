var express               = require("express"),
    mongoose              = require("mongoose"),
    passport              = require("passport"),
    bodyParser            = require("body-parser"),
    User                  = require("./models/user"),
    LocalStrategy         = require("passport-local"),
    passportLocalMongoose = require("passport-local-mongoose")
 
mongoose.connect("mongodb://localhost/auth_demo_app");
var app = express();
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true})); //For Post route
app.use(require("express-session")({
    secret: "Rusty is the best and cutest dog in the world",
    resave: false,
    saveUninitialized: false
}));

app.use(passport.initialize()); //These 2 lines are seeting passport up
app.use(passport.session());    //that we will use on our application, we need these lines anytime we use passport

passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());    //These lines are used for reading the session, Taking data from the session thats encoded
passport.deserializeUser(User.deserializeUser());//And unencoding it, thats the deserialize 

//=================
// ROUTES
//=================


// The root route

app.get("/", function(req, res){  
    res.render("home");
});

//The secret route

app.get("/secret", isLoggedIn, function(req, res){
    res.render("secret");
});

// Auth Routes

//Show the register form
app.get("/register", function(req, res){
    res.render("register");
});

//Handling user sign up
app.post("/register", function(req, res){
    req.body.username;
    req.body.password;
    User.register(new User({username: req.body.username}), req.body.password, function(err, user){
       if(err){
           console.log(err);
           return res.render('register');
       } 
       passport.authenticate("local")(req, res, function(){
           res.redirect("/secret");
       });
    });
});

// LOGIN ROUTES

//render login form
app.get("/login", function(req, res){
    res.render("login");
});

//Login logic : Setting up the Login POST route
//middleware
app.post("/login", passport.authenticate("local", {
    successRedirect: "/secret",
    failureRedirect: "/login"
}), function(req, res){
});

app.get("/logout", function(req, res){
    req.logout();  //Logging the user out
    res.redirect("/"); //Redirecting the logged out user to the home page
});

//Middleware

function isLoggedIn(req, res, next){
    if(req.isAuthenticated()){
        return next(); //If things are fine and authenticated we move to next Middleware
    }
    res.redirect("/login"); //If things are not fine we move to the login page
}


app.listen(process.env.PORT, process.env.IP, function(){
    console.log("server started....");
});