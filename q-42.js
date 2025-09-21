// JavaScript Program to Check Whether a String Starts and Ends With Certain Characters 

{
    let str = prompt("Enter the string...");
    let startChar = prompt("Enter the starting character...");
    let endChar = prompt("Enter the ending character...");

    if (str && startChar && endChar) {
        let startsWith = str.startsWith(startChar);
        let endsWith = str.endsWith(endChar);
        console.log(`Starts with '${startChar}': ${startsWith}`);
        console.log(`Ends with '${endChar}': ${endsWith}`);
    } else {
        console.log("Please enter valid inputs.");
    }
}