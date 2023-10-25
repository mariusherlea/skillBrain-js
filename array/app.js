birdsPerDay = [2, 5, 0, 7, 4, 1, 3, 0, 2, 5, 0, 1, 3, 1];
totalBirdCount = (birdsPerDay) => {
  let sum = 0;
  for (let i = 0; i < birdsPerDay.length; i++) {
    sum += birdsPerDay[i];
  }

  return sum;
};

birdsInWeek = (birdsPerDay, weekNumber) => {
  let sumInWeek = 0;
  if (weekNumber === 1) {
    for (let i = 0; i <= 6; i++) {
      sumInWeek += birdsPerDay[i];
    }
  } else if (weekNumber === 2) {
    for (let i = 7; i <= 13; i++) {
      sumInWeek += birdsPerDay[i];
    }
  } else return null;
  return sumInWeek;
};
// console.log(totalBirdCount(birdsPerDay));
// console.log(birdsInWeek(birdsPerDay, 2));

birdsPerDay2 = [2, 5, 0, 7, 4, 1];
fixBirdCountLog = (birdsPerDay) => {
  let fixedArray = [...birdsPerDay];
  for (let i = 0; i < birdsPerDay.length; i++) {
    if (i % 2 === 0) {
      fixedArray[i] += 1;
    }
  }
  return fixedArray;
};
// console.log(fixBirdCountLog(birdsPerDay2));

getItem = (array, position) => {
  return array[position];
};

// console.log(getItem([1, 2, 4, 1], 2));

const position = 2;
const replacementCard = 6;

const setItem = (array, position, replacementCard) => {
  array[position] = replacementCard;
  return array;
};
// console.log(setItem([1, 2, 4, 1], position, replacementCard));
const newCard = 8;
const insertItemAtTop = (array, newCard) => {
  array.push(newCard);
  return array;
};
// console.log(insertItemAtTop([5, 9, 7, 1], newCard));

const removeItem = (array, position) => {
  array.splice(position, 1);
  return array;
};
// console.log(removeItem([3, 2, 6, 4, 8], position));

const removeItemFromTop = (array) => {
  array.pop();
  return array;
};
// console.log(removeItemFromTop([3, 2, 6, 4, 8]));

const insertItemAtBottom = (array, newCard) => {
  array.unshift(newCard);
  return array;
};

// // console.log(insertItemAtBottom([5, 9, 7, 1], newCard));

const removeItemAtBottom = (array) => {
  array.shift();
  return array;
};

// console.log(removeItemAtBottom([8, 5, 9, 7, 1]));
const stackSize = 4;
const checkSizeOfStack = (array, stackSize) => {
  if (array.length === stackSize) return true;
  else return false;
};
// console.log(checkSizeOfStack([3, 2, 6, 4, 8], stackSize));

const seeingDouble = (array) => {
  return array.map((ele) => ele * 2);
};
// const deck = [1, 2, 3, 4, 10];
// console.log(seeingDouble(deck));

const deck = [1, 3, 9, 3, 7];
const threeOfEachThree = (numbers) => {
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] === 3) {
      numbers.splice(i + 1, 0, "3");
      numbers.splice(i + 2, 0, "3");
    }
  }

  console.log(numbers);
};

const twoThreesAfterEachThree = function (numbers) {
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] === 3) {
      // Adaugă două elemente 3 după elementul curent (i)
      numbers.splice(i + 1, 0, 3, 3);
      i += 2; // Treci peste cele două elemente adăugate pentru a evita bucle infinite
    }
  }
  console.log(numbers);
};

// twoThreesAfterEachThree(deck);
const deck2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// threeOfEachThree(deck);
const midleTwo = (array) => {
  console.log([array.length / 2, array.length / 2 + 1]);
};

// midleTwo(deck2);
const deck3 = [1, 2, 3, 5, 6, 10];
const sandwichTrick = (array) => {
  let x = array[0];
  let z = array[array.length - 1];
  array.pop();
  array.shift();

  array.splice([array.length / 2], 0, x);
  array.splice([array.length / 2], 0, z);

  console.log(array);
};
// sandwichTrick(deck3);
const deck4 = [1, 2, 3, 4, 10, 2];
const twoIsSpecial = (numbers) => {
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] !== 2) {
      delete numbers[i];
    }
  }
  console.log(numbers);
};
// twoIsSpecial(deck4);

const perfectlyOrdered = (array) => {
  return array.sort((a, b) => a - b);
};

const deck5 = [10, 1, 5, 3, 2, 8, 7];

// console.log(perfectlyOrdered(deck5));

const deck6 = [10, 1, 5, 3, 2];

const reorder = (array) => {
  return array.reverse();
};
console.log(reorder(deck6));
