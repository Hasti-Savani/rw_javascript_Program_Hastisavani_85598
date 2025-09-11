//  JavaScript Program to Check Prime Number

{
    let num = 11
    let i = 2
    for (i; i < num; i++) {
        if (num % i == 0)
            break
    }
    num == i ? console.log("Prime") : console.log("Not Prime");
}