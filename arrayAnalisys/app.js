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
const isOdd = (item) => item % 2 === 1;

// console.log(valies.some(isOdd));

const getFirstEvenCardPosition = (item) => item[1] % 2 !== 1;

console.log(getFirstEvenCardPosition([5, 2, 3, 1]));
