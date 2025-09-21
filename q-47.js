// JavaScript Program to Count the Number of Keys/Properties in an Object

{
    let obj = {
        name: "Emma",
        age: 22,
        country: "Australia",
        profession: "Engineer"
    };

    let keyCount = Object.keys(obj).length;
    console.log(`Number of keys/properties: ${keyCount}`);
}