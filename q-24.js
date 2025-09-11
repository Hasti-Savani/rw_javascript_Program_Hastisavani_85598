// JavaScript Program to Find LCM

{
    let a = parseInt(prompt("Enter number 1.."));
    let b = parseInt(prompt("Enter number 2.."));

    let max = (a > b) ? a : b;
    let lcm = max;

    while (lcm % a != 0 || lcm % b != 0) {
        lcm += max;
    }

    console.log(`HCF of ${a} and ${b} is ${lcm}`);

}