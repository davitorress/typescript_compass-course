// Creating a Class
// Abstract Classes
abstract class Department {
	// Static Properties
	static fiscalYear = 2021;

	public name: string; // public is default
	// "private" and "public" Access Modifiers
	// private employees: string[] = [];

	// "protected" Modifier
	protected employees: string[] = [];

	// Shorthand initialization
	constructor(protected readonly id: string, n: string) {
		this.name = n;
	}

	// Static Methods
	static createEmployee(name: string) {
		return { name };
	}

	// Methods and "this" Keyword
	// Abstract Classes
	abstract describe(this: Department): void;

	addEmployee(name: string) {
		this.employees.push(name);
	}

	printEmployeeInformation(this: Department) {
		console.log(this.employees.length);
		console.log(this.employees);
	}
}

const employee = Department.createEmployee("Carlos");
console.log(employee, Department.fiscalYear);

// Inheritance
class ITDepartment extends Department {
	// Singletons and Private Constructors
	private static instance: ITDepartment;

	private constructor(id: string, public admins: string[]) {
		super(id, "IT");
	}

	static getInstance() {
		if (ITDepartment.instance) return ITDepartment.instance;
		this.instance = new ITDepartment("d2", []);
		return this.instance;
	}

	// Abstract Classes
	describe(this: ITDepartment) {
		console.log("IT Department - ID: " + this.id);
	}
}

// Override Properties
class AccountingDepartment extends Department {
	// Getters and Setters
	private lastReport: string;

	get mostRecentReport() {
		if (this.lastReport) return this.lastReport;
		throw new Error("No report found.");
	}

	set mostRecentReport(value: string) {
		if (!value) throw new Error("Please pass in a valid value!");
		this.addReport(value);
	}

	constructor(id: string, private reports: string[] = []) {
		super(id, "Accounting");
		this.lastReport = reports[0];
	}

	// Abstract Classes
	describe(this: AccountingDepartment) {
		console.log("Accounting Department - ID: " + this.id);
	}

	addEmployee(name: string) {
		if (name === "Carlos") return;
		this.employees.push(name);
	}

	addReport(text: string) {
		this.reports.push(text);
		this.lastReport = text;
	}

	printReports(this: AccountingDepartment) {
		console.log(this.reports);
	}
}

const accounting = new AccountingDepartment("d1");
accounting.describe();

accounting.addEmployee("Davi");
accounting.addEmployee("Carlos");
accounting.printEmployeeInformation();

// console.log(accounting.mostRecentReport);
accounting.mostRecentReport = "Year End Report";
accounting.addReport("Something went wrong...");
console.log(accounting.mostRecentReport);
accounting.printReports();

// const it = new ITDepartment("d2", ["Davi"]);
const it = ITDepartment.getInstance();
it.describe();
