let s = "A man, a plan, a canal: Panama";

let isPalindrome = function (s) {
  s = s.replaceAll(",", "");
  s = s.replaceAll(" ", "");
  s = s.replaceAll(":", "");
  s = s.toLowerCase();

  let sArray = s.split("");
  let sArrayReverse = sArray.reverse();
  if (sArray === sArrayReverse) {
    return true;
  }
  if (sArray !== sArrayReverse) {
    return false;
  }
};

console.log(isPalindrome(s));
