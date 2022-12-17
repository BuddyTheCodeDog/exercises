//1. Using the `prompt-promise` npm library, ask the user a math question, 
//ie: "What is 5 + 7?". Verify the user has provided answer, and if not, 
//tell the user it is incorrect. The user can have a maximum amount of guesses of 
//3 - after that, they can no longer guess and the program should exit. If the user is correct, 
//let them know, and the program should exist.

prompt = require("prompt-promise");

async function mathQuestion(){

    let tries = 0
    while(tries < 3){

        const guess = await prompt("what is the ln of e?\n");

        if(guess == 1){
            console.log("correct");
            process.exit();
        }
        else{
            console.log("WRONG");
            tries = tries + 1;
            if(tries == 3){
                console.log("TOO MANY GUESSES");
                process.exit();
            }

        }
    }
    
}

mathQuestion();