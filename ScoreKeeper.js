var p1Button = document.querySelector("#p1");
var p2Button = document.getElementById("p2");
var resetButton = document.getElementById("reset");
var p1Display = document.querySelector("#p1Display");
var p2Display = document.querySelector("#p2Display");
var numInput = document.querySelector("input");
var winningScoreDisplay = document.querySelector("p span"); //p span specifically unifies the span thats under paragraph, from the other spans, we are not using ids for spans.
var p1Score = 0;
var p2Score = 0;
var gameOver = false; //Boolean variable starts as false, because game is not over at the beginning
var winningScore = 5;


p1Button.addEventListener("click", function(){
	if(!gameOver){ //If game over has not been reached yet
		p1Score++;
		if(p1Score === winningScore){
			p1Display.classList.add("winner");
			gameOver = true;
		}
		p1Display.textContent = p1Score;
	}
	
	
});

p2Button.addEventListener("click", function(){
	if(!gameOver){
		p2Score++;
		if(p2Score === winningScore){
			p2Display.classList.add("winner");
			gameOver = true;
		}
	p2Display.textContent = p2Score;	
	}
});


resetButton.addEventListener("click", function(){
	reset();
});

function reset(){
	p1Score = 0;
	p2Score = 0;
	p1Display.textContent = 0;
	p2Display.textContent = 0;
	p1Display.classList.remove("winner"); //Takes the green color back to black
	p2Display.classList.remove("winner"); //Takes the green color back to black
	gameOver = false; //Enables us to keep playing
}

numInput.addEventListener("change", function(){ //A change event will run anytime a value changes, 
	//doesn't matter it changes by clicking a button or changed through typing, 
	//but with "click" the event fires only when the button is clicked
	winningScoreDisplay.textContent = numInput.value; //It takes the value that user inputs on the 
	//bar and changes the value on the text that shows the winning value to the user, 
	//to the value of taken from the user
	winningScore = Number(numInput.value); //It will update the winning values that is on the header
	//with the value thats input by the user 
	reset(); //Whenever the user changes the winning score,
	//the function automatically resets the scores on the header to 0
});


//How to get data from an input in the bar:
//Console coding:
//var input = document.querySelector("input"); Press Enter
//input.value Press Enter
//It outputs the value that's input on the bar by the user

