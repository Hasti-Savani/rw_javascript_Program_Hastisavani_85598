// JavaScript Program to Compare Two Strings

{
    let str1 = prompt("Enter the first string...");
    let str2 = prompt("Enter the second string...");

    if (str1 !== null && str2 !== null) {
        if (str1 === str2) {
            console.log("The strings are equal.");
        } else {
            console.log("The strings are not equal.");
        }
    } else {
        console.log("Please enter both strings.");
    }
}