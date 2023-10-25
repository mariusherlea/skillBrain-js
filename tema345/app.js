const findSquare = (num) => {
  return num ** 2;
};

// console.log(findSquare(0));

const getRandom = (min, max) => {
  return Math.random() * (max - min) + min;
};

// console.log(getRandom(3, 5));

const letterCount = (string, letter) => {
  let stringS = string.toUpperCase();
  let letterS = letter.toUpperCase();
  let sum = 0;
  for (let i = 0; i <= stringS.length - 1; i++) {
    if (stringS.charAt(i) == letterS) {
      sum = sum + 1;
    }
  }
  return sum;
};

// console.log(letterCount("Vreau să lucrez în IT", "r"));

const addNumber = (...argumente) => {
  let sum = 0;
  for (let i = 0; i <= argumente.length - 1; i++) {
    sum += argumente[i];
  }
  console.log(sum);
};

// addNumber(1, 2, 3, 4, 5);
