// Let and Const
const userName = "Davi";
// userName = "Davi Torres";

let age = 17;
age = 18;

// Arrow Functions and Default Parameters
const add = (a: number, b: number = 1) => a + b;
console.log(add(2));

// Spread Operator
const hobbies = ["Sports", "Games"];
const activeHobbies = ["Music"];
activeHobbies.push(...hobbies);

const person = {
	firstName: "Davi",
	curAge: 18,
};
const copiedPersons = { ...person };

// Rest Operator
const sum = (...numbers: number[]) => {
	return numbers.reduce((curResult, curValue) => curResult + curValue, 0);
};
const addedNumbers = sum(5, 10, 2, 3.7);
console.log(addedNumbers);

// Array and Object Destructuring
const [hobby1, hobby2, ...remainingHobbies] = hobbies;
const { firstName, curAge } = person;
