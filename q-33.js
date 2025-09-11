// JavaScript Program to Check Whether a String is Palindrome or Not.

{
    const str = prompt("Enter a string...");
    if (str) {
        const cleanedStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
        const reversedStr = cleanedStr.split('').reverse().join('');
        if (cleanedStr === reversedStr) {
            console.log(`'${str}' is a palindrome.`);
        } else {
            console.log(`'${str}' is not a palindrome.`);
        }
    } else {
        console.log("Please enter a valid string.");
    }
}