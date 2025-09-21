// JavaScript Program to Check if a Key Exists in an Object

{
    let obj = {
        name: "Alice",
        age: 25,
        city: "London"
    };

    let key = prompt("Enter the key to check...");

    if (key) {
        if (obj.hasOwnProperty(key)) {
            console.log(`Key '${key}' exists in the object.`);
        } else {
            console.log(`Key '${key}' does not exist in the object.`);
        }
    } else {
        console.log("Please enter a valid key.");
    }
}