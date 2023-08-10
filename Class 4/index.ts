// For Loop
let groceryItems = ["Bread", "Egg", "Fruit", "Milk", "Coffee"];
for (let i=0; i<groceryItems.length; i++) {
    console.log(`Item No. ${i} which is ${groceryItems[i]}`);
    console.log("Pick from rack");
    console.log("Put in cart");
    console.log("========================");
}

let groceryItems1 = ["Bread", "Egg", "Fruit", "Milk", "Coffee"];
for (let i=0; i<groceryItems1.length; i+=2) {
    console.log(`Item No. ${i} which is ${groceryItems1[i]}`);
    console.log("Pick from rack");
    console.log("Put in cart");
    console.log("========================");

    if (groceryItems1[i] === "Fruit") {
        break;
    }
}

let groceryItems2 = ["Bread", "Egg", "Fruit", "Milk", "Coffee", "Tea", "Oil"];
for (let i=0; i<=4; i++) {
    console.log(`Item No. ${i} which is ${groceryItems2[i]}`);
    console.log("Pick from rack");
    console.log("Put in cart");
    console.log("========================");
}

let groceryItems3 = ["Bread", "Egg", "fruit", "Milk", "Fruit", "Coffee", "Tea", "Oil"];
for (let i=0; i<=groceryItems3.length; i++) {
    console.log(`Item No. ${i} which is ${groceryItems3[i]}`);
    console.log("Pick from rack");
    console.log("Put in cart");
    console.log("========================");
    
    if (groceryItems3[i] === "fruit") {
        break;
    }
}

let fruitcounter = 0;
let groceryItems4 = ["Bread", "Egg", "Fruit", "Milk", "Fruit", "Coffee", "Tea", "Fruit", "Oil", "Noodles", "Jam", "Fruit", "Cake"];
for (let i=0; i<=groceryItems4.length; i++) {
    console.log(`Item No. ${i} which is ${groceryItems4[i]}`);
    console.log("Pick from rack");
    console.log("Put in cart");
    console.log("========================");
    
    if (groceryItems4[i] === "Fruit") {
        fruitcounter++;
        if (fruitcounter>=3) {
        break;
        }
    }
}

// *
let fruitcounter1 = 0;
let groceryItems5 = ["Bread", "Egg", "Fruit", "Milk", "Fruit", "Coffee", "Tea", "Fruit", "Oil", "Noodles", "Jam", "Fruit", "Cake"];
for (let i=0; i<=groceryItems5.length; i++) {
    console.log(`Item No. ${i} which is ${groceryItems5[i]}`);
    console.log("Pick from rack");
    console.log("Put in cart");
    console.log("========================");
    
    if (groceryItems5[i] === "Fruit") {
        fruitcounter1++;
        if (groceryItems5[i] === "Fruit" && fruitcounter1>=3) {
        continue;
        }
    }
}

// 'egg' is skipped here
let groceryItemss = ["Bread","cooking oil", "egg","milk","veg", "fruits"];
let eggCounter=0;
for(let item = 0; item < groceryItemss.length; item++){

    if(groceryItemss[item] == "egg"){
        eggCounter++;
    }

    if(groceryItemss[item] == "egg" && eggCounter > 0){
        continue; //skip
    }
        console.log(`item no, ${item} which is ${groceryItemss[item]}`);
        console.log(`pick from rack`);
        console.log(`put in you cart`);
        console.log(`===========================`);    
}


// Nested Loop
for (let outer=1; outer<=5; outer++) {
    for (let inner=1; inner<=3; inner++) {
        console.log(`outer loop value is ${outer}...inner loop value is ${inner}`);
    }
}

let firstName = ["Mike", "John", "Smith", "Dan"];
let lastName = ["David", "Jack", "Doe"];
let fullName = [];
for (let fName=0; fName<firstName.length; fName++) {
    for (let lName=0; lName<lastName.length; lName++) {
        console.log(`Full name will be ${firstName[fName]} ${lastName[lName]}`);
        fullName.push(`${firstName[fName]} ${lastName[lName]}`);
    }
}
console.log(fullName);

// While Loop
let playerLife = 3;
while (playerLife != 0) {
    console.log("Game is running...");
    console.log("Game is running...");
    console.log("Game is running...");

    console.log("Hit Enemy");
    playerLife--;
}
if (playerLife == 0) {
    console.log("*********GAME OVER*********")
}

let state = "normal";
let counter=0;

while(state != "hit"){
    console.log("runnig...");
    console.log("runnig...");
    console.log(counter);
    ++counter;

    if(counter ==3){
        state = "hit";
    }
}





let e = "USA";
let f = 18.9;
let g = false;
g = true;

// Modules
import {f as newf, g as newg} from "./firstModule";
console.log("Variable f is:", newf);
console.log("value of g is", newg);

import "./firstModule";
// sum(5,7);