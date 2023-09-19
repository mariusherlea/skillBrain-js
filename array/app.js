const listOfSkills = ["HTML", "CSS", "JavaScript"];

// console.log(listOfSkills["2"] !== listOfSkills["02"]);
// console.log(listOfSkills);

const display = (n) => {
  console.log(n);
};

listOfSkills[5] = "Java";
// display(Object.keys(listOfSkills));
// display(listOfSkills);

listOfSkills.length = 2;
// display(listOfSkills);
// display(listOfSkills[8]);

let nume = "Marius";

display(nume.toUpperCase());
