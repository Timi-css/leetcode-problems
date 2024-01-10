/*
Problem: Given two strings of equal length, swap the indices/character of a string to give the same value as the other string. Return true if the string is the same as the other or return false if otherwise

Example: s1 = "bank", s2 = "kanb". Swap s2[0] and s2[3] to produce the string s1. Output will be true
*/

let s1 = "bank";
let s2 = "kanb";

function areAlmostequal(s1, s2) {
  //  push string into arrays for easier manipulation
  let s1Arr = s1.split("");
  let s2Arr = s2.split("");
  //   Check if strings are the same
  if (s1 === s2) return true + " Strings are already equal";
  //   Check if the arrays are the same length
  if (s1Arr.length !== s2Arr.length) {
    console.log("Length not equal"); //  push string into arrays for easier manipulation
    let s1Arr = s1.split("");
    let s2Arr = s2.split("");
    //   Check if strings are the same
    if (s1 === s2) return true + " Strings are already equal";
    //   Check if the arrays are the same length
    if (s1Arr.length !== s2Arr.length) {
      console.log("Length not equal");
      return false;
    }

    function swapElements(arr, index1, index2) {
      // Check if indices are valid
      if (
        index1 >= 0 &&
        index1 < arr.length &&
        index2 >= 0 &&
        index2 < arr.length
      ) {
        // Swap elements using a temporary variable
        var temp = arr[index1];
        arr[index1] = arr[index2];
        arr[index2] = temp;
      }
    }
    //   Loop thru s2Arr and swap first index for the last
    for (let i = 0; i < s2Arr.length; i++) {
      let firstIndex = 0;
      let lastIndex = s2Arr.length - 1;
      swapElements(s2Arr, firstIndex, lastIndex);
      console.log(s2Arr);
      return true;
    }
    return false;
  }

  function swapElements(arr, index1, index2) {
    // Check if indices are valid
    if (
      index1 >= 0 &&
      index1 < arr.length &&
      index2 >= 0 &&
      index2 < arr.length
    ) {
      // Swap elements using a temporary variable
      var temp = arr[index1];
      arr[index1] = arr[index2];
      arr[index2] = temp;
    }
  }
  //   Loop thru s2Arr and swap first index for the last
  for (let i = 0; i < s2Arr.length; i++) {
    let firstIndex = 0;
    let lastIndex = s2Arr.length - 1;
    swapElements(s2Arr, firstIndex, lastIndex);

    if (s1Arr.join("") !== s2Arr.join("")) {
      return false;
    }
    return true;
  }
}

console.log(areAlmostequal(s1, s2));
