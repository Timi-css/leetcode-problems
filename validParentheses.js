let s = "()[]{}";
let isValid = function (s) {
  let sArray = s.toString().split(",");

  console.log(sArray);
  for (i = 0; i < sArray.length; i++) {
    if (sArray[i] === "()" || "[]" || "{}") {
      return true;
    }
    return false;
  }
};

console.log(isValid(s));
