//Write a JavaScript program to calculate the area and perimeter of a circle. The radius of the circle will be supplied by the user

//Bonus 1: Write the answer like this "The area of the circle is ___ and the perimeter of the circle is ____"

//Bonus 2: Make both numbers whole integers (aka round to the nearest integer) 



function circleCalculation (radius) {
	let radius = Number(prompt('Please enter a radius'));
	return 2 * Math.PI * radius;
}

var result = circleCalculation(radius);
console.log(result);



