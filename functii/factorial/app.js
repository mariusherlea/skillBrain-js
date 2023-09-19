let result = 1;
const factorial = (number) => {
  if (number === 0) {
    return "0 factorial";
  }
  while (number > 0) {
    result = result * number;
    number--;
  }
  return result;
};
// console.log(factorial(5));

const recursivFactorial = (n) => {
  if (n === 1) return 1;
  return n * recursivFactorial(n - 1);
};

// console.log(recursivFactorial(5));

const recursiveFibonaci = (n) => {
  if (n < 2) return n;
  else {
    return recursiveFibonaci(n - 1) + recursiveFibonaci(n - 2);
  }
};
for (let i = 0; i < 5; i++) {
  console.log(recursiveFibonaci(i));
}
