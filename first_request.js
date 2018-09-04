var request = require('request');
request('http://www.google.com', function(error, response, body){
    if(!error && response.statusCode == 200){
        console.log(body) //Showing the HTML for the Google home page on the console
    }
})

var request = require('request');
request('http://www.facebook.com', function(error, response, body){ //call back function
//error sent as an argument to receive a message if there'e an error.

if(error){
    console.log('SOMETHING WENT WRONG!')
    console.log(error);
}

else {
    if(response.statusCode == 200){
        //THINGS WORKED!
        console.log(body);
    }
}
    
});