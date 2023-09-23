//https://exercism.org/tracks/javascript/exercises/lucky-numbers
//Calculate the sum for the numbers on the slot machine
const twoSum = (firstArray, secondArray) => {
  let sumOfFirstArray,
    sumOfSecondArray = 0;
  for (i = 0; i <= 2; i++) {
    sumOfFirstArray += String(firstArray[i]);
    sumOfSecondArray += String(secondArray[i]);
  }
  console.log(
    Number(removeCharFromString(sumOfFirstArray)) +
      Number(removeCharFromString(sumOfSecondArray))
  );
};

const removeCharFromString = (stringS1) => {
  return stringS1.replace(new RegExp(`[${undefined}]`, "g"), "");
};
// twoSum([1, 2, 3], [0, 7]);
// Determine if a number is a palindrome
