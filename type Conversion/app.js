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

luckyNumber = (str) => {
  let stringNumber = str.toString();
  let reversed = "";
  for (const char of stringNumber) {
    reversed = char + reversed;
  }
  reversed = parseInt(reversed);

  if (str === reversed) return "palindrome";
  else return null;
};
// console.log(luckyNumber(1441));

//error message for invalid user input

errorMesage = (numberS) => {
  if (numberS.length === 0) return "Required field";
  else {
    switch (typeof numberS) {
      case "string":
        return "Must be a number besides 0";
        break;

      case "number":
        if (numberS > 0) return "``";
        else return "besides 0";
        break;
    }
  }
};
console.log(errorMesage(1));
