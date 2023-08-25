import chalk from "chalk";
import inquirer from "inquirer";
import banner from "node-banner";
const sleep = () => {
    return new Promise((res) => {
        banner("Student Data");
        setTimeout(res, 2000);
    });
};
async function student_data() {
    await sleep();
    let std_input = await inquirer.prompt([
        {
            name: "Name",
            type: "string",
            message: chalk.cyan("What is your name? \n "),
        },
        {
            name: "Age",
            type: "number",
            message: chalk.cyan("How old are you? \n ")
        },
        {
            name: "CNIC",
            type: "number",
            message: chalk.cyan("Enter your CNIC? \n")
        }
    ]);
    console.log(std_input);
}
student_data();
