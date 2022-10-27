const sortVowel = (str) => {
  let strArray = str.split("");
  let strResult = [];

  for (let i = 0; i <= strArray.length; i++) {
    if (
      !strArray[i] === "a" ||
      !strArray[i] === "A" ||
      !strArray[i] === "i" ||
      !strArray[i] === "I" ||
      !strArray[i] === "U" ||
      !strArray[i] === "u" ||
      !strArray[i] === "e" ||
      !strArray[i] === "E" ||
      !strArray[i] === "o" ||
      !strArray[i] === "O"
    ) {
      strResult.push(strArray[i]);
    }
  }

  return strResult;
};

console.log(sortVowel("RamyTampan"));
