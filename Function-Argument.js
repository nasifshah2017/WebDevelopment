
//The function tests if a number is even or not

//isEven
function isEven(x)
{
	//return true if even 
	if(x % 2 === 0)
	{
		return true;
	}
	//return false otherwise
	else
	{
		return false;
	}
}

//The factorial function calculates 
//calculates factorial of the number
//passed as argument 

function factorial(x)
{
	//define a result variable

	var result = 1;

	//calculate factorial and store value in result

	for(var i = 2; i <= x; i++)
	{
		result = result * i;
	}
	//return the result variable
	return result;

}

// kebabToSnake takes all the hyphens
// and replaces them with underscores
// the function performs on statments or sentences
// passed to them as arguments.

function kebabToSnake(str) 
{
	//replace all '-' with "_"'s
	var newStr = str.replace(/-/g, "_");
	//return str
	return newStr;
}