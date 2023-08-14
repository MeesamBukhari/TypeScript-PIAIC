// => Regular Function
let greet = function(user: string) {
  console.log("Hello", user);
  return 1;
}
console.log(greet("David"));
// => Arrow Function
let greet1 = (user: string) => {
  console.log("Hello", user);
  return 1;
}
console.log(greet("David"));
// ===========================
// => Regular Function
let add = function(num1: number, num2: number) {
  return num1 + num2;
}
let sum = add;
let resultt = sum(6,7);
console.log(resultt);
// => Arrow Functionx
let add1 = (num1: number, num2: number) => num1 + num2;
let sum1 = add1;
let resulttt = add1(6,7);
console.log(resulttt);
// ===========================
// => Regular Function
function sum2(num1: number, num2: number) {
  return num1 + num2;
}
console.log(sum2(2,2));
// => Arrow Function
let sum3 = (num1: number, num2: number) => num1 + num2;
console.log(sum3(2,2));
// ===========================
// => Regular Function
function isPositive(number: number) {
  return number >= 0;
}
console.log(isPositive(4));
// => Arrow Function
let isPositive1 = (number: number) => number >= 0;
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
// ===========================
// => Regular Function
let getRegValue = function() {
  return 10;
}
console.log(getRegValue());
// => Arrow Function
const getArrowValue = () => 10;
console.log(getArrowValue());
// ===========================
const getArrowValue1 = (m: number) => 10 * m;
console.log(getArrowValue1(6));
// ===========================
const getArrowValue2 = (m: number, bonus: number) => 10 * m + bonus;    // 10 * 6 + 10 = 70
console.log(getArrowValue2(6,10));
console.log(typeof(getArrowValue2));
// ===========================
// => Regular Function
function addNumbers(a: number, b: number) {
  return a + b;
}
// => Arrow Function
const addNumbers1 = (a: number, b: number) => a + b;
let result = addNumbers(10, 11);
console.log(result);
let result1 = addNumbers1(11, 12);
console.log(result1);
// ===========================
// => Regular Function For Greetings
function greetings(personName: string) {
  console.log(`Hello ${personName}! How are you?`);
}
// => Arrow Function For Greetings
const greetings1 = (personName: string) =>
  console.log(`Hello ${personName}! How are you?`);
// Calling The Greetings Function
greetings("Alice");
greetings1("Kate");
// ===========================
// Example:
// => Arrow Function
const addSubNumbers = (x: number, y: number) => {
  let addition = x + y;
  let subtraction = addition - 2;
  return subtraction;
};
let customFormula = addSubNumbers(20, 30); // 50-2 = 48
console.log(customFormula);
// ===========================