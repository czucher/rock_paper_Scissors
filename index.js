console.log ("Weolcome to Rock, Paper, Scissors!")

const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout
});


    // Obtain a choice from user
var choice1

    readline.question("What is your choice?\n", (choice1) =>{
        console.log("You chose" + " " + choice1);
        readline.close ();

    //Validate the user's choice and tell them if they made a mistake


//coputer choice

var choice2 = Math.random();

if (choice2 <= 0.33) {
    choice2 = 'rock';
} else if (choice2 <= 0.67) {
    choice2 = 'paper';
} else {
    choice2 = 'scissors';
}
console.log('Computer chose: ' + choice2);



    // Compare the two choices


    var compare  = function (choice1, choice2) {
        if (choice1 === 'rock') {
            if (choice2 === 'scissors') {
                return 'Rock wins!';
            } else {
                return 'Paper wins!';
            }
        } else if (choice1 === 'scissors') {
            if (choice2 === 'rock') {
                return 'Rock wins!';
            } else {
                return 'Scissors win!';
            }
        } else if (choice1 === 'paper') {
            if (choice2 === 'rock') {
                return 'Paper wins!';
            } else {
                return 'Scissors win!';
            }
        
            readline.question("What is your choice?\n", (compare))
            readline.close ();
        console.log("lets see who won\n" + compare)}}});
