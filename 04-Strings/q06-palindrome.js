// Q6 — Palindrome Check

    // function checkPalindrome(str) {
    //     let left = 0;
        
    //     for (let right = str.length-1; right >= left; right--) {
    //         if (str[left] !== str[right]) {
    //             return false;
    //         }
    //         left++;
    //     }
    //     return true;
    // }

    // console.log(checkPalindrome('madam'));

// ------------------ or --------------------

    // function checkPalindrome(str) {
    //     let left = 0;
    //     let right = str.length - 1;

    //     while (left < right) {
    //         if (str[left] !== str[right]) {
    //             return false;
    //         }

    //         left++;
    //         right--;
    //     }

    //     return true;
    // }

    // console.log(checkPalindrome('madam'));
    
// ------------------ or --------------------

    // function checkPalindrome(str) {
    //     let result = str.split('').reverse().join('');
    //     return str === result;
    // }

    // console.log(checkPalindrome('madam'));