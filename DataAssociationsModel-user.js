var mongoose = require("mongoose");

// USER - email, name

var userSchema = new mongoose.Schema({
    email: String,
    name: String,
    posts: [
            {
                type: mongoose.Schema.Types.ObjectId, //Mongoose Object IDs 
                ref: "Post" //The IDs belonging to Posts
            }
        ]
});

module.exports = mongoose.model("User", userSchema);
