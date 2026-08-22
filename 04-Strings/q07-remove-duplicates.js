// Q7 — Remove Duplicates from a String

    // function removeDuplicate(str) {
    //     let arr = str.split('');
    //     let result = [];

    //     for (let ch of arr) {
    //         if (!result.includes(ch)) {
    //             result.push(ch);
    //         }
    //     }
    //     return result.join('');
    // }

    // console.log(removeDuplicate('hello'));

// ------------------ or --------------------

    // function removeDuplicates(str) {
    //     let seen = new Set();
    //     let result = "";

    //     for (let ch of str) {
    //         if (!seen.has(ch)) {
    //             seen.add(ch);
    //             result += ch;
    //         }
    //     }

    //     return result;
    // }

    // console.log(removeDuplicates("hello"));