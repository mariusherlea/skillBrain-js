/* 
Daca numar mai mare 5 atunci return ok
daca numar mai mic  atunci return not ok
*/

const hasPassedTest = (grade) => {
  if (grade < 1 || grade > 10) {
    return "Out of grade interval.";
  }
  if (grade > 5) {
    return "GOOD";
  } else if (grade === 5) {
    return "OK";
  } else if (grade < 5) {
    return "NOT OK";
  }
};
const testResult = hasPassedTest(10);
const checkCondition = (a, b) => {
  if (a > 5 || b < 5) {
    return true;
  } else {
    return false;
  }
};

const result = checkCondition(10, 3);
// console.log(result);

// console.log(!!0);

// console.log(testResult);

const hasPassefTest2 = (grade) => {
  return grade > 4 ? "OK" : "Not OK";
};
const resultTest2 = hasPassefTest2(3);
// console.log(resultTest2);
// console.log(Boolean(9 > 10));
let name = null;
let text = "miss";
let result2 = name ?? text;
// console.log(result2);

const abs = (number) => {
  return number === 0 || number > 0 ? number : -number;
};

let num = abs(-1);
console.log(num);
