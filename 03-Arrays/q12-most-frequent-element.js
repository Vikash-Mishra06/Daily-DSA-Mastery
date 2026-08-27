// Q12 — Most Frequent Element in an Array

    // function mostFreq(arr) {
    //     let map = {};
    //     let max = 0;
    //     let result = null;

    //     for (let ch of arr) {
    //         map[ch] = (map[ch] || 0) + 1;
    //         if (map[ch] > max) {
    //             max = map[ch];
    //             result = ch;
    //         }
    //     }
    //     return result;
    // }

    // console.log(mostFreq([1,1,2,3,4,5]));

// ------------------ or ------------------------

    // function mostFreq(arr) {
    //     let map = new Map();
    //     let max = 0;
    //     let result = null;
        
    //     for (let ch of arr) {
    //         map.set(ch, (map.get(ch) || 0) + 1);

    //         if (map.get(ch) > max) {
    //             max = map.get(ch);
    //             result = ch;
    //         }
    //     }
    //     return result;
    // }

    // console.log(mostFreq([1,1,2,3,4,5]));