//  JavaScript Program to Check Armstrong Number 

{
    let num = 153, sum = 0, rem;

    let temp = num
    while (temp > 0) {
        rem = temp % 10
        sum += rem * rem * rem
        temp = parseInt(temp / 10)
    }

    if (sum == num) {
        console.log(`${num} is an Armstrong number`);
    } else {
        console.log(`${num} is not an Armstrong number`);
    }
}