// Q.4 Reverse a String:

    // function reverseString(str) {
    //     let reverse = "";

    //     for (let i = str.length-1; i >= 0; i--) {
    //         reverse += str[i];
    //     }
    //     return reverse;
    // }

    // console.log(reverseString("vikash"));

// ------------------ or ----------------
    
    // function reverseString(str) {
    //     let arr = str.split('');
    //     let left = 0;
    //     let right = str.length-1;

    //     while (left < right) {
    //         let temp = arr[left];
    //         arr[left] = arr[right];
    //         arr[right] = temp;

    //         left++;
    //         right--;
    //     }
    //     return arr.join('');
    // }

    // console.log(reverseString('vikash'));

// ------------------ or --------------------

    // function reverseString(str) {
    //     let result = str.split('').reverse().join('');
    //     return result;
    // }

    // console.log(reverseString('Vikash Mishra'));