// JavaScript Program to Check Leap Year

{
    function isLeapYear(year) {
        return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
    }

    let year = parseInt(prompt("Enter a year..."), 10);
    if (!isNaN(year)) {
        if (isLeapYear(year)) {
            cons
            ole.log(`${year} is a leap year.`);
        } else {
            console.log(`${year} is not a leap year.`);
        }
    } else {
        console.log("Please enter a valid year.");
    }
}