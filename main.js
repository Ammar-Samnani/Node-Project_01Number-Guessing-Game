import inquirer from "inquirer";
import chalk from 'chalk';
console.log(chalk.bgMagentaBright("\nWelcome to Number Guessing Game!\n"));
const randomInteger = Math.random();
const number_to_guess = Math.floor(randomInteger * 10) + 1;
// chalkAnimation.rainbow("\nWelcome to Number Guessing Game!\n");
// console.log(number_to_guess)
let chances = 3;
let chances_left = true;
async function game() {
    while (chances_left) {
        const user_guess = await inquirer.prompt([{
                name: "guess_1",
                type: "number",
                message: "Guess a Number between 1 to 10:"
            }]);
        if (user_guess.guess_1 == number_to_guess) {
            console.log("You Guessed it!👏");
            chances_left = false;
        }
        else {
            if (chances == 1) {
                console.log(`\nYou lose!😭 correct answer is`, chalk.red(`${number_to_guess}`));
                chances_left = false;
            }
            else {
                chances -= 1;
                console.log(`You Guessed Wrong.Try again! You have ` + chalk.red(`${chances}`) + ` Chances left`);
            }
        }
    }
}
game();
