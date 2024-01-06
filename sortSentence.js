let s = "is2 sentence4 This1 a3";

function isolateInteger(str) {
  const match = str.match(/\d+/);
  return match ? match[0] : null;
}

const sortSentence = function (s) {
  //   let sortedS = [];
  let sArr = [];

  sArr = s.split(" ");

  //   for (let i = 0; i < sArr.length; i++) {
  //     if (/\d/.test(sArr[i])) {
  //       let index = isolateInteger(sArr[i]);
  //       sArr.sort(index);
  //       console.log(sArr);
  //     }
  //   }

  function compareByNumber(a, b) {
    const numberA = parseInt(a.match(/\d+/)[0], 10);
    const numberB = parseInt(b.match(/\d+/)[0], 10);

    return numberA - numberB;
  }

  sArr.sort(compareByNumber);
  return sArr;
};

console.log(sortSentence(s));

// Output: ["This", "1", "is", "2", "sentence", "
