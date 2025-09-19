// JavaScript Program to Remove Specific Item From an Array 

{
    let arr = [1, 2, 3, 4, 5];

    // splice
    arr.splice(2, 1);
    console.log(arr);

    // filter
    let newArr = arr.filter(item => item !== 3);
    console.log(newArr);

}