#!/usr/bin/env node
// => Literal Union
var myName;
myName = "Meesam";
console.log(myName);
myName = 18;
console.log(myName);
var userName = "MEESAM";
console.log(userName.toLowerCase());
function cashWithdraw(amount) {
    // amount.toString();
    //   amount = "Thirty K";
    //   amount.toLowerCase();
    //   amount = 10000;
    //   amount / 100;
    if (typeof amount == "string") {
        amount.toLowerCase();
    }
    else if (typeof amount == "number") {
        amount / 100;
    }
    else {
        !amount;
    }
}
var myAge = Math.random() > 0.6 ? "Khan" : 60;
var trafficLight;
var command;
trafficLight = "Red";
var age;
age = 90; // OK
age = "died"; // OK
age = "unknown"; // OK
// age = "living";     // ERROR
var newVariable;
var secVar;
secVar = null;
secVar = undefined;
secVar = 150;
secVar = "abc";
// => Objects
var person = {
    name: "any Name",
    age: "50",
    gender: "M",
    "Home Address": "ISB",
};
console.log(person.age);
console.log(person["age"]);
console.log(person.gender);
console.log(person["Home Address"]);
console.log(person.name);
function studentInfo(std) {
}
// let teacher = {
//     name: "any Name",
//     age: "50",
//     gender: "M",
//     address: adressObj
// }
// console.log(teacher.address.postCode);
// console.log(teacher['address']['city']);
