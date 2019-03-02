function add (a,b) {
	return a+b;
}

function subtract (a,b) {
	return a-b;
}

function sum (myArray) {
	let total = 0;
	for(var i = 0; i < myArray.length; i++)
		total += myArray[i];
	return total;
}

function multiply (a,b) {
	return a*b;
}

function power(a,b) {
	let total = 1;
	for(var i = 0; i < b; i++)
		total *= a;
	return total;
}

function factorial(num) {
	let total = num;
	if (num === 0 || num === 1)
		return 1;
	while (num > 1) {
		num--;
		total *= num;
	}
	return total;
}

module.exports = {
	add,
	subtract,
	sum,
	multiply,
    power,
	factorial
}