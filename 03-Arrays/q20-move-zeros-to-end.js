// Q20 — Move All Zeros to the End

function moveZeroToEnd(nums) {
  let i = 0;
  let j = 0;

  while (j < nums.length) {
    if (nums[j] != 0) {
      let temp = nums[i];

      nums[i] = nums[j];
      nums[j] = temp;
      i++;
    }
    j++;
  }
  return nums;
}

console.log(moveZeroToEnd([0, 1, 2, 3, 4]));
