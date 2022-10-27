const familyNumber = (numberFamily, member) => {
  let result = [];

  if (member.length !== numberFamily) {
    return "Input must be equal with count of family";
  }

  member.forEach((m) => {
    if (m < 4) {
      const plus = 4 - m;
      m = m + plus;
    }

    if (m > 4) {
      const minus = m - 4;
      m = m - minus;
    }

    result.push(m);
  });

  member.reduce(p, (c) => p + c);

  return result;
};

console.log(familyNumber(5, [1, 2, 2, 4, 6]));
