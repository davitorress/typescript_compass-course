// Interfaces
// Extending Interfaces
interface Named {
	// Readonly Interface Properties
	// Optional Parameters and Properties
	readonly name?: string;
	outputName?: string;
}

interface Greetable extends Named {
	greet(phrase: string): void;
}

// Using Interfaces with Classes
class Person implements Greetable {
	// Optional Parameters and Properties
	name?: string;
	age: number;

	// Optional Parameters and Properties
	constructor(n?: string, a: number = 18) {
		if (n) this.name = n;
		this.age = a;
	}

	greet(phrase: string): void {
		if (this.name) console.log(phrase + " " + this.name);
		else console.log("Hi!");
	}
}

let user1: Greetable;
user1 = new Person();
user1.greet("Hello");

// Interfaces as Function Types
interface AddFn {
	(a: number, b: number): number;
}
let add: AddFn;
add = (n1: number, n2: number) => n1 + n2;
