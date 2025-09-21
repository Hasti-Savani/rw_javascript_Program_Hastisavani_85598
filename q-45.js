//  JavaScript Program to Loop Through an Object

{
    const obj = {
        name: "Bob",
        age: 28,
        country: "Canada"
    };

    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            console.log(`${key}: ${obj[key]}`);
        }
    }
}