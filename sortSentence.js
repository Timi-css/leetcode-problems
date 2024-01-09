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
/*  Comments 
Runtime: 48ms
MemoryUsage: 42.16MB

Notes: Look to optimize solution in future to use less runtime and space, most importantly space
*/
