//  JavaScript Program to Pass a Function as Parameter 

{
    function greet(name) {
        return "Hello, " + name + "!";
    }
    function processUserInput(callback) {
        let name = prompt("Please enter your name:");
        if (name) {
            console.log(callback(name));
        } else {
            console.log("Name cannot be empty.");
        }
    }
    processUserInput(greet);
}