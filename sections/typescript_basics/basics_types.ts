// Using Types
function add(n1: number, n2: number, showResult: boolean, phrase: string) {
	const result = n1 + n2;
	if (showResult) console.log(phrase + result);
	else return result;
}

const number1 = 5; // 5.0
let number2: number;
number2 = 2.8;
const printResult = true;
const resultPhrase: string = "Result is: ";

add(number1, number2, printResult, resultPhrase);
