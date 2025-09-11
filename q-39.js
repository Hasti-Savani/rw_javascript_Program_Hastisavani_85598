// JavaScript Program to Count the Number of Vowels in a String

{
    let str = prompt("Enter any string........")

    let len = str.length;
    let count = 0;
    for (let i = 0; i < len; i++) {
        if ((str[i] == 'a' || str[i] == 'e' || str[i] == 'i' || str[i] == 'o' || str[i] == 'u') ||
            (str[i] == 'A' || str[i] == 'E' || str[i] == 'I' || str[i] == 'O' || str[i] == 'U')) {
            count++;
        }
    }
    console.log(`Total Vowel count is : ${count}`);
}