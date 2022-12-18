// Built-in Generics
const names: Array<string> = ["Davi", "Marcos"]; // string[]

// Promises Types
const promise: Promise<string> = new Promise((resolve, reject) => {
	setTimeout(() => resolve("This is done"), 2000);
});

// Generic Function
// Type Constrains
function merge<T extends object, U extends object>(objA: T, objB: U) {
	return Object.assign(objA, objB);
}

const mergedObj = merge({ name: "Davi", hobbies: ["Sport"] }, { age: 18 });
console.log(mergedObj);

interface Lengthy {
	length: number;
}

function countAndDescribe<T extends Lengthy>(element: T): [T, string] {
	let descriptionText = "Got no value.";
	if (element.length === 1) descriptionText = "Got 1 element";
	else if (element.length > 1) descriptionText = `Got ${element.length} element`;

	return [element, descriptionText];
}
console.log(countAndDescribe("Hi there!"));
console.log(countAndDescribe([]));

// The "keyof" Constraint
function extractAndConvert<T extends object, U extends keyof T>(obj: T, key: U) {
	return obj[key];
}
console.log(extractAndConvert({ name: "Davi" }, "name"));

// Generic Classes
class DataStorage<T extends string | number | boolean> {
	private data: T[] = [];

	addItem(item: T) {
		this.data.push(item);
	}

	removeItem(item: T) {
		this.data.splice(this.data.indexOf(item), 1);
	}

	getItems() {
		return [...this.data];
	}
}

const textStorage = new DataStorage<string>();
textStorage.addItem("Davi");
textStorage.addItem("Marcos");
textStorage.removeItem("Davi");
console.log(textStorage.getItems());

const numberStorage = new DataStorage<number>();
numberStorage.addItem(10);
