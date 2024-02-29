// Arrow Functions

const greet = (name) => {
    console.log(`Hello ${name}!`);
}
greet("Lynn");

const square = (a) => a * a;
console.log("The square is", square(5));

// Spread and Rest Operators

// Rest Operator
function restOperator(first, ...restOfArgs) {// "...restOfArgs" is an array
    console.log(first);
    console.log(restOfArgs);
}

restOperator('one', 'two', 'three', 'four', 'five');

// Spread Operator
function sum(x, y, z) {
    return x + y + z;
}
const numbers = [1, 2, 3];
console.log("The first time:", sum(numbers[0], numbers[1], numbers[2]));
console.log("The second time:", sum(...numbers));

// Common Built-in Methods


// Array
// Filter
let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const even = nums.filter((num) => num % 2 == 0);
const odd = nums.filter((num) => num % 2 != 0);
console.log("Let's check even numbers:", even);
console.log("Let's check odd numbers:", odd);

// String
// Split
const message = "Hello, World!";
const words = message.split(", ");
console.log(words);

// Includes
const sentence = "The quick brown fox jumps over the lazy dog.";
const containsWord = sentence.includes("fox");
console.log(containsWord);

// length - it's a property of the string, so it's triggering as a object
const str = "Welcome to Modern JS Features!";
console.log(str.length);

// to lowercase and to uppercase
let string = "HELLO world";
console.log(string.toLowerCase());
console.log(string.toUpperCase());

// trim
let str2 = "    I love JavaScript!  ";
console.log(str2.trim());

// Math - it's an object inside JavaScript
// max and min
const maxNumber = Math.max(10, 5, 20, 43, 3, 5, 1);
const minNumber = Math.min(10, 5, 20, 43, 3, 5, 1);
console.log(maxNumber);
console.log(minNumber);

// round - >= 5 round up; < 5 round down
console.log(Math.round(3.5));

// floor - round down
console.log(Math.floor(3.5));

// ceil - round up
console.log(Math.ceil(3.5));

// random
// Math.random() - generate a random seed from [0,1)
console.log(Math.random() * 10 + 1);

// nested math methods - when we round a random number, we often use Math.floor() - from [0,100)
console.log(Math.floor(Math.random() * 100));

// other
// to fixed - this will round
const price = 40.2567.toFixed(2);
console.log(price);

// date
const currentDate = new Date();
console.log(currentDate);

const christmas = new Date(2024, 11, 25);
console.log(christmas);