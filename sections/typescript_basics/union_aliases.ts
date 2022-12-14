// Type Aliases / Custom Types
type Combinable = number | string;
// Union Types: type1 | type2 | ...
type ConversionDescription = "as-number" | "as-text";
// Literal Types: literal1 | literal2 | ...

function combine(input1: Combinable, input2: Combinable, resultConversion: ConversionDescription) {
	let result: Combinable;
	if ((typeof input1 === "number" && typeof input2 === "number") || resultConversion === "as-number") {
		result = +input1 + +input2;
	} else result = input1.toString() + input2.toString();

	return result;
}

const combinedAges = combine(30, 26, "as-number");
console.log(combinedAges);

const combinedStringAges = combine("30", "26", "as-number");
console.log(combinedStringAges);

const combinedNames = combine("Davi", "Torres", "as-text");
console.log(combinedNames);
