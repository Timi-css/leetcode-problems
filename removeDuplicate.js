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
  left = 0;
  right = 1;

  while (right < nums.length) {
    if (nums[left] == nums[right]) {
      right++;
    } else {
      left++;
      nums[left] = nums[right];
    }
  }
  return nums;
};

console.log(removeDuplicates(nums));
