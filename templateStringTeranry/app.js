const buildSign = (ocassion, name) => {
  return `Happy ${ocassion}, ${name} !`;
};

console.log(buildSign("Birthday", "Rob"));

const buildBirthdaySign = (age) => {
  return age >= 50
    ? "Happy Birthday! What a mature fellow you are."
    : "Happy Birthday! What a young fellow you are.";
};

console.log(buildBirthdaySign(51));

const graduationFor = (name, year) => {
  return `Congratulations ${name}\nClass of ${year}`;
};
console.log(graduationFor("Hannah", 2022));

const costOf = (sign, currency) => {
  return `Your sign costs ${20 + sign.length * 2} ${currency}.`;
};

console.log(costOf("Happy Birthday Rob!", "dollars"));
