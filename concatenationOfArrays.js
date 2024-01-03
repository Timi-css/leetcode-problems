/* 
Given an integer array nums of length n, you want to create an array ans of length 2n where ans[i] == nums[i] and ans[i + n] == nums[i] for 0 <= i < n (0-indexed).

Specifically, ans is the concatenation of two nums arrays.

Return the array ans.
*/

let nums = [1, 2, 3];
const getConcatenation = function (nums) {
  let ans = [];

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    console.log(num);
    ans.push(num);
    ans.unshift(nums[i]);
  }
  return ans;
};
console.log(getConcatenation(nums));
