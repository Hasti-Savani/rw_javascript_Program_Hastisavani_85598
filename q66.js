// JavaScript Program to Create Countdown Timer 

{
    function countdown(seconds) {
        let remaining = seconds;
        let intervalId = setInterval(() => {
            if (remaining > 0) {
                console.log(`Time left: ${remaining} second(s)`);
                remaining--;
            } else {
                console.log("Time's up!");
                clearInterval(intervalId);
            }
        }, 1000);
    }

    const sec = parseInt(prompt("Enter countdown time in seconds..."), 10);
    if (!isNaN(sec) && sec > 0) {
        countdown(sec);
    } else {
        console.log("Please enter a valid positive number.");
    }
}