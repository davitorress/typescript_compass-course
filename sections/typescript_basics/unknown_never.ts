// The "unknown" Type
let userInput: unknown;
let userName: string;

userInput = 5;
userInput = "Davi";

// "unknown" is better than "any" because need a validation
if (typeof userInput === "string") userName = userInput;

// The "never" Type
function generateError(message: string, code: number): never {
	throw { message, errorCode: code };
} // doesn't returns a value
generateError("An error occurred!", 505);
