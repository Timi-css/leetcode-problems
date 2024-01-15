let nums = [1, 1, 2];

const removeDuplicates = function (nums) {
  let expectedNums = [];
  let sortedNums = nums.sort();

  for (i = 0; i < sortedNums.length; i++) {
    if (!expectedNums.includes(sortedNums[i])) {
      expectedNums.push(sortedNums[i]);
    }
  }
  return expectedNums;
};

console.log(removeDuplicates(nums));
