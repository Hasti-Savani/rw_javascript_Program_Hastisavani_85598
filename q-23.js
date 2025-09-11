//  JavaScript Program to Find HCF or GCD

{
    let a = parseInt(prompt("Enter any number 1.."));
    let b = parseInt(prompt("Enter any number 2.."));
    let hcf;

    let min = (a > b) ? b : a;

    for (let i = 1; i <= min; i++) {
        if (a % i == 0 && b % i == 0)
            hcf = i;
    }

    console.log(`HCF of ${a} and ${b} is ${hcf}`);
}