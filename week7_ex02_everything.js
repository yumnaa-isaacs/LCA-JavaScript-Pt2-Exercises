// =========================
// SUM FUNCTION
// =========================

function sum(num) {

    // Check if value is a number
    if (typeof num !== "number") {
        return "The value passed is not a number";
    }

    let total = 0;

    // Add all numbers from 0 to num
    for (let i = 0; i <= num; i++) {
        total += i;
    }

    return total;
}

// Tests
console.log(sum(5));        // 15
console.log(sum(10));       // 55
console.log(sum("hello"));  // The value passed is not a number



// =========================
// FACTORIAL FUNCTION
// =========================

function factorial(num) {

    let total = 1;

    // Multiply all numbers down to 1
    for (let i = num; i >= 1; i--) {
        total *= i;
    }

    console.log(total);
}

// Tests
factorial(4); // 24
factorial(5); // 120



// =========================
// FUNKYMATH FUNCTION
// =========================

function funkyMath(a, b, c, d) {

    // If 2 arguments
    if (arguments.length === 2) {
        return a - b;
    }

    // If 3 arguments
    else if (arguments.length === 3) {
        return a + b + c;
    }

    // If 4 arguments
    else if (arguments.length === 4) {

        let firstTotal = a + b;
        let secondTotal = c + d;

        return firstTotal / secondTotal;
    }

    else {
        return "Invalid number of arguments";
    }
}

// Tests
console.log(funkyMath(10, 5));       // 5
console.log(funkyMath(1, 2, 3));     // 6
console.log(funkyMath(8, 2, 3, 5));  // 1.25



// =========================
// ARRAY LOOP
// =========================

let numbers = [1, 2, 33, 45, 6, 44];

let oddNumbers = [];

// Remove odd numbers and place in new array
for (let i = 0; i < numbers.length; i++) {

    if (numbers[i] % 2 !== 0) {
        oddNumbers.push(numbers[i]);
    }
}

// Arrange from smallest to biggest
oddNumbers.sort(function(a, b) {
    return a - b;
});

console.log(oddNumbers);



// =========================
// OBJECT
// =========================

let me = {
    firstName: "Yumnaa",
    lastName: "Isaacs",
    age: 17,
    favouriteColour: "Black",
    dreamCar: "BMW M4"
};

// Add favourite food
me.favouriteFood = "Biryani";

// Delete age property
delete me.age;

console.log(me);