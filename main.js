function circle1() {
	let count = 0;
	count += 1;
	document.getElementById("count").innerHTML = count;
}

function circle2() {
    let curr_border = document.getElementById("circle2").getAttribute("class");
	console.log(curr_border);
	document.getElementById("circle2").setAttribute("class", "border2"); 
}

function circle3() {
	let showCircle = document.getElementById("show_circle")
}