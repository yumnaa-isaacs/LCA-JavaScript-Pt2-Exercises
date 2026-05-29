// ==========================
// USER INPUT VALIDATION
// ==========================

function validateUserInput(username, age) {
    try {
        // Check username
        if (typeof username !== "string") {
            throw new TypeError("Username must be a string.");
        }

        if (username.trim() === "") {
            throw new Error("Username cannot be empty.");
        }

        // Check age
        if (typeof age !== "number") {
            throw new TypeError("Age must be a number.");
        }

        if (age < 0) {
            throw new RangeError("Age cannot be negative.");
        }

        console.log("User input is valid.");

    } catch (error) {
        console.log("Validation Error:", error.message);
    }
}

// Test validation
validateUserInput("Yumnaa", 17);
validateUserInput("", 17);
validateUserInput("Ali", -5);
validateUserInput(123, "seventeen");


// ==========================
// MULTIPLE ERROR TYPES
// ==========================

function demonstrateErrors() {
    try {

        // Reference Error
        console.log(nonExistingVariable);

    } catch (error) {
        console.log("Caught an error:", error.name);
        console.log("Message:", error.message);
    }

    try {

        // Syntax-like custom error
        throw new SyntaxError("This is a syntax error example.");

    } catch (error) {
        console.log("Caught an error:", error.name);
        console.log("Message:", error.message);
    }

    try {

        // Type Error
        let number = 10;
        number.toUpperCase();

    } catch (error) {
        console.log("Caught an error:", error.name);
        console.log("Message:", error.message);
    }
}

// Run error examples
demonstrateErrors();


// ==========================
// STRING HELPER FUNCTIONS
// ==========================

function capitalizeWord(word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
}

function reverseString(text) {
    return text.split("").reverse().join("");
}

function countCharacters(text) {
    return text.length;
}

// Test string helpers
console.log(capitalizeWord("javascript"));
console.log(reverseString("frontend"));
console.log(countCharacters("developer"));


// ==========================
// ARRAY HELPER FUNCTIONS
// ==========================

function getLargestNumber(numbers) {
    return Math.max(...numbers);
}

function getSmallestNumber(numbers) {
    return Math.min(...numbers);
}

function removeDuplicates(array) {
    return [...new Set(array)];
}

// Test array helpers
console.log(getLargestNumber([3, 7, 2, 9, 1]));
console.log(getSmallestNumber([3, 7, 2, 9, 1]));
console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5]));