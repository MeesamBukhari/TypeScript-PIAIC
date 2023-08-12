import sumOfTwo from "./sum.js";
import differenceOfTwo from "./subtract.js";
import productOfTwo from "./multiply.js";

console.log(sumOfTwo(15, 20));
console.log(differenceOfTwo(20, 10));
console.log(productOfTwo(5, 10));


// =>Inquirer Package
import inquirer from "inquirer";
let answers = await inquirer.prompt([
  {
    name: "username",
    type: "string",
    message: "Enter your name:",
  },
  {
    name: "email",
    type: "string",
    message: "Enter your email:",
  },
  {
    name: "contact",
    type: "number",
    message: "Enter your contact number:",
  },
]);
console.log(answers);
// console.log(`Hello ${answers.username}! How are you?`);


// =>Chalk Package
import chalk from "chalk";
console.log(chalk.green("Hello World"));
console.log("Hello World");
console.log(chalk.bgYellow("Hello World"));
console.log("Hello", chalk.underline.bgBlue("World")+"!");


// =>Node Banner Package
import showBanner from 'node-banner';
// let display = showBanner("Hello World!", "This is created using 'Node-Banner' Package");
// console.log(display);
(async () => {
    await showBanner('The Title', 'This is a suitable tagline');
})();