//jQuery coding
// Check off Specific Todos By Clicking

//The .on(click) Event Listener works back and forth
//putting a line on the li text
//and removing it

//click() only adds listeners for existing elements
//on() will add listeners for all potential future elements
//We can only add a listener using jQuery on elements that exist
//when this code is run the first time. And when this code is runs 
//the first time, we don't have all the "lis" we only have three
//so if we add the click listeners to the "lis" it will only add to 
//those 3. So what we do instead is add a listener to the entire "ul" parent. 
//So anytime we click on that "ul" this lisenter will fire except we add the
//second argument and what this code does is it says when an li is clicked 
//inside of an ul then run this code. So we added a listener to an element
//that exists when the page loads but we are really only listening to the "lis"
//that are clicked inside of that ul.

$("ul").on("click", "li", function(){
	$(this).toggleClass("completed"); //Built in toggleClass() function from jQuery
});

//Click on X to delete Todo
$("ul").on("click", "span", function(event){ //We want this code to run only when 
											 //a span is clicked inside of an "ul"	
//	alert("clicked on a span!");
	$(this).parent().fadeOut(500, function(){ //Adding parent() fades out the li from the list 
		$(this).remove();					  //after being clicked instead of span(X)	
	}); 									  //1st "this" refers to the "span", and it's parent is "li"	
	                            			  //2nd "this" refers to the parent of span, which is "li"
	event.stopPropagation();     	//Stops Event Bubbling after clicking span
});


//Entering new items on the list

$("input[type='text']").keypress(function(event){
	if(event.which === 13){ //"which" refers to the character key that was clicked, 13 refers to "Enter" key
	//grabbing new todo text from input
	//Extracting the value from input bar and outputting it,
	//"this" refers to the input that was entered by the user
	var todoText = ($(this).val()); 
	//Clearing out the input after the user has hit enter
	$(this).val("");
    //create a new li and add to ul
    //adding the Garbage Can icon to the new items entered in the list
    $("ul").append("<li><span><i class='fa fa-trash'></i></span>" + todoText +  "</li>")
	}
});

//Making the Pencil icon button work to open the
//"Add New Todo" bar, and add items to the list.
//fadeToggle() function fades in and out the 
//"Add New Todo" bar back and forth on clicking
//the Pencil icon

$(".fa-pencil").click(function(){
	$("input[type='text']").fadeToggle()
});


// $("ul").click(function(){
//	alert("clicked on ul!");
// });

// $("#container").click(function(){
//	alert("clicked on container div!");
// });

// $("body").click(function(){
// 	alert("clicked on body!");
// });

// The code above, on clicking on the span,
// first alerts that span is clicked
// then alerts that li got clicked
// then alerts ul got clicked 
// then alerts the container got clicked
// then atlast alerts the body got clicked
// this phenomena is called Event Bubbling 