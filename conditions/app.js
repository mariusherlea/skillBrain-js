/* 
Daca numar mai mare 5 atunci return ok
daca numar mai mic  atunci return not ok
*/

const hasPassedTest = (grade) => {
  if (grade > 5) {
    return "GOOD";
  } else if (grade === 5) {
    return "OK";
  } else if (grade < 5) {
    return "NOT OK";
  }
};

const result = hasPassedTest(6);
console.log(result);
