// Working with Enums
enum Role {
	ADMIN,
	READ_ONLY,
	AUTHOR,
}
// const ADMIN = 0;
// const READ_ONLY = 1;
// const AUTHOR = 2;

// Object Types
const person = {
	name: "Davi",
	age: 18,
	// Array Types
	hobbies: ["Games", "Musics"],
	role: Role.AUTHOR,
};

let favoriteActives: string[];
favoriteActives = ["Sport"];

console.log(person.name);

for (const hobby of person.hobbies) console.log(hobby.toUpperCase());
if (person.role === Role.AUTHOR) console.log("is author");
