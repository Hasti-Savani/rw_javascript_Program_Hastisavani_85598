//  JavaScript Program to Compare Elements of Two Arrays 

{
    function compareArrays(arr1, arr2) {
        let common = [];

        for (let i = 0; i < arr1.length; i++) {
            if (arr2.includes(arr1[i]) && !common.includes(arr1[i])) {
                common.push(arr1[i]); 
            }
        }

        return common;
    }

    let a = [1, 2, 3, 4, 5];
    let b = [3, 4, 5, 6, 7];

    console.log("Common elements:", compareArrays(a, b));

}