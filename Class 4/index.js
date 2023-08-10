"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// For Loop
var groceryItems = ["Bread", "Egg", "Fruit", "Milk", "Coffee"];
for (var i = 0; i < groceryItems.length; i++) {
    console.log("Item No. ".concat(i, " which is ").concat(groceryItems[i]));
    console.log("Pick from rack");
    console.log("Put in cart");
    console.log("========================");
}
var groceryItems1 = ["Bread", "Egg", "Fruit", "Milk", "Coffee"];
for (var i = 0; i < groceryItems1.length; i += 2) {
    console.log("Item No. ".concat(i, " which is ").concat(groceryItems1[i]));
    console.log("Pick from rack");
    console.log("Put in cart");
    console.log("========================");
    if (groceryItems1[i] === "Fruit") {
        break;
    }
}
var groceryItems2 = ["Bread", "Egg", "Fruit", "Milk", "Coffee", "Tea", "Oil"];
for (var i = 0; i <= 4; i++) {
    console.log("Item No. ".concat(i, " which is ").concat(groceryItems2[i]));
    console.log("Pick from rack");
    console.log("Put in cart");
    console.log("========================");
}
var groceryItems3 = ["Bread", "Egg", "fruit", "Milk", "Fruit", "Coffee", "Tea", "Oil"];
for (var i = 0; i <= groceryItems3.length; i++) {
    console.log("Item No. ".concat(i, " which is ").concat(groceryItems3[i]));
    console.log("Pick from rack");
    console.log("Put in cart");
    console.log("========================");
    if (groceryItems3[i] === "fruit") {
        break;
    }
}
var fruitcounter = 0;
var groceryItems4 = ["Bread", "Egg", "Fruit", "Milk", "Fruit", "Coffee", "Tea", "Fruit", "Oil", "Noodles", "Jam", "Fruit", "Cake"];
for (var i = 0; i <= groceryItems4.length; i++) {
    console.log("Item No. ".concat(i, " which is ").concat(groceryItems4[i]));
    console.log("Pick from rack");
    console.log("Put in cart");
    console.log("========================");
    if (groceryItems4[i] === "Fruit") {
        fruitcounter++;
        if (fruitcounter >= 3) {
            break;
        }
    }
}
// *
var fruitcounter1 = 0;
var groceryItems5 = ["Bread", "Egg", "Fruit", "Milk", "Fruit", "Coffee", "Tea", "Fruit", "Oil", "Noodles", "Jam", "Fruit", "Cake"];
for (var i = 0; i <= groceryItems5.length; i++) {
    console.log("Item No. ".concat(i, " which is ").concat(groceryItems5[i]));
    console.log("Pick from rack");
    console.log("Put in cart");
    console.log("========================");
    if (groceryItems5[i] === "Fruit") {
        fruitcounter1++;
        if (groceryItems5[i] === "Fruit" && fruitcounter1 >= 3) {
            continue;
        }
    }
}
// *
// Nested Loop
for (var outer = 1; outer <= 5; outer++) {
    for (var inner = 1; inner <= 3; inner++) {
        console.log("outer loop value is ".concat(outer, "...inner loop value is ").concat(inner));
    }
}
var firstName = ["Mike", "John", "Smith", "Dan"];
var lastName = ["David", "Jack", "Doe"];
var fullName = [];
for (var fName = 0; fName < firstName.length; fName++) {
    for (var lName = 0; lName < lastName.length; lName++) {
        console.log("Full name will be ".concat(firstName[fName], " ").concat(lastName[lName]));
        fullName.push("".concat(firstName[fName], " ").concat(lastName[lName]));
    }
}
console.log(fullName);
// While Loop
var playerLife = 3;
while (playerLife != 0) {
    console.log("Game is running...");
    console.log("Game is running...");
    console.log("Game is running...");
    console.log("Hit Enemy");
    playerLife--;
}
if (playerLife == 0) {
    console.log("*********GAME OVER*********");
}
var e = "USA";
var f = 18.9;
var g = false;
g = true;
// Modules
var firstModule_1 = require("./firstModule");
console.log("Variable f is:", firstModule_1.f);
console.log("value of g is", firstModule_1.g);
require("./firstModule");
// sum(5,7);
