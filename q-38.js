// JavaScript Program to Convert the First Letter of a String into UpperCase

{
    const str = prompt("Enter a string...");
    if (str && str.length > 0) {
        const result = str.charAt(0).toUpperCase() + str.slice(1);
        console.log(`Result: ${result}`);
    } else {
        console.log("Please enter a valid string.");
    }
}
