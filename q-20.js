
// JavaScript Program to Make a Simple Calculator

{
    let a = parseInt(prompt("Enter any number 1.."));
    let b = parseInt(prompt("Enter any number 2.."));

    let choice = prompt("Enetr you opration... ")

    switch (choice) {
        case '+':
            console.log(`Addition of two numbers : ${a + b}`);
            break;
        case '-':
            console.log(`Subtraction of two numbers : ${a - b}`);
            break;
        case '*':
            console.log(`Multiplication of two numbers : ${a * b}`);
            break;
        case '/':
            console.log(`Division of two numbers : ${a / b}`);
            break;
        case '%':
            console.log(`Modul Division of two numbers : ${a % b}`);
            break;
        case '**':
            console.log(`Modul Division of two numbers : ${a ** b}`);
            break;
        default:
            console.log(`Inavlid`);
    }
}
