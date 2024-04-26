#! /usr/bin/env node
import inquirer from "inquirer";
// 1 Computer will generate a number.

// 2 User input for guessing a number.

// 3 compare user input with computer generated number and show result.

const RandomNumber = Math.floor(Math.random()* 10 + 1);
const answer = await inquirer.prompt([

    {
        name: "UserGuessedNumber",
        type: "number",
        message: "Please guess a number between 1 to 10"
    }
]);
if(answer.UserGuessedNumber === RandomNumber){
    console.log("Conratulations! you guessed it right.")
}
else{console.log("try again")}