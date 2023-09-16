// const pi = 3.14;

// function surfaceAreaCalculator(radius) {
//   return 4 * pi * radius * radius;
// }

// const surfaceAreaCalculator2 = (radius) => {
//   return 4 * pi * radius * radius;
// };

// const areaOfMars = surfaceAreaCalculator(3390);
// const areaOfMercury = surfaceAreaCalculator2(2440);

// const percentageCalculator = (number, total) => {
//   return (number * total) / 100;
// };
// const a = percentageCalculator(50, 200);

const display = (values) => {
  console.log(values);
};

// display(a);
const EXPECTED_MINUTES_IN_OVEN = 40;
const PREPARATION_MINUTES_PER_LAYER = 2;
const remainingMinutesInOven = (howMuchMinutesLasagnaStayInOven) => {
  return EXPECTED_MINUTES_IN_OVEN - howMuchMinutesLasagnaStayInOven;
};

const preparationTimeInMinutes = (numbersOfLayers) => {
  return numbersOfLayers * PREPARATION_MINUTES_PER_LAYER;
};

const totalTimeInMinutes = (numbersOfLayers, actualMinutesInOven) => {
  return preparationTimeInMinutes(numbersOfLayers) + actualMinutesInOven;
};

// console.log(totalTimeInMinutes(3, 20));

const dayRate = (hourlyRate) => {
  return hourlyRate * 8;
};

const daysInBudget = (budget, hourlyRate) => {
  return Math.round(budget / hourlyRate / 8);
};

const priceWithMonthlyDiscount = (
  hourlyRate,
  dayNumberOfProject,
  mounthlyDiscountRate
) => {
  let sumOfFullyMonthsWorked = Math.floor(dayNumberOfProject / 22);
  let restOfTheDayLessThanAMonth =
    dayNumberOfProject - sumOfFullyMonthsWorked * 22;
  let sumOfDayLessThanMonth = restOfTheDayLessThanAMonth * 8 * hourlyRate;

  let sumOfMonth =
    sumOfFullyMonthsWorked *
    22 *
    8 *
    hourlyRate *
    ((100 - mounthlyDiscountRate) / 100);

  return sumOfMonth + sumOfDayLessThanMonth;
};
display(priceWithMonthlyDiscount(89, 230, 42));
