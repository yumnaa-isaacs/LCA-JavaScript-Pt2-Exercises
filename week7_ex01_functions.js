// Multiply 3 numbers together
function multiply(num1, num2, num3) {

    if (num1 === num2 || num1 === num3 || num2 === num3) {
        return "Numbers must not be the same";
    }

    return num1 * num2 * num3;
}

console.log(multiply(2, 3, 4));


// Convert minutes to seconds
const convertToSeconds = function(minutes) {
    return minutes * 60;
}

console.log(convertToSeconds(5));


// Fahrenheit to Celsius
function fahrenheitToCelsius(temp) {
    return (temp - 32) * 5 / 9;
}

console.log(fahrenheitToCelsius(86));


// Reverse a string
function reverseString(word) {
    return word.split("").reverse().join("");
}

console.log(reverseString("Javascript"));


// Count vowels
function countVowels(str) {

    let vowels = "aeiou";
    let count = 0;

    for (let i = 0; i < str.length; i++) {

        if (vowels.includes(str[i].toLowerCase())) {
            count++;
        }

    }

    return count;
}

console.log(countVowels("Javascript"));


// Prime number checker
function isPrime(number) {

    if (number <= 1) {
        return false;
    }

    for (let i = 2; i < number; i++) {

        if (number % i === 0) {
            return false;
        }

    }

    return true;
}


// Testing 4 numbers
console.log(isPrime(2));
console.log(isPrime(4));
console.log(isPrime(7));
console.log(isPrime(10));