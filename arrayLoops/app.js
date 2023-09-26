const cardType = 3;
const cardTypeCheck = (card, cardType) => {
  let sum = 0;
  card.forEach((element) => {
    if (element === cardType) sum++;
  });
  return sum;
};
// console.log(cardTypeCheck([1, 2, 3, 4], cardType));

const determineOddEvenCards = (card, arg) => {
  let sum = 0;
  if (arg === true) {
    card.forEach((element) => {
      if (element % 2 === 0) sum++;
    });
  } else if (arg === false) {
    for (el of card) {
      if (el % 2 !== 0) sum++;
    }
  }
  return sum;
};
console.log(determineOddEvenCards([1, 2, 3, 1, 5, 6], false));
