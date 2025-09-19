// JavaScript Program to Check if a Number is Float or Integer 

{
    function checkNumberType(num) {
        if (Number.isInteger(num)) {
            console.log(num + " is an Integer.");
        } else {
            console.log(num + " is a Float.");
        }
    }

    checkNumberType(25);     
    checkNumberType(25.0);   
    checkNumberType(25.5);   

}