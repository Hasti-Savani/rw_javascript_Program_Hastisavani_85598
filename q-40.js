// JavaScript Program to Check Whether a String Starts and Ends With Certain Characters

{
    let str = prompt("Enter the string...");
    let s_char = prompt("Enter the starting character...");
    let e_char = prompt("Enter the ending character...");

    let start = str.startsWith(s_char);
    let end = str.endsWith(e_char);

    if (str && s_char && e_char) {
        console.log(`Starts with '${s_char}': ${start}`);
        console.log(`Ends with '${e_char}': ${end}`);
    } else {
        console.log("Please enter valid inputs.");
    }
}