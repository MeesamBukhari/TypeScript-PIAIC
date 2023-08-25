#!/usr/bin/env node
// => Literal Union
let myName: number | string;
myName = "Meesam";
console.log(myName);
myName = 18;
console.log(myName);

let userName: string = "MEESAM";
console.log(userName.toLowerCase());

function cashWithdraw(amount: string | number): void {
  // amount.toString();
  //   amount = "Thirty K";
  //   amount.toLowerCase();

  //   amount = 10000;
  //   amount / 100;

  if (typeof amount == "string") {
    amount.toLowerCase();
  } else if (typeof amount == "number") {
    amount / 100;
  } else {
    !amount;
  }
}

let myAge = Math.random() > 0.6 ? "Khan" : 60;
// if(myAge == "Khan") {
//     console.log(myAge);
// }
// else {
//     myAge / 2;
// }

// =======================================

type colors = "Red" | "Green" | "Yellow";
let trafficLight: colors;
let command: "up" | "down" | "left" | "right";
trafficLight = "Red";

let age: number | "died" | "unknown";
age = 90; // OK
age = "died"; // OK
age = "unknown"; // OK
// age = "living";     // ERROR

let newVariable: number | string | null | boolean;
type myType = number | string | null | undefined | boolean;
let secVar: myType;

secVar = null;
secVar = undefined;
secVar = 150;
secVar = "abc";

// => Objects
let person = {
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

type Person = {
  firstName: string;
  age: number;
  gender: string;
};

function studentInfo(std: Person) {

}


// let teacher = {
//     name: "any Name",
//     age: "50",
//     gender: "M",
//     address: adressObj
// }
// console.log(teacher.address.postCode);
// console.log(teacher['address']['city']);