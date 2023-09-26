const values = [9, 7, 3, 2];

getCardPosition = (values, card) => {
  return values.indexOf(card);
};
// console.log(getCardPosition(values, 2));
const values2 = [2, 3, 4, 5];
doesStackIncludeCard = (values, card) => {
  return values.includes(card);
};
// console.log(doesStackIncludeCard(values2, 3));
const valies = [3, 2, 6, 4, 8];
const isEachCardEven = (item) => item % 2 === 1;

// console.log(valies.every(isEachCardEven));

const doesStackIncludeOddCard = (item) => item[1] % 2 === 0;

// console.log(doesStackIncludeOddCard([3, 2, 6, 4, 8]));

const numbers = [4, 2, 8, 7, 9];
const getFirstOddCard = numbers.find((num) => num % 2 !== 0);
// console.log(getFirstOddCard);
const numbers2 = [5, 2, 3, 1];
const getFirstEvenCardPosition = numbers2.findIndex((num) => num % 2 === 0);
console.log(getFirstEvenCardPosition);
