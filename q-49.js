// JavaScript Program to Replace All Occurrences of a String

{
    let str = prompt("Enter the main string...");
    let searchStr = prompt("Enter the substring to replace...");
    let repstr = prompt("Enter the replacement...");

    if (str && searchStr && repstr) {
        const result = str.replaceAll(searchStr, repstr);
        console.log(`Original string: ${str}`);
        console.log(`Modified string: ${result}`);
    } else {
        console.log("Please enter valid inputs.");
    }
}