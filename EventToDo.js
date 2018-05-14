//alert("CONNECTED!");

//var firstLi = document.querySelector("li"); //Only effective on first li
var lis = document.querySelectorAll("li"); //For all lis

// Event name: mouseover
// Fired when: A pointing device is moved onto the element 
// that has the listener attached or onto one of its children.

// Event name: mouseout
// Fired when: A pointing device is moved off the element 
// that has the listener attached or off one of its children. 

for(var i = 0; i < lis.length; i++)
{
	lis[i].addEventListener("mouseover", function()
	{
		this.classList.add("selected"); // adds the selected class which turns the item green
		//The keyword "this" inside an EventListener
		// refers to the item or the element that the event
		// was triggered on
	});

	lis[i].addEventListener("mouseout", function()
	{
		this.classList.remove("selected"); //removes the selected class that removes the green color

	});

	lis[i].addEventListener("click", function()
	{
		this.classList.toggle("done"); //calls the done class from css file while clicking on li item
		//the "done" class puts a line on the item
		//re-clicking would remove the line
	});
}

//firstLi.addEventListener("mouseover", function(){
//	firstLi.style.color ="green"; //Whenever we'll hover over the 
								 //first li it will turn green
//});

//firstLI.addEventListener("mouseout", function(){
//	firstLI.style.color = "black"; //Whenever we'll move away from the
								   //the li will turn black again	
//});