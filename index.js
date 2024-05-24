#! /usr/bin/env node
import inquirer from "inquirer";
// 1. Computer will generate random number
// 2. User input for guessing number
// 3. Compare user input with computer generated number
const randomNumber = Math.floor(Math.random() * 10 + 1);
const answers = await inquirer.prompt([{
        message: "please guess a number between 1-10:",
        type: "number",
        name: "userGuessedNumber"
    }]);
if (answers.userGuessedNumber === randomNumber) {
    console.log("Wow! you guessed correct number.");
}
else {
    console.log("You guessed wrong number.");
}
