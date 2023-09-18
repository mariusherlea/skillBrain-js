const countOfDivisors = (num, range) => {
  let count = 0;
  let currentPosition = range;
  while (currentPosition > 0) {
    if (currentPosition % num === 0) {
      count += 1;
    }

    currentPosition -= 1;
  }
  return count;
};
const result = countOfDivisors(2, 10);
console.log(result);
