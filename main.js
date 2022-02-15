let count = 0;
function circle1() {
	count += 1;
	document.getElementById("count").innerHTML = count;
}

const circle2 = document.getElementById("circle2");
function mouseOver() {
	circle2.style.stroke = "black";
	circle2.style.strokeWidth = 5;
}

function mouseOut() {
	circle2.style = "null";
}

function circle3() {
	const showCircle = document.getElementById("circle3");
	if (showCircle.style.opacity === "0") {
		showCircle.style.opacity = 1;
		console.log(showCircle);
	} else {
		showCircle.style.opacity = 0;
		console.log(showCircle);
	}
}