window.setTimeout(function(){

	var todos = ["Buy New Turtle"];

	var input = prompt("What would you like to do?");

	
	while(input !== "quit") 
	{
		//handle input
		if(input === "list") {
			listTodos();
	}

	else if(input === "new") 
	{
		addTodo();
	}

	else if(input === "delete")
	{
		deleteTodo();
	}
		//ask again new input
		var input = prompt("What would you like to do?");
	}
	console.log("OK, YOU QUIT THE APP");

	function listTodos()
	{
		console.log("*****************")
			todos.forEach(function(todo, i){ //"i" stands for index
				console.log(i + ": " + todo);
		});
		console.log("*****************")
	}

	function addTodo()
	{
	//ask for new todo
	var newTodo = prompt("Enter new todo");
	//add to todos array
	todos.push(newTodo);
	console.log("Added Todo");
	}

	function deleteTodo()
	{
		//ask for index of todo to be deleted
		var index = prompt("Enter index of todo to delete");
		//delete that todo
		//splice(): splice command starts deleting from the index number provided as argument and deletes the amount of contents provided as second argument
		todos.splice(index,1); 
		console.log("Deleted Todo");
	}

}, 500);