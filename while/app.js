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

//https://exercism.org/tracks/javascript/exercises/mixed-juices a try
//Determine how long it takes to mix a juice

const timeToMixJuice = (nameOfJuice) => {
  switch (nameOfJuice) {
    case "Pure Strawberry Joy":
      return 0.5;
      break;
    case "Energizer":
    case "Green Garden":
      return 1.5;
      break;
    case "All or nothing":
      return 5;
      break;
    case "Tropical Island":
      return 3;
    default:
      return 2.5;
  }
};

// console.log(timeToMixJuice("Green Garden"));
// console.log(timeToMixJuice("Berries & Lime"));

//Replenish the lime wedge supply

const limesToCut = (wedgesNeeded, limesStock) => {
  let count = 0;
  console.log(
    `wedgesNeeded ${wedgesNeeded}, limeStock [${limesStock}], count ${count}`
  );
  while (wedgesNeeded > 0 && limesStock.length > 0) {
    let toCut = limesStock[0];
    switch (toCut) {
      case "large":
        wedgesNeeded -= 10;
        limesStock.shift();
        console.log(
          `wedgesNeeded ${wedgesNeeded}, limeStock [${limesStock}], count ${count}`
        );
        count++;
        break;
      case "medium":
        wedgesNeeded -= 8;
        limesStock.shift();
        console.log(
          `wedgesNeeded ${wedgesNeeded}, limeStock [${limesStock}], count ${count}`
        );
        count++;
        break;
      case "small":
        wedgesNeeded -= 6;
        limesStock.shift();
        count++;
        console.log(
          `wedgesNeeded ${wedgesNeeded}, limeStock [${limesStock}], count ${count}`
        );
        break;
    }
  }

  console.log(count);
};

// limesToCut(25, ["small", "small", "large", "medium", "small"]);

//Finish up the shift
const remainingOrders = (timeRemaining, orderRemaining) => {
  while (timeRemaining > 0) {
    let order = orderRemaining[0];
    switch (order) {
      case "Energizer":
        timeRemaining -= 1.5;
        orderRemaining.shift();
        console.log(timeRemaining, orderRemaining);
        break;
      case "All or Nothing":
        timeRemaining -= 5;
        orderRemaining.shift();
        console.log(timeRemaining, orderRemaining);
        break;
      case "Green Garden":
        timeRemaining -= 2.5;
        orderRemaining.shift();
        console.log(timeRemaining, orderRemaining);
        break;
    }
  }
  console.log(orderRemaining);
};

remainingOrders(5, ["Energizer", "All or Nothing", "Green Garden"]);
