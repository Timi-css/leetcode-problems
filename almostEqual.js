/*
Problem: Given two strings of equal length, swap the indices/character of a string to give the same value as the other string. Return true if the string is the same as the other or return false if otherwise

Example: s1 = "bank", s2 = "kanb". Swap s2[0] and s2[3] to produce the string s1. Output will be true
*/

let s1 = "attack";
let s2 = "defend";

function areAlmostequal(s1, s2) {
  //  push string into arrays for easier manipulation
  let s1Arr = s1.split("");
  let s2Arr = s2.split("");
  //   Check if strings are the same
  if (s1 === s2) return true + " Strings are already equal";
  //   Check if the arrays are the same length
  if (s1Arr.length !== s2Arr.length) {
    return false;
  }

  //   Loop thru s2Arr and swap first index for the last
  for (let i = 0; i < s2Arr.length; i++) {
    console.log(s2Arr[i]);
    let firstIndex = s2Arr[0];
    let lastIndex = s2Arr[3];
    if (firstIndex === lastIndex && firstIndex !== s1Arr[i]) return false;
    if (s1Arr[0] !== s2Arr[i - 1]) return false;
  }
  return true;
}

console.log(areAlmostequal(s1, s2));
