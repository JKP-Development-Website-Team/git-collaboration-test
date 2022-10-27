const splitVowelConsonant = (str) => {
  const vowels = str.match(/[aeiou]/gi);
  const consonants = str.match(/[^aeiou]/gi);
  let result = [];
  vowels.concat([""], consonants).forEach((k) => {
    result.push(k);
  });

  return result;
};

console.log(splitVowelConsonant("Ramy Tampan"));
