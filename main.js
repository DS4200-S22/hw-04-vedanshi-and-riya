let count = 0;

function circle1() {
	count += 1;
	document.getElementById("count").innerHTML = count;
}

function circle2() {
    let curr_border = document.getElementById("circle2").getAttribute("class");
	console.log(curr_border);
	document.getElementById("circle2").setAttribute("class", "border2"); 
}

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
