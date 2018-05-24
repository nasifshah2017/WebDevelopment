
	var numSquares = 6;
	var colors = []; //The argument number is the number of colors to generate on the array 
	var pickedColor; 
	var squares = document.querySelectorAll(".square"); //Selecting div classes from html file
	var colorDisplay = document.getElementById("colorDisplay"); //Changes color name on h1 by replacing the word RGB
	var messageDisplay = document.querySelector("#message"); //To display message "try again" or "correct"
	var h1 = document.querySelector("h1"); //To change the background color to the correct color
	var resetButton = document.querySelector("#reset"); //New colors button
	var modeButtons = document.querySelectorAll(".mode");

	init(); //The Function runs when page loads

	function init(){
		setupModeButtons();
		setupSquares();
		reset();
	}
	
 	//The Function sets up the mode buttons	

	function setupModeButtons(){
		for(var i = 0; i < modeButtons.length; i++){
		modeButtons[i].addEventListener("click", function(){
			modeButtons[0].classList.remove("selected"); //Removing the blue background from both buttons
			modeButtons[1].classList.remove("selected"); //Removing the blue background from both buttons
			this.classList.add("selected"); //Adding the blue background on the mode button when clicked 
			//Works as the same if-else statement below; known as turnary operator 
			//this.textContent === "Easy" ? numSquares = 3: numSquares = 6 
			if(this.textContent === "Easy") //"this" refers to the button selected
			{
				numSquares = 3;
			}
			else
			{
				numSquares = 6;
			}

			reset();

		});
	 }
	}

	//The Function sets up the Squares

	function setupSquares()
	{
		for(var i = 0; i < squares.length; i++)
 	{	//add click listeners to squares
 		squares[i].addEventListener("click", function(){
 			//grab color of clicked square
 			var clickedColor = this.style.background; //"this" refers to the square that was clicked
 			//compare color to pickedColor
 			if(clickedColor === pickedColor)
 			{
 				messageDisplay.textContent = "Correct!";
 				resetButton.textContent = "Play Again?";
 				changeColors(clickedColor); //All squares change to correct color
 				h1.style.background = clickedColor; //Changing the background color of h1 to the correct color 
 			}
 			else
 			{
 				this.style.background = "#232323"; //The wrong ones disappear when you click on them
 				messageDisplay.textContent = "Try Again";
 			}
 		});

 	}
	}
	
	//The Function that resets the site 

	function reset(){
		//Generating random colors depending on numSquares variable as argument
		colors = generateRandomColors(numSquares); 
		//pick a new random color from array as the correct color
			pickedColor = pickColor();
		//change colorDisplay to match picked Color
			colorDisplay.textContent = pickedColor;
			resetButton.textContent = "New Colors" //After clicking "Play Again" button, it changes to "New Colors" button 
			messageDisplay.textContent=""; //Removing the correct sign after clicking play again
		//change colors of squares
			for(var i = 0; i < squares.length; i++){ //Mainly to hide the bottom 3 squares on Easy mode
				if(colors[i])
				{	//If there's a color in the array we need to make them visible first
					squares[i].style.display = "block";
					//And then we need to style it's square
					squares[i].style.background = colors[i];	
				}
				else
				{	//Else we do not show it at all
					squares[i].style.display = "none";
				}
			}
			h1.style.background = "steelblue"; //Keeping the background of h1 steelblue	
	}

	//Function that activates the "New Colors" button

	resetButton.addEventListener("click", function(){
		reset();
	});

	
	
 		//The Function changes the colors of all squares to the correct color

 		function changeColors(color){
 			//loop through all squares
 			for(var i = 0; i < squares.length; i++){
				//change each color to match the correct color
				squares[i].style.background = color;
			}
 		}

 		//The Function picks a random color as the correct color

 		function pickColor(){
 			//Math.random() //Picks a decimal number between 0 and 1
 			//Math.floor(Math.random()) //Math.floor removes the value after decimal point and only keeps the whole number

 			var random = Math.floor(Math.random() * colors.length);
 			return colors[random];
 		}
 		//The Randomize Function picks random colors
 		//The number of colors needed to pick is defined 
 		//in the argument as "num"

 		function generateRandomColors(num){ 
 			//make an array
 			var arr = [];
 			//add num random colors to array
 			for(var i = 0; i < num; i++){
 				//get random color and push into arr
 				arr.push(randomColor()); //Pushes a random color in the array with each iteration
 				
 			}
 			//return that array	
 			return arr;
 		}
 		//The Function generates random color numbers; Randomizes three numbers between 0 and 255

 		function randomColor() { 
 			//Pick a "red" from 0 to 255
 			var r = Math.floor(Math.random() * 256); //Multiplying with 256 as we want 255 to be the max number
 			//Pick a "green" from 0 to 255
 			var g = Math.floor(Math.random() * 256);
 			//Pick a "blue" from 0 to 255
 			var b = Math.floor(Math.random() * 256);
 			return "rgb(" + r + ", " + g + ", " + b + ")"; //The spaces after the commas are important
 			//When we set the background color of an element
 			//the CSS or the DOM automatically adds in spaces
 			//between r,g,b numbers, to fix that we add spaces 
 			//between the r,g,b numbers that this function returns
		}

		// Note: generateRandomColors(num) generates the colors and puts them into an array. 
		// We assign that array to a variable named colors.
		// The reset() function assigns the colors to the squares. 
		// The setupSquares() function adds the listener to each square that pulls the color from the square 
		// and compares it to the pickedColor which comes from pickColor().

 		