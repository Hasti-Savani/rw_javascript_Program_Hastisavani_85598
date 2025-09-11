//  JavaScript Program to Replace Characters of a String

{
    const str = prompt("Enter a string...");
    const charToReplace = prompt("Enter the character to replace...");
    const replacementChar = prompt("Enter the replacement character...");

    if (str && charToReplace && replacementChar) {
        const replacedStr = str.replace(new RegExp(charToReplace, 'g'), replacementChar);
        console.log(`Original string: ${str}`);
        console.log(`Modified string: ${replacedStr}`);
    } else {
        console.log("Please enter valid inputs.");
    }
}