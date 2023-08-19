#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
import add from "./addition.js";
import sub from "./subtraction.js";
import multiply from "./multiplication.js";
import divide from "./division.js";
async function main() {
    const answer = await inquirer.prompt([
        {
            type: "number",
            name: "number1",
            message: "Enter first number",
        },
        {
            type: "number",
            name: "number2",
            message: "Enter second number",
        },
        {
            type: "list",
            name: "operator",
            message: "Please select the operation",
            choices: [
                { name: "Addition", value: add },
                { name: "Subtraction", value: sub },
                { name: "Multiplication", value: multiply },
                { name: "Division", value: divide },
            ],
        },
    ]);
    console.log(chalk.hex('#000080').bgYellowBright.bold(answer.operator(answer.number1, answer.number2)));
}
let condition;
do {
    await main();
    condition = await inquirer.prompt([
        {
            type: "confirm",
            name: "cond",
            message: "Do you want to calculate again?",
        },
    ]);
    //   console.log(condition);
} while (condition.cond);
