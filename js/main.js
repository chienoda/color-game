var colors = [
'rgb(255, 0, 0)',
'rgb(255, 255, 0)',
'rgb(0, 255, 0)',
'rgb(0, 255, 255)',
'rgb(0, 0, 255)',
'rgb(255, 0, 255)'
]
var squares = document.querySelectorAll('.square');
var pickedColor = pickColor();
var colorDisplay = document.getElementById('colorDisplay');
var messageDisplay = document.querySelector('#messageDisplay');
var display = document.querySelector('#display');
var isGameover = false;

colorDisplay.textContent = pickedColor;

for(var i = 0; i < squares.length; i++){
	//add initial colors to squares
	squares[i].style.backgroundColor = colors[i];

	//add click listeners to squares
	squares[i].addEventListener('click', function() {
		//grab color of clicked square
		//compare color to pickedColor
		var clickedColor = this.style.backgroundColor;
		if(clickedColor === pickedColor) {
			messageDisplay.textContent = "Correct!";
			changeColors(clickedColor);
		  isGameover = true;
		} else {
			this.style.backgroundColor = "#232323";
			messageDisplay.textContent = "Try Again";
		}
	});
}

function changeColors(color) {
	//loop through all squares
	//change each color to match given color
	for(var i = 0; i < squares.length; i++){
			squares[i].style.backgroundColor = color;
		};

	display.style.backgroundColor = color;
}

function pickColor() {
	//pick random number
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}