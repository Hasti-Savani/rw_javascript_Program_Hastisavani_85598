// JavaScript Program to Find ASCII Value of Character

{
    const char = prompt("Enter a character...");
    if (char && char.length === 1) {
        const asciiValue = char.charCodeAt(0);
        console.log(`ASCII value of '${char}' is ${asciiValue}`);
    } else {
        console.log("Please enter a single character.");
    }
}
