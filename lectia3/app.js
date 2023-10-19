// var nume = "marius";
// console.log(nume);
// var nume = "Maria";
// console.log(nume);

// if (true) {
//   var numePersoana = "Ion"; //schimbam let cu var sa vedem diferenta
//   console.log(numePersoana);
// }
// console.log(numePersoana);

// const [first, second, ...rest] = [1, 2, 3, 4, 5]; //destructurare si rest (...variabila)
// console.log(first);
// console.log(second);
// console.log(rest);

//manipulare array & spread operator

// const array1 = [1, 2, 3, 4];
// const array2 = [array1, 5, 6, 7];
// console.log(array2);
// const array3 = [...array1, 5, 6, 7];
// console.log(array3);
// const array4 = [7, 8, 9];
// const array5 = [...array1, ...array4];
// console.log(array5);

// console.log(array1.map((a) => a * 2));

// for (let i = 1; i <= 10; i++) {
//   for (let j = 1; j <= 10; j++) {
//     console.log(`${i}x${j} = ${i * j}`);
//   }
// }

// const stergeElement = (array, element) => {
//   for (let i = 0; i <= array.length; i++) {
//     if (array[i] === element) {
//       array.splice(i, 1);
//       i--;
//     }
//   }
//   console.log(array);
// };
// stergeElement([2, 5, 5, 5, 5, 6, 7, 10, 5], 5);

// let numar1 = 1892345;
// function numarDeCifre(numar) {
//   let contor = 0;
//   while (numar >= 1) {
//     numar = Math.floor(numar / 10);
//     contor++;
//   }
//   return contor;
// }

// console.log(numarDeCifre(numar1));

// function numarDeCifre1(numar) {
//   console.log(numar.toString().length);
// }

// const number = [-1, 4, -11, -10, 99, 33, 71, -40];

// function stergeNegativ() {
//   let result = [];
//   result = number.filter((x) => x >= 0);
//   return result;
// }

// console.log(stergeNegativ());

// function stergeNegativ1(array) {
//   let newArray = [];
//   let i = 0;
//   while (i < array.length) {
//     if (array[i] >= 0) {
//       newArray.push(array[i]);
//     }
//     i++;
//   }
//   return newArray;
// }

// console.log(stergeNegativ1(number));
const shoppingList = [88, 45, 55, 55, 23, 105, 55];
const promoProducts = [77, 105, 108, 55, 88];
const stergeCeNuEsteLaPromo = () => {
  for (let i = 0; i <= shoppingList.length; i++) {
    if (!promoProducts.includes(shoppingList[i])) {
      shoppingList.splice(i, 1);
    }
  }
  console.log(shoppingList);
};
// stergeCeNuEsteLaPromo();

const word = "radar";

const palindrom = (arr) => {
  let revers = arr.split("").reverse().join("");
  if (arr === revers) return "palindrom";
};

// console.log(palindrom(word));

const mediaAritmetica = (arr) => {
  let media = 0;
  for (let i of arr) {
    media = media + i / arr.length;
  }
  console.log(media);
};

// mediaAritmetica([5, 5, 8, 10]);

const primulImpar = (arr) => {
  return arr.find((n) => n % 2 != 0);
};
// console.log(primulImpar([2, 4, 5]));

const displayPerson = (arr) => {
  let [a, b, c] = arr;
  return `Numele este ${[a, b]} si am varsta de ${c} ani.`;
};
// console.log(displayPerson(["Herlea", "Marius", 32]));

const eliminaNumarCuFilter = (arr, numar) => {
  return arr.filter((n) => n !== numar);
};

console.log(eliminaNumarCuFilter([2, 5, 5, 6, 7, 10, 5, 5], 5));
