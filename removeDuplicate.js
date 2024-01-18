let nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];

const removeDuplicates = function (nums) {
  // Define an empty array to push result
  //   let expectedNums = [];
  //   sort the input array
  //   let sortedNums = nums.sort();
  //   //  loop through to isolate indeces
  //   for (i = 0; i < sortedNums.length; i++) {
  //     // check for index existence
  //     if (!expectedNums.includes(sortedNums[i])) {
  //       expectedNums.push(sortedNums[i]);
  //     }
  //   }
  //   return expectedNums;
  left = 1;

  if (nums.length < 1) {
    return 0;
  }

  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] !== nums[i + 1]) {
      nums[left] = nums[i + 1];
      left++;
    }
  }
  return left;
};

console.log(removeDuplicates(nums));
