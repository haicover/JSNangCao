let x;

const num = new Number(5);

// toString() - returns a string representation of the number
x = num.toString();
console.log("1:", x);
// To get the length
x = num.toString().length;
console.log("2:", x);
// toFixed() - returns a string representation of the number with a specified number of decimals
x = num.toFixed(2);
console.log("3:", x);
// toPrecision() - returns a number with the specified length
x = num.toPrecision(3);
console.log("4:", x);
// toExponential() -  convert a number to exponential notation and return its value as a string
x = num.toExponential(2);
console.log("5:", x);
// toLocaleString() - returns a string representation of the number, using the current locale
x = num.toLocaleString('en-US');
console.log("6:", x);
// valueOf - Get value
x = num.valueOf();
console.log("7:", x);
// The Number object itself has some properties and methods

// Largest and smallest possible number
x = Number.MAX_VALUE;
console.log("8:", x);
x = Number.MIN_VALUE;
console.log(x);