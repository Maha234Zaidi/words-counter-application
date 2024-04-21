#! /usr/bin/env node
//^ This line is called shebang, it tells the OS to run it with nodejs 
//~~~~~~~~~~~~~~~~~~ Words Counter App ~~~~~~~~~~~~~~~~~~//
//! Importing npm packages //
import inquirer from "inquirer";
import chalk from "chalk";
//* Print a intro message //
console.log(chalk.bgMagenta.inverse(`\n\n\t <<<===========>>> Words Counter Application <<<============>>> \n`));
console.log(chalk.bgMagenta.inverse(`\t\t <<<=======>>> Syeda Maha Zaidi <<<=======>>> \n`));
//^ Using inquirer for user input //
let answer = await inquirer.prompt([
    {
        name: "sentence",
        type: "input",
        message: chalk.blue.bold("Enter your sentence to count the word:")
    }
]);
let words = answer.sentence.trim().split(" ");
//! Print the array of words to the console //
console.log(words);
//! Print the word count of the sentence to the console //
console.log(`\n${chalk.yellowBright("Your sentence word count is")} ${chalk.redBright.bold(words.length)}`);
