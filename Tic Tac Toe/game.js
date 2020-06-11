// Restart Game Button

let restartButton = document.querySelector('#restartButton');


// Grab all squares

let squares = document.querySelectorAll("td");


// Whose move is now?

let whoseMove = document.querySelector('#whoseMove')
whowon = document.querySelector("#whowon")


// Clear all squares

function clearBoard(){
	for(let i=0; i<squares.length; i++)
		squares[i].textContent = '';
	whoseMove.textContent = "Player 1 -> Whats Your Move?";
	whowon.textContent = "";
	turn = 0;
	
}
restartButton.addEventListener('click', clearBoard);


// Check the square marker

let turn = 0;


function checkDiagonals()
{
	// Player 2 Checker

	if(squares[0].textContent == 'X' && squares[4].textContent== 'X' && squares[8].textContent == 'X')
	{
		whoseMove.textContent = "";
		whowon.style.color = "red";
		whowon.textContent = "Player 2 Won!!!!!!";
		return true;
	}
	if(squares[2].textContent == 'X' && squares[4].textContent== 'X' && squares[6].textContent == 'X')
	{
		whoseMove.textContent = "";
		whowon.style.color = "red";
		whowon.textContent = "Player 2 Won!!!!!!";
		return true;
	}

	// Player 1 Checker

	if(squares[0].textContent == 'O' && squares[4].textContent== 'O' && squares[8].textContent == 'O')
	{
		whoseMove.textContent = "";
		whowon.style.color = "red";
		whowon.textContent = "Player 1 Won!!!!!!";
		return true;
	}
	if(squares[2].textContent == 'O' && squares[4].textContent== 'O' && squares[6].textContent == 'O')
	{
		whoseMove.textContent = "";
		whowon.style.color = "red";
		whowon.textContent = "Player 1 Won!!!!!!";
		return true;
	}
	return false;
}
function checkColumns()
{
	// Player 2 Checker

	if(squares[0].textContent == 'X' && squares[3].textContent== 'X' && squares[6].textContent == 'X')
	{
		whoseMove.textContent = "";
		whowon.style.color = "red";
		whowon.textContent = "Player 2 Won!!!!!!";
		return true;
	}
	if(squares[1].textContent == 'X' && squares[4].textContent== 'X' && squares[7].textContent == 'X')
	{
		whoseMove.textContent = "";
		whowon.style.color = "red";
		whowon.textContent = "Player 2 Won!!!!!!";
		return true;
	}
	if(squares[2].textContent == 'X' && squares[5].textContent== 'X' && squares[8].textContent == 'X')
	{
		whoseMove.textContent = "";
		whowon.style.color = "red";
		whowon.textContent = "Player 2 Won!!!!!!";
		return true;
	}


	// Player 2 Checker

	if(squares[0].textContent == 'O' && squares[3].textContent== 'O' && squares[6].textContent == 'O')
	{
		whoseMove.textContent = "";
		whowon.style.color = "red";
		whowon.textContent = "Player 1 Won!!!!!!";
		return true;
	}
	if(squares[1].textContent == 'O' && squares[4].textContent== 'O' && squares[7].textContent == 'O')
	{
		whoseMove.textContent = "";
		whowon.style.color = "red";
		whowon.textContent = "Player 1 Won!!!!!!";
		return true;
	}
	if(squares[2].textContent == 'O' && squares[5].textContent== 'O' && squares[8].textContent == 'O')
	{
		whoseMove.textContent = "";
		whowon.style.color = "red";
		whowon.textContent = "Player 1 Won!!!!!!";
		return true;
	}
}
function checkRows()
{
	// Player 2 Checker

	if(squares[0].textContent == 'X' && squares[1].textContent== 'X' && squares[2].textContent == 'X')
	{
		whoseMove.textContent = "";
		whowon.style.color = "red";
		whowon.textContent = "Player 2 Won!!!!!!";
		return true;
	}
	if(squares[3].textContent == 'X' && squares[4].textContent== 'X' && squares[5].textContent == 'X')
	{
		whoseMove.textContent = "";
		whowon.style.color = "red";
		whowon.textContent = "Player 2 Won!!!!!!";
		return true;
	}
	if(squares[6].textContent == 'X' && squares[7].textContent== 'X' && squares[8].textContent == 'X')
	{
		whoseMove.textContent = "";
		whowon.style.color = "red";
		whowon.textContent = "Player 2 Won!!!!!!";
		return true;
	}


	// Player 2 Checker

	if(squares[0].textContent == 'O' && squares[1].textContent== 'O' && squares[2].textContent == 'O')
	{
		whoseMove.textContent = "";
		whowon.style.color = "red";
		whowon.textContent = "Player 1 Won!!!!!!";
		return true;
	}
	if(squares[3].textContent == 'O' && squares[4].textContent== 'O' && squares[5].textContent == 'O')
	{
		whoseMove.textContent = "";
		whowon.style.color = "red";
		whowon.textContent = "Player 1 Won!!!!!!";
		return true;
	}
	if(squares[6].textContent == 'O' && squares[7].textContent== 'O' && squares[8].textContent == 'O')
	{
		whoseMove.textContent = "";
		whowon.style.color = "red";
		whowon.textContent = "Player 1 Won!!!!!!";
		return true;
	}
}

function checkDraw(){
	if(checkRows() || checkColumns() || checkDiagonals())
		return false;
	for (var i = 0; i < squares.length; i++) {
		if(squares[i].textContent == '')
			return false;
	}
	whoseMove.textContent = "";
	whowon.style.color = "red";
	whowon.textContent = "Drawwww!!!!!!";
	return true;
}

function changeMarker(){
	if(this.textContent != '' || checkDraw())
		return;

	if(turn){
		whoseMove.textContent = "Player 1 -> Whats Your Move?";
		this.style.color = "#5f2c2a";
		this.textContent = 'X';
	}
	else{
		whoseMove.textContent = "Player 2 -> Whats Your Move?";
		this.textContent = 'O';
	}
	turn ^= 1;
	checkDraw();
	return;



	if(this.textContent === '')
		this.textContent = 'X';
	else if(this.textContent === 'X')
		this.textContent = 'O';
	else
		this.textContent = '';
}

for (let i = 0; i < squares.length; i++) {
	squares[i].addEventListener('click', changeMarker);
}


// Change Header Title Color Randomly

let headerTitle = document.querySelector("#headingTitle")

function getRandomColor(){
	letters = "0123456789ABCDEF";
	let color = "#";

	for(let i=0; i<6; i++){
		color += letters[Math.floor(Math.random() * 16)];
	}
	return color;
}

function changeHeaderColor(){
	color = getRandomColor();
	headerTitle.style.color = color;
}

setInterval("changeHeaderColor()", 500)