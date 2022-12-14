// Function Return Types and "void"
function add(n1: number, n2: number) {
	return n1 + n2;
} // number

function printResult(num: number) {
	console.log("Result:", num);
} // void
printResult(add(5, 12));

// Function Types and Callbacks
function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
	const result = n1 + n2;
	cb(result);
}
// cb(): void -> doesn't matter the return of the function
// cb(): number -> the return must be a number
addAndHandle(10, 20, (result) => console.log(result));

// Functions as Types
// let combineValues: Function;
let combineValues: (a: number, b: number) => number;
combineValues = add;
console.log(combineValues(8, 2));
