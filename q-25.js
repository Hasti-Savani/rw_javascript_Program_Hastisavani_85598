// JavaScript Program to Find the Factors of a Number

{
    let num = parseInt(prompt("Enter any number.."));

    console.log("Factors of number : ");
    
    for (let i = 1; i <= num; i++) {
        if (num % i == 0)
            console.log(`${i}`);
    }

}
