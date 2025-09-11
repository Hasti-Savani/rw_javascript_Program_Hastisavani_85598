// JavaScript Program to Reverse a String

{
    const str = prompt("Enter a string...");
    if (str && str.length > 0) {
        const reversed = str.split('').reverse().join('');
        console.log(`Reversed string: ${reversed}`);
    } else {
        console.log("Please enter a valid string.");
    }
}
