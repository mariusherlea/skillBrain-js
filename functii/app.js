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

// const display = (values) => {
//   console.log(values);
// };

// // display(a);
// const EXPECTED_MINUTES_IN_OVEN = 40;
// const PREPARATION_MINUTES_PER_LAYER = 2;
// const remainingMinutesInOven = (howMuchMinutesLasagnaStayInOven) => {
//   return EXPECTED_MINUTES_IN_OVEN - howMuchMinutesLasagnaStayInOven;
// };

// const preparationTimeInMinutes = (numbersOfLayers) => {
//   return numbersOfLayers * PREPARATION_MINUTES_PER_LAYER;
// };

// const totalTimeInMinutes = (numbersOfLayers, actualMinutesInOven) => {
//   return preparationTimeInMinutes(numbersOfLayers) + actualMinutesInOven;
// };

// // console.log(totalTimeInMinutes(3, 20));

// const dayRate = (hourlyRate) => {
//   return hourlyRate * 8;
// };

// const daysInBudget = (budget, hourlyRate) => {
//   return Math.round(budget / hourlyRate / 8);
// };

// const priceWithMonthlyDiscount = (
//   hourlyRate,
//   dayNumberOfProject,
//   mounthlyDiscountRate
// ) => {
//   let sumOfFullyMonthsWorked = Math.floor(dayNumberOfProject / 22);
//   let restOfTheDayLessThanAMonth =
//     dayNumberOfProject - sumOfFullyMonthsWorked * 22;
//   let sumOfDayLessThanMonth = restOfTheDayLessThanAMonth * 8 * hourlyRate;

//   let sumOfMonth = Math.ceil(
//     sumOfFullyMonthsWorked *
//       22 *
//       8 *
//       hourlyRate *
//       ((100 - mounthlyDiscountRate) / 100)
//   );

//   return sumOfMonth + sumOfDayLessThanMonth;
// };
// // display(priceWithMonthlyDiscount(89, 230, 42));

// //Annalyn's Infiltration

// const knightIsAwake = false;
// const archerIsAwake = true;
// const prisonerIsAwake = false;
// const petDogIsPresent = false;
// const canExecuteFastAttack = (knightIsAwake) => {
//   if (knightIsAwake === true) return false;
//   else return true;
// };

// const canSpy = (knightIsAwake, archerIsAwake, prisonerIsAwake) => {
//   if (
//     knightIsAwake === true ||
//     archerIsAwake === true ||
//     prisonerIsAwake === true
//   )
//     return true;
//   else return false;
// };

// const canSignalPrisoner = (archerIsAwake, prisonerIsAwake) => {
//   if (archerIsAwake === false && prisonerIsAwake === true) {
//     return true;
//   } else return false;
// };

// const canFreePrisoner = (
//   knightIsAwake,
//   archerIsAwake,
//   prisonerIsAwake,
//   petDogIsPresent
// ) => {
//   if (petDogIsPresent === true) {
//     if (archerIsAwake === false) {
//       return true;
//     } else return false;
//   } else if (petDogIsPresent === false) {
//     if (
//       knightIsAwake === false &&
//       archerIsAwake === false &&
//       prisonerIsAwake === true
//     ) {
//       return true;
//     } else return false;
//   }
// };

// // display(
// //   canFreePrisoner(
// //     knightIsAwake,
// //     archerIsAwake,
// //     prisonerIsAwake,
// //     petDogIsPresent
// //   )
// // );

// const dividedByTen = (number) => {
//   if (number % 10 === 0) return true;
//   else return false;
// };

// // display(dividedByTen(23));

// const tellFortune = (numarCopii, numePartener, locatiaGeografica, locMunca) => {
//   return `Vei fi un **${locMunca}** in **${locatiaGeografica}** casatorit cu **${numePartener}** si vei avea **${numarCopii}** copii.`;
// };

// // display(tellFortune(3, "Emanuel", "Italia", "Programator"));

