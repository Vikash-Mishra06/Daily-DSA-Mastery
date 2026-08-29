// Q13 — Find the Largest Element in an Array

function findLargest(arr) {
    let lar = arr[0];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > lar) {
            lar = arr[i];
        }
    }
    return lar;
}

console.log(findLargest([1,2,3,4,5]));