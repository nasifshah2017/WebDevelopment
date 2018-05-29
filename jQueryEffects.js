//alert("CONNECTED");
//Divs will fade out when the button is clicked
//Divs fade out within a second as we didn't provide any
//argument in the fadeOut() function

//$("button").on("click", function(){ 
// $('div').fadeOut(); //Built in fadeOut function
//})

//Divs take 1000ms to fade out after button clicked

//$("button").on("click", function(){ 
// $('div').fadeOut(1000); //Built in fadeOut function
// });

//Divs take 1000ms to fade out 
//but the console gives output right 
//after button clicked it doesn't wait
//1000ms to show the message

//$("button").on("click", function(){ 
// $('div').fadeOut(1000); //Built in fadeOut function
// console.log("Fade Completed!");
//});

//To sort that problem we create a function
//inside the fadeOut() built in function
//and place the console.log there

//$("button").on("click", function(){ 
// $('div').fadeOut(1000, function(){ //Built in fadeOut function
// console.log("Fade Completed!");
// });
//});

//The function remove the divs after 
//putting the remove function inside 
//the fadeOut() function

//$("button").on("click", function(){ 
//$('div').fadeOut(1000, function(){ //Built in fadeOut function
// $(this).remove(); //"this" refers to the divs
// });
//});

//The function brings back the divs
//from dissappearance

//$("button").on("click", function(){ 
//$('div').fadeIn(1000, function(){ //Built in fadeIn function
//$(this).remove(); //"this" refers to the divs
// });
//});

//The function fades in or fades out 
//the divs depending its showing the
//divs or not

//$("button").on("click", function(){
// $('div').fadeToggle(500); //fadeToggle() fades in or fades out 
//});

//The function slide down the divs
//and makes them visible

//$("button").on("click", function(){
// $('div').slideDown(); //slideDown() slides down the element(s) 
//});

//The function slide up the divs
//and makes them invisible

//$("button").on("click", function(){
// $('div').slideUp(); //slideUp() slides up the element(s) 
//});

//The function slides in or slides out 
//the divs depending its showing the
//divs or not

//$("button").on("click", function(){
 //$('div').slideToggle(); //slideToggle() slide in or slides out 
//});

//The function slides in or slides out 
//the divs depending its showing the
//divs or not

//$("button").on("click", function(){
// $('div').slideToggle(500); //slideToggle() slides in or slides out 
                              //and takes 500ms
//});

//The function slides in or out taking 1000ms
//then it shows the "SLIDE IS DONE!"
//on console

//$("button").on("click", function(){
// $('div').slideToggle(1000, function(){
//	console.log("SLIDE IS DONE!"); 
// }); 
//});

//The function slides the divs back and removes 
//the divs from the site

$("button").on("click", function(){ 
 $('div').slideToggle(1000, function(){ //Built in slideToggle function
  $(this).remove(); //"this" refers to the divs
 });
});










