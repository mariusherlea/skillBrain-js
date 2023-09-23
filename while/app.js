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

// const timeToMixJuice = (nameOfJuice) => {
//   switch (nameOfJuice) {
//     case "Pure Strawberry Joy":
//       return "0.5 minutes";
//     case "Energizer":
//       return "1.5 minutes";
//     case "Green Garden":
//       return "1.5 minutes";
//     case "Tropical Island":
//       return "3 minutes";
//     default:
//       return "2.5 minutes";
//   }
// };

// console.log(timeToMixJuice("Tropical Island"));
// console.log(timeToMixJuice("Berries & Lime"));

//https://exercism.org/tracks/javascript/exercises/mixed-juices a try

const limesToCut = (wedgesNeeded, limesStock) => {
  let len = limesStock.length;
  let sum = 0;
  let i = 0;
  for (let i = 0; i < limesStock.length; i++) {
    if (limesStock[i] === "small") {
      limesStock[i] = 6;
    } else if (limesStock[i] === "medium") {
      limesStock[i] = 8;
    } else if (limesStock[i] === "large") {
      limesStock[i] = 10;
    }
  }
  console.log("required: ", wedgesNeeded);
  console.log("array of lime:", limesStock);
  console.log("lenght of array", len);

  while (i < 5 && sum < wedgesNeeded) {
    sum += limesStock[i];
    i++;
  }

  console.log(sum, i);
};

limesToCut(13, ["small", "small", "large", "medium", "small"]);
