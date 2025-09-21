// JavaScript Program to Merge Property of Two Objects

{
    let obj1 = {
        name: "John",
        age: 30
    };

    let obj2 = {
        city: "New York",
        age: 35
    };

    const mergedObj = { ...obj1, ...obj2 };
    console.log("Merged object:", mergedObj);
}

