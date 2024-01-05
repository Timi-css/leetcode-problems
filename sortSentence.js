let s = "is2 sentence4 This1 a3";

function isolateInteger(str) {
  const match = str.match(/\d+/);
  return match ? match[0] : null;
}

const sortSentence = function (s) {
  let sortedS = [];
  let sArr = [];

  sArr = s.split(" ");

  for (let i = 0; i < sArr.length; i++) {
    if (/\d/.test(sArr[i])) {
      let index = isolateInteger(sArr[i]);
      sArr.sort(index);
      console.log(sArr);
    }
  }
};

console.log(sortSentence(s));
