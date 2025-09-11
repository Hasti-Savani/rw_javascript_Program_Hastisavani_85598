// JavaScript Program to Check the Number of Occurrences of a Character in the String.

{
    const str = prompt("Enter a string...");
    const char = prompt("Enter any single character to count...");

    if (str && char && char.length === 1) {
        let count = str.split(char).length - 1;
        console.log(`'${char}' occurs ${count} times in the string.`);
    } else {
        console.log("Please enter valid inputs.");
    }
}