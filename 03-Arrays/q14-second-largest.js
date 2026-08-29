// Q14 — Find the Second Largest Element

    // function secondLargest(arr) {
    // let lar = arr[0];

    // for (let i = 0; i < arr.length; i++) {
    //     if (arr[i] > lar) {
    //     lar = arr[i];
    //     }
    // }

    // let secLar = -1;

    // for (let j = 0; j < arr.length; j++) {
    //     if (arr[j] > secLar && arr[j] != lar) {
    //     secLar = arr[j];
    //     }
    // }
    // return secLar;
    // }

    // console.log(secondLargest([1,2,3,4,5]));

// ---------------------- or ------------------------

    // function secondLargest(arr) {
    //     let lar = -Infinity;
    //     let secLar = -Infinity;

    //     for (let num of arr) {
    //         if (num > lar) {
    //             secLar = lar;
    //             lar = num;
    //         } else if (num > secLar && num !== lar) {
    //             secLar = num;
    //         }
    //     }

    //     return secLar;
    // }

    // console.log(secondLargest([1, 2, 3, 4, 5]));