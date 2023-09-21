// const countOfDivisors = (num, range) => {
//   let count = 0;
//   let currentPosition = range;
//   while (currentPosition > 0) {
//     if (currentPosition % num === 0) {
//       count += 1;
//     }

//     currentPosition -= 1;
//   }
//   return count;
// };
// const result = countOfDivisors(2, 10);
// console.log(result);

const timeToMixJuice = (nameOfJuice) => {
  switch (nameOfJuice) {
    case "Pure Strawberry Joy":
      return "0.5 minutes";
    case "Energizer":
      return "1.5 minutes";
    case "Green Garden":
      return "1.5 minutes";
    case "Tropical Island":
      return "3 minutes";
    default:
      return "2.5 minutes";
  }
};

// console.log(timeToMixJuice("Tropical Island"));
// console.log(timeToMixJuice("Berries & Lime"));

//https://exercism.org/tracks/javascript/exercises/mixed-juices a try

const limesToCut = (wedgesNeeded, limesStock) => {
  let i = 0;
  console.log(wedgesNeeded);
  while (wedgesNeeded >= 0) {
    if (limesStock[i] === "small") {
      limesStock[i] = 6;
      wedgesNeeded -= limesStock[i];

      i++;
    } else if (limesStock[i] === "medium") {
      limesStock[i] = 8;
      wedgesNeeded -= limesStock[i];

      i++;
    } else if (limesStock[i] === "large") {
      limesStock[i] = 10;
      wedgesNeeded -= limesStock[i];

      i++;
    }
  }
  var result = limesStock.indexOf(limesStock[i]);
  if (result < 0) {
    return "out of range";
  } else return result;
};
console.log(limesToCut(25, ["small", "small", "large", "medium", "small"]));

const limesToCut2 = (wedgesNeeded, limesStock) => {
  const arrayOfObjects = limesStock.map((str) => {
    return { quantity: str, value: 10 };
  });
  arrayOfObjects.forEach((element) => {
    if (element.quantity === "small") element.value = 6;
    else if (element.quantity === "medium") element.value = 8;
    else if (element.quantity === "large") element.value = 10;
  });
  return arrayOfObjects;
};
// console.log(limesToCut2(33, ["small", "small", "large", "medium", "small"]));
