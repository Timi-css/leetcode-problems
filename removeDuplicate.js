let nums = [1, 1, 2];

const removeDuplicates = function (nums) {
  // Define an empty array to push result
  let expectedNums = [];
  //   sort the input array
  let sortedNums = nums.sort();
  //  loop through to isolate indeces
  for (i = 0; i < sortedNums.length; i++) {
    // check for index existence in the result array
    if (!expectedNums.includes(sortedNums[i])) {
      expectedNums.push(sortedNums[i]);
    }
  }
  return expectedNums;
};

console.log(removeDuplicates(nums));
