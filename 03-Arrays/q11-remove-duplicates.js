// Q11 — Remove Duplicates from an Array

    // function removeDuplicate(arr) {
    //     let result = [];

    //     for (let ch of arr) {
    //         if (!result.includes(ch)) {
    //             result.push(ch);
    //         }
    //     }
    //     return result;
    // }

    // console.log(removeDuplicate([1,1,2,2,3,3,4,4,5,5]));

// --------------------- or --------------------------

    // function removeDuplicate(arr) {
    //     let result = new Set(arr);
    //     return [...result];
    // }

    // console.log(removeDuplicate([1,1,2,2,3,3,4,4,5,5]));