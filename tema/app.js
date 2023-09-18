//3.2.7

const displayEvenNumber = (upperLimit) => {
  let array = [];
  while (upperLimit >= 0) {
    if (upperLimit % 2 === 0) {
      array.push(upperLimit);
    }

    upperLimit--;
  }
  console.log(
    array.sort(function (a, b) {
      return a - b;
    })
  );
};

// displayEvenNumber(10);

const displayEvenNumber2 = (upperLimit) => {
  let array = [];
  for (let i = 0; i < upperLimit; i++) {
    if (i % 2 === 0) {
      array.push(i);
    }
  }
  return array;
};
// console.log(displayEvenNumber2(10));

const sumOfArray = (array) => {
  let sum = 0;
  for (let i = 0; i <= array.length - 1; i++) {
    sum = sum + array[i];
  }

  return sum;
};

const reverseOfArray = (array) => {
  let reverse = [];
  for (let i = 0; i <= array.length - 1; i++) {
    reverse.unshift(array[i]);
  }
  return reverse;
};
// console.log(reverseOfArray([1, -5, 20, -34, 16, 29, 36, -4]));

const paragraph = "string de test";
const regex = /[a,e,i,o,u]/g;
const found = paragraph.match(regex);

console.log(found.length);
