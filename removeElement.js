let nums = [0, 1, 2, 2, 3, 0, 4, 2];
let val = 2;

const removeElement = function (nums, val) {
  let unwantedVal = [];
  let k = [];
  nums.sort();

  for (i = 0; i < nums.length; i++) {
    if (val == nums[i]) {
      unwantedVal.push(nums[i]);
    }

    console.log(nums.pop(unwantedVal[i]));
  }
  console.log("Should return here");
};

console.log(removeElement(nums, val));
