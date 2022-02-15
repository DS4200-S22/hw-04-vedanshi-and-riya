// circle 1 function: adds 1 to the count everytime
let count = 0;
function circle1() {
	count += 1;
	document.getElementById("count").innerHTML = count;
}

// circle 2 function: adds black 5 border and removing the border
const circle2 = document.getElementById("circle2");
function mouseOver() {
	circle2.style.stroke = "black";
	circle2.style.strokeWidth = 5;
}

function mouseOut() {
	circle2.style = "null";
}

// circle 3 function: adds and removes the opacity of the entire shape
function circle3() {
	const showCircle = document.getElementById("circle3");
	if (showCircle.style.opacity == "0") {
		showCircle.style.opacity = 1;
		console.log(showCircle);
	} else {
		showCircle.style.opacity = 0;
		console.log(showCircle);
	}
}
