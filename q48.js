// JavaScript Program to Add Key/Value Pair to an Object 

{
    let obj = {};
    let key = prompt("Enter the key to add...");
    let value = prompt("Enter the value for the key...");

    if (key) {
        obj[key] = value;
        console.log("Updated object:", obj);
    } else {
        console.log("Please enter a valid key.");
    }
}