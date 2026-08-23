// Q8 — Most Frequent Character

    // function mostFreq(str) {
    //     let map = {};
    //     let max = 0;
    //     let result = null;

    //     for (let ch of str) {
    //         map[ch] = (map[ch] || 0) + 1;

    //         if (map[ch] > max) {
    //             max = map[ch];
    //             result = ch;
    //         }
    //     }
    //     return result;
    // }

    // console.log(mostFreq('hello'));

// ------------------ or --------------------

    // function mostFreq(str) {
    //     let map = new Map();
    //     let max = 0;
    //     let result = null;

    //     for (let ch of str) {
    //         map.set(ch, (map.get(ch) ||0) +1);

    //         if (map.get(ch) > max) {
    //             max = map.get(ch);
    //             result = ch;
    //         }
    //     }
    //     return result;
    // }


    // console.log(mostFreq('Javascript'));