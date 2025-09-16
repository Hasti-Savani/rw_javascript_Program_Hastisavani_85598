// JavaScript Program to Validate An Email Address 

{
    function validateEmail(email) {
        let regex = /^[\w.-]+@[\w.-]+\.[a-zA-Z]{2,}$/;
        return regex.test(email);
    }

    let email = prompt("Enter an email address...");
    if (email) {
        if (validateEmail(email)) {
            console.log("Valid email address.");
        } else {
            console.log("Invalid email address.");
        }
    } else {
        console.log("Please enter an email address.");
    }
}