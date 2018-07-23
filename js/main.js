var numSquares = 6;
var colors = generateRandomColors(numSquares);

// [
// 'rgb(255, 0, 0)',
// 'rgb(255, 255, 0)',
// 'rgb(0, 255, 0)',
// 'rgb(0, 255, 255)',
// 'rgb(0, 0, 255)',
// 'rgb(255, 0, 255)'
// ]
var squares = document.querySelectorAll('.square');
var pickedColor = pickColor();
var colorDisplay = document.getElementById('colorDisplay');
var messageDisplay = document.querySelector('#message');
var h1 = document.querySelector('h1');
var resetButton = document.getElementById('reset');
var isEasyMode = false;
var easyBtn = document.querySelector('#easy');
var hardBtn = document.querySelector('#hard');

easyBtn.addEventListener('click', function() {
	//three squares only
	easyBtn.classList.add('selected');
	hardBtn.classList.remove('selected');
	messageDisplay.classList.add('hidden');
	numSquares = 3;
	colors = generateRandomColors(numSquares);
	pickedColor = pickColor();
	//change colorDisplay to match picked Color
	colorDisplay.textContent = pickedColor;
	//change colors of squares
	for(var i = 0; i < squares.length; i++){
		if(colors[i]) {
			squares[i].style.backgroundColor = colors[i];
		} else {
			squares[i].style.display = 'none';
		}
	}
});
hardBtn.addEventListener('click', function() {
	//six squares
	hardBtn.classList.add('selected');
	easyBtn.classList.remove('selected');
	messageDisplay.classList.add('hidden');
	numSquares = 6
	colors = generateRandomColors(numSquares);
	pickedColor = pickColor();
	//change colorDisplay to match picked Color
	colorDisplay.textContent = pickedColor;
	//change colors of squares
	for(var i = 0; i < squares.length; i++){
			squares[i].style.backgroundColor = colors[i];
			squares[i].style.display = 'block';
	}
});


colorDisplay.textContent = pickedColor;

for(var i = 0; i < squares.length; i++){
	//add initial colors to squares
	squares[i].style.backgroundColor = colors[i];

	//add click listeners to squares
	squares[i].addEventListener('click', function() {
		//grab color of clicked square
		//compare color to pickedColor
		messageDisplay.classList.remove('hidden');

		var clickedColor = this.style.backgroundColor;
		if(clickedColor === pickedColor) {
			messageDisplay.textContent = "Correct!";
			changeColors(clickedColor);
		  resetButton.textContent = "Play Again?"
		} else {
			this.style.backgroundColor = "#232323";
			messageDisplay.textContent = "Try Again";
		}
	});
}

resetButton.addEventListener('click', function() {
	//generate all new colors
	colors = generateRandomColors(numSquares);
	//pick a new random color from array
	pickedColor = pickColor();
	//change colorDisplay to match picked Color
	colorDisplay.textContent = pickedColor;
	//change colors of squares
	for(var i = 0; i < squares.length; i++){
	squares[i].style.backgroundColor = colors[i];
	}

	this.textContent = "NEW COLORS";
	h1.style.backgroundColor =  'steelblue';
	messageDisplay.classList.add('hidden');
});

function changeColors(color) {
	//loop through all squares
	//change each color to match given color
	for(var i = 0; i < squares.length; i++){
			squares[i].style.backgroundColor = color;
		};

	h1.style.backgroundColor = color;
}

function pickColor() {
	//pick random number
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColors(num) {
	//make an array
	var arr = [];
	//repeat num times
	for(var i = 0; i < num; i++) {
		//get random color and push into arr
		arr.push(randomColor());
	}
	//return that array
	return arr;
}

//get random color
function randomColor() {
	//pick a 'red' from 0-255
	var r = Math.floor(Math.random() * 256);
	//pick a 'green' from 0-255
	var g = Math.floor(Math.random() * 256);
	//pick b 'blue' from 0-255
	var b = Math.floor(Math.random() * 256);
	return 'rgb('+ r + ', ' + g + ', ' + b + ')';
}
