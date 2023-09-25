const deck = [5, 9, 7, 1, 8];

getFirstCard = (deck) => {
  let [card1, card2, card3, card4, card5] = deck;
  return card1;
};

// console.log(getFirstCard(deck));

getSecondCard = (deck) => {
  let [card1, card2, card3, card4, card5] = deck;
  return card2;
};
const deck2 = [3, 2, 10, 6, 7];
// console.log(getSecondCard(deck2));

swapTopTwoCards = (deck) => {
  let [card1, card2, card3, card4, card5] = deck;
  return [card2, card1, card3, card4, card5];
};
const deck3 = [10, 7, 3, 8, 5];
// console.log(swapTopTwoCards(deck3));

const deck4 = [2, 5, 4, 9, 3];
const discardTopCard = (deck) => {
  let inter = ([card1, card2, card3, card4, card5] = deck);
  let firstArray = [card1];
  let secondArray = [card2, card3, card4, card5];
  let result = [firstArray, [secondArray]];
  return result;
};
// console.log(discardTopCard(deck4));

const deck5 = [5, 4, 7, 10];

const insertFaceCards = (deck) => {
  let inter = ([card1, card2, card3, card4] = deck);
  let result = [card1, "jack", "queen", "king", card2, card3, card4];
  return result;
};
console.log(insertFaceCards(deck5));
