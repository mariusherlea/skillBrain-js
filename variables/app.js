//global scope

let userName = "Marius";
var userAge = 30;
const userGender = "male";
// console.log(window.userName);
// console.log(window.userAge);
// console.log(window.userGender);

//function scope

function myFunction() {
  let functionName = "Nic";
  var functionAge = 45;
  const functionSkinColor = "black";
}

// console.log(functionName);
// console.log(functionAge);
// console.log(functionSkinColor);

//block scope

{
  let blockName = "Block";
  var blockAge = 21;
  const blockGender = "female";
}

// console.log(blockName);
// console.log(blockAge);
// console.log(blockGender);

// asign to const

const post = {},
  ids = [1, 2, 3],
  id = 1;

// post = "Hello World";
post.title = "Hello World!";
ids.push(4);
// ids = [7, 8, 9];

//binary

// var isOnline;
// // isOnline = true;
// if (!isOnline) {
//   console.log("The user exist");
// } else if (isOnline) {
//   console.log("The user exist and is online");
// } else console.log("The uesr is out");

const maxNumber = Math.pow(10, 100);
console.log(maxNumber);
if (maxNumber === Infinity) {
  console.log(`Let's call it Infinity!`);
}
