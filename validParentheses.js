let s = "()[]{}";
let isValid = function (s) {
  for (i = 0; i < s.length; i++) {
    let isTrue = s[i].includes("()", "[]", "{}");
    if (isTrue) {
      return true;
    }
    return false;
  }
};

console.log(isValid(s));
