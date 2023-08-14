"use strict";
// => Regular Function
let greet = function (user) {
    console.log("Hello", user);
    return 1;
};
console.log(greet("David"));
// => Arrow Function
let greet1 = (user) => {
    console.log("Hello", user);
    return 1;
};
console.log(greet("David"));
// ===========================
// => Regular Function
let add = function (num1, num2) {
    return num1 + num2;
};
let sum = add;
let resultt = sum(6, 7);
console.log(resultt);
// => Arrow Function
let add1 = (num1, num2) => num1 + num2;
let sum1 = add1;
let resulttt = add1(6, 7);
console.log(resulttt);
// ===========================
// => Regular Function
function sum2(num1, num2) {
    return num1 + num2;
}
console.log(sum2(2, 2));
// => Arrow Function
let sum3 = (num1, num2) => num1 + num2;
console.log(sum3(2, 2));
// ===========================
// => Regular Function
function isPositive(number) {
    return number >= 0;
}
console.log(isPositive(4));
// => Arrow Function
let isPositive1 = (number) => number >= 0;
console.log(isPositive1(5));
// ===========================
// => Regular Function
function randomNumber() {
    return Math.random;
}
console.log(randomNumber());
// => Arrow Function
let randomNumber1 = () => Math.random;
console.log(randomNumber1());
// => Regular Function
let getRegValue = function () {
    return 10;
};
console.log(getRegValue());
// => Arrow Function
const getArrowValue = () => 10;
console.log(getArrowValue());
// ===========================
const getArrowValue1 = (m) => 10 * m;
console.log(getArrowValue1(6));
// ===========================
const getArrowValue2 = (m, bonus) => 10 * m + bonus; // 10 * 6 + 10 = 70
console.log(getArrowValue2(6, 10));
console.log(typeof (getArrowValue2));
// EXAMPLE 1
// => Regular Function
function addNumbers(a, b) {
    return a + b;
}
// => Arrow Function
const addNumbers1 = (a, b) => a + b;
let result = addNumbers(10, 11);
console.log(result);
let result1 = addNumbers1(11, 12);
console.log(result1);
// EXAMPLE 2
// => Regular Function For Greetings
function greetings(personName) {
    console.log(`Hello ${personName}! How are you?`);
}
// => Arrow Function For Greetings
const greetings1 = (personName) => console.log(`Hello ${personName}! How are you?`);
// Calling The Greeings Function
greetings("Alice");
greetings1("Kate");
// EXAMPLE 3
// => Arrow Function
const addSubNumbers = (x, y) => {
    let addition = x + y;
    let subtraction = addition - 2;
    return subtraction;
};
let customFormula = addSubNumbers(20, 30); // 50-2 = 48
console.log(customFormula);
