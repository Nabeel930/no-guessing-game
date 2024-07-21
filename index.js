#! /usr/bin/env node
import inquirer from "inquirer";
let store_number = Math.floor(Math.random() * 10);
console.log("You have only 3 chances to win the game.");
let guess = 0;
let chances = 3;
for (let i = 1; i <= 3; i++) {
    const answer = await inquirer.prompt([
        {
            name: "number",
            type: "number",
            message: "Please enter a number between 0 - 9 :",
        },
    ]);
    if (answer.number == store_number) {
        guess = 1;
        break;
    }
    else {
        chances--;
        console.log(`${chances} chances left`);
    }
}
if (guess == 1) {
    console.log("Hurray! you won the game.");
}
else if (guess == 0) {
    console.log("sorry you 'lost' the game.");
}
console.log(`the correct number is ${store_number}.`);
