// Intersection Types
type Admin = {
	name: string;
	privileges: string[];
};

type Employee = {
	name: string;
	startDate: Date;
};

type ElevatedEmployee = Admin & Employee;

const e1: ElevatedEmployee = {
	name: "Davi",
	privileges: ["create-server"],
	startDate: new Date(),
};

type Combinable = string | number;
type Numeric = number | boolean;
type Universal = Combinable & Numeric;

// Type Guards
// Function Overloads
function add(a: number, b: number): number;
function add(a: string, b: string): string;
function add(a: number, b: string): string;
function add(a: string, b: number): string;
function add(a: Combinable, b: Combinable) {
	if (typeof a === "string" || typeof b === "string") return a.toString() + b.toString();
	return a + b;
}

const result1 = add("Davi", "Torres");
const result2 = add(1, 2);
const result3 = add(1, "s");

type UnknownEmployee = Employee | Admin;

function printEmployee(emp: UnknownEmployee) {
	console.log("Name: " + emp.name);
	if ("privileges" in emp) console.log("Privilegies: " + emp.privileges);
	if ("startDate" in emp) console.log("Start Date: " + emp.startDate);
}

class Car {
	drive() {
		console.log("Driving a car...");
	}
}

class Truck {
	drive() {
		console.log("Driving a truck...");
	}

	loadCargo(amount: number) {
		console.log("Loading cargo..." + amount);
	}
}

type Vehicle = Car | Truck;

const v1 = new Car();
const v2 = new Truck();

function useVehicle(v: Vehicle) {
	v.drive();
	if (v instanceof Truck) v.loadCargo(1000);
}
useVehicle(v1);
useVehicle(v2);

// Discriminated Unions
interface Bird {
	type: "bird";
	flyingSpeed: number;
}

interface Horse {
	type: "horse";
	runningSpeed: number;
}

type Animal = Bird | Horse;

function moveAnimal(a: Animal) {
	let speed: number;
	switch (a.type) {
		case "bird":
			speed = a.flyingSpeed;
			break;
		case "horse":
			speed = a.runningSpeed;
			break;
		default:
			speed = 0;
	}
	console.log("Moving at speed: " + speed);
}
moveAnimal({ type: "bird", flyingSpeed: 100 });
moveAnimal({ type: "horse", runningSpeed: 40 });

// Index Properties
interface ErrorContainer {
	[prop: string]: string;
}

const errorBag: ErrorContainer = {
	email: "Not a valid email!",
	username: "Must start with a character!",
};
