nums = [1, 2, 4, 4, 5, 7];

var containsDuplicate = function (nums) {
  for (i = 0; i < nums.length; i++) {
    for (j = 0; j < i; j++) {
      let duplicate = nums[i] === nums[j];

      if (duplicate) {
        return true;
      }
    }
  }
  return false;
};

console.log(containsDuplicate(nums));
