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

  let sumOfMonth = Math.ceil(
    sumOfFullyMonthsWorked *
      22 *
      8 *
      hourlyRate *
      ((100 - mounthlyDiscountRate) / 100)
  );

  return sumOfMonth + sumOfDayLessThanMonth;
};
// display(priceWithMonthlyDiscount(89, 230, 42));

//Annalyn's Infiltration

const knightIsAwake = false;
const archerIsAwake = true;
const prisonerIsAwake = false;
const petDogIsPresent = false;
const canExecuteFastAttack = (knightIsAwake) => {
  if (knightIsAwake === true) return false;
  else return true;
};

const canSpy = (knightIsAwake, archerIsAwake, prisonerIsAwake) => {
  if (
    knightIsAwake === true ||
    archerIsAwake === true ||
    prisonerIsAwake === true
  )
    return true;
  else return false;
};

const canSignalPrisoner = (archerIsAwake, prisonerIsAwake) => {
  if (archerIsAwake === false && prisonerIsAwake === true) {
    return true;
  } else return false;
};

const canFreePrisoner = (
  knightIsAwake,
  archerIsAwake,
  prisonerIsAwake,
  petDogIsPresent
) => {
  if (petDogIsPresent === true) {
    if (archerIsAwake === false) {
      return true;
    } else return false;
  } else if (petDogIsPresent === false) {
    if (
      knightIsAwake === false &&
      archerIsAwake === false &&
      prisonerIsAwake === true
    ) {
      return true;
    } else return false;
  }
};

// display(
//   canFreePrisoner(
//     knightIsAwake,
//     archerIsAwake,
//     prisonerIsAwake,
//     petDogIsPresent
//   )
// );

const dividedByTen = (number) => {
  if (number % 10 === 0) return true;
  else return false;
};

// display(dividedByTen(23));

const tellFortune = (numarCopii, numePartener, locatiaGeografica, locMunca) => {
  return `Vei fi un **${locMunca}** in **${locatiaGeografica}** casatorit cu **${numePartener}** si vei avea **${numarCopii}** copii.`;
};

// display(tellFortune(3, "Emanuel", "Italia", "Programator"));

const daysOfWeek = (number) => {
  switch (number) {
    case 1:
      return "Luni";
    case 2:
      return "Marti";
    case 3:
      return "Miercuri";
    case 4:
      return "Joi";
    case 5:
      return "Vineri";
    case 6:
      return "Sambata";
    case 7:
      return "Duminica";
    default:
      return "The week have only 7 days";
  }
};
// display(daysOfWeek(3));