// const daysOfWeek = (number) => {
//   switch (number) {
//     case 1:
//       return "Luni";
//     case 2:
//       return "Marti";
//     case 3:
//       return "Miercuri";
//     case 4:
//       return "Joi";
//     case 5:
//       return "Vineri";
//     case 6:
//       return "Sambata";
//     case 7:
//       return "Duminica";
//     default:
//       return "The week have only 7 days";
//   }
// };
// // display(daysOfWeek(3));
// const users = [
//   {
//     name: "Ion",
//     age: 15,
//   },
//   {
//     name: "Mircea",
//     age: 12,
//   },
//   {
//     name: "Matei",
//     age: 20,
//   },
//   {
//     name: "Vasile",
//     age: 7,
//   },
//   {
//     name: "Bob",
//     age: 30,
//   },
// ];
// // console.log(users.sort((a, b) => (a.age > b.age ? 1 : -1)));

// const mappedUsers = users.map((item, index) => {
//   const age = new Date().getFullYear() - item.age;
//   return { index: index + 1, age };
// });

// console.log(mappedUsers);
// const users = [
//   { name: "Victor", age: 19 },
//   { name: "Gheo", age: 1 },
//   { name: "Mircea", age: 4 },
//   { name: "Matei", age: 16 },
// ];
// const result = [];
// let sum = 0;
// for (const { age } of users) {
//   result.push(age);
//   sum += age;
// }
// console.log(sum / users.length);
// console.log(users.map((user) => user.name));

// const findUsers = users.find((item) => {
//   return item.age === 1;
// });
// console.log(findUsers);

// const someUsers = users.some((item) => {
//   return item.age === 4;
// });
// console.log(someUsers);
// const everyUsers = users.every((item) => {
//   return item.age <= 19;
// });
// console.log(everyUsers);

// const array1 = [1, 2, 3, 4];

// 0 + 1 + 2 + 3 + 4
// const initialValue = 0;
// const sumWithInitial = array1.reduce(
//   (accumulator, currentValue) => accumulator + currentValue,
//   initialValue
// );

// console.log(sumWithInitial);

// const rNUmbers = [1, 5, 7, 10];

// const sum = rNUmbers.reduce((accumulator, number) => accumulator + number, 0);
// console.log(sum);
const strings = ["mar", "para"];
const upperCase = (str) => str.map((ele) => ele.toUpperCase());

// console.log(upperCase(strings));
const numere = [1, 2, 3, 4];
const rad = (str) => str.map((ele) => Math.sqrt(ele));
// console.log(rad(numere));
const text = ["a", "asfdsfdsf", "asdsad"];
const UpperCase = (str) => str.filter((ele) => ele.length > 2);
// console.log(UpperCase(text));

const cookingStatus = (timer) => {
  switch (true) {
    case timer > 0:
      return "Not done, please wait";
      break;
    case timer === 0:
      return "Lasagna is done";
      break;
    case !timer:
      return "Forgot to put the timer";
      break;
    default:
      return "Only pozitive timer allowed";
      break;
  }
};

// console.log(cookingStatus(2));

const preparationTime = (layers, averageTime) => {
  if (!averageTime) return layers.length * 2;
  else return layers.length * averageTime;
};
const layers = ["sauce", "noodles", "sauce", "meat", "mozzarella", "noodles"];
// console.log(preparationTime(layers, 3));
// console.log(preparationTime(layers));
const quantities = (array) => {
  let noodel = 0;
  let sauce = 0;

  for (let i = 0; i <= array.length - 1; i++) {
    switch (true) {
      case array[i] === "noodles":
        noodel += 50;
        break;
      case array[i] === "sauce":
        sauce += 0.2;
        break;
    }
  }
  let obj = { noodles: noodel, sauce: sauce };
  console.log(obj);
};

// quantities(layers);
const friendsList = ["noodles", "sauce", "mozzarella", "kampot pepper"];
const myList = ["noodles", "meat", "sauce", "mozzarella"];
const addSecretIngredient = (friendsList, myList) => {
  let secretIngredient = friendsList[friendsList.length - 1];
  myList.push(secretIngredient);
};

// addSecretIngredient(friendsList, myList);
// console.log(myList);
const recipe = {
  noodles: 200,
  sauce: 0.5,
  mozzarella: 1,
  meat: 100,
};
const scaleRecipe = (array, mult) => {
  Object.keys(array).forEach((key) => (array[key] = array[key] * mult));
  return array;
};
console.log(scaleRecipe(recipe, 5));
