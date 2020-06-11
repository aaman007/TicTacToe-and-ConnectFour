let player1 = prompt("Player One : Enter your name, you will be blue");
let player1Color = 'rgb(86, 151, 255)';


let player2 = prompt("Player Two : Enter your name, you will be red");
let player2Color = 'rgb(237, 45, 73)';

let game_on = true;
let table = $('table tr');
let grayrgb = 'rgb(128, 128, 128)';
let COLS = 7;
let ROWS = 6;

// For Debugging Purpose

function reportWin(row, col){
	console.log("Won at cell : ");
	console.log(row);
	console.log(col);
}


// Changing color of a cell
function changeColor(row, col, color){
	return table.eq(row).find('td').eq(col).find('button').css('background-color', color);
}


// Getting color of a cell

function getColor(row, col, color){
	return table.eq(row).find('td').eq(col).find('button').css('background-color');
}


// Finding bottom color that is not filled yet

function findBottom(col){
	let color = getColor(ROWS-1, col)

	for(let row = ROWS-1; row >= 0; row--){
		color = getColor(row, col);

		if(color === grayrgb)
			return row;
	}
	return -1;
}


/// Checking if 4 chips are connected

function colorMatchCheck(one, two, three, four){
	return (one === two && one === three && one === four && one !== grayrgb && one !== undefined);
}


/// Horizontal Win Checking

function horizontalWinCheck(){

	for(let row = 0; row < ROWS; row++){
		for(let col = 0; col + 4 <= COLS; col++){
			if(colorMatchCheck(getColor(row, col), getColor(row, col+1), getColor(row, col+2), getColor(row, col+3)))
				return true;
		}
	}
	return false;
}


/// Vertical Win Checking

function verticalWinCheck(){
	for(let col = 0; col < COLS; col++){
		for(let row = 0; row+4 <= ROWS; row++){
			if(colorMatchCheck(getColor(row, col), getColor(row+1, col), getColor(row+2, col), getColor(row+3, col)))
				return true;
		}
	}
}


/// Diagonal Win Checking

function diagonalWinCHeck(){
	for(let row = 0; row < ROWS; row++){
		for(let col = 0; col < COLS; col++){
			if(colorMatchCheck(getColor(row, col), getColor(row+1, col+1), getColor(row+2, col+2), getColor(row+3, col+3)))
				return true;
			if(colorMatchCheck(getColor(row, col), getColor(row+1, col-1), getColor(row+2, col-2), getColor(row+3, col-3)))
				return true;
		}
	}
	return false;
}

/// Check for Draw

function drawChecker(){
	for(let row = 0; row < ROWS; row++){
		for(let col = 0; col < COLS; col++){
			if(getColor(row, col) === grayrgb)
				return false;
		}
	}
	return true;
}


let currentPlayer = 1;
let playerName = player1;
let playerColor = player1Color;


$('h3').text(playerName + ", its your turn. Pick a column.");


$('.board button').on('click', function(){

	let col = $(this).closest('td').index();
	let row = findBottom(col);

	if(game_on === false){
		return;
	}
	else if(row === -1){
		$('h3').text(playerName + ', Please choose an empty column');
		return;
	}

	changeColor(row, col, playerColor);

	if(horizontalWinCheck() || verticalWinCheck() || diagonalWinCHeck()){
		$('h1').text(playerName + ", You have won the game!!!");
		$('h1').css('margin-top', '40px');
		$('h2').fadeOut('fast');
		$('h3').fadeOut('fast');
		game_on = false;
		return;
	}

	currentPlayer ^= 1;

	if(currentPlayer){
		playerName = player1;
		playerColor = player1Color;
		$('h3').text(playerName + ", its your turn. Pick a column.");
	}
	else{
		playerName = player2;
		playerColor = player2Color;
		$('h3').text(playerName + ", its your turn. Pick a column.");
	}
	if(drawChecker()){
		$('h1').text("Draw Match!!!");
		$('h1').css('margin-top', '40px');
		$('h2').fadeOut('fast');
		$('h3').fadeOut('fast');
		game_on = false;
		return;
	}

})
