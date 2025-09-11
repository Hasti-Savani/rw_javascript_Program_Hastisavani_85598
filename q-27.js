// JavaScript Program to Guess a Random Number 

{
    let num;
    while (num != 13) {
        num = parseInt(prompt("Enter any number.."));

        if (num < 13)
            console.log("Your Guess number is too low");
        else
            console.log("Your Guess number is too high");
    }

    console.log("Congratulations...........Your Guess number is right");
}