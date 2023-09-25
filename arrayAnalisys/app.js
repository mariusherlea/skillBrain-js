const values = [9, 7, 3, 2];

// Array#some stops iteration as soon as the given predicate returns true; it
// returns false if none of the elements in the array pass the predicate. In
// other words: return true if for some item the given function returns true.
//
getCardPosition = (values, card) => {
  return values.indexOf(card);
};
console.log(getCardPosition(values, 2));
