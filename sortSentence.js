let s = "Myself2 Me1 I4 and3";

const sortSentence = function (s) {
  //   let sortedS = [];
  let sArr = [];

  //   function concatenateString(arr) {
  //     let concatString = arr.join(" ");
  //     return concatString;
  //   }

  sArr = s.split(" ");

  function compareByNumber(a, b) {
    const numberA = parseInt(a.match(/\d+/)[0], 10);
    const numberB = parseInt(b.match(/\d+/)[0], 10);

    return numberA - numberB;
  }

  sArr.sort(compareByNumber);
  let newSarr = [];
  for (let i of sArr) {
    let newS = i.replace(/\d/g, "");
    newSarr.push(newS);
  }
  let result = newSarr.join(" ");
  return result;
};

console.log(sortSentence(s));

// Output: ["This", "1", "is", "2", "sentence", "
