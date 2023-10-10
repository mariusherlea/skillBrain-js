// const user1 = {
//   email: "marius@gmail.com",
//   firstName: "Marius",
//   age: 46,
//   city: "Vinerea",
//   listOfSkills: ["html", "css", "javaScript"],
//   dinamicProp: function (prop) {
//     if (this[prop]) return this[prop];
//     else return `this ${prop} property missing`;
//   },
//   display: function () {
//     let txt = "";
//     for (let x in this) {
//       txt += this[x] + " ";
//     }
//     return txt;
//   },
// };

// const user2 = { ...user };
// user2.age = 12;
// // const rectangle = {
// //   height: 20,
// //   width: 40,
// // };

// // console.log(user.email);

// // user.sureName = "Herlea";
// // console.log(user.listOfSkills.length);
// // console.log(user["age"]);
// // console.log(typeof null);

// console.log(user);
// console.log(user2);

// user.age = 25;
// user["name"] = "Ion";

// let ceva = "email";
// console.log(user.dinamicProp(ceva));
// console.log(user.display());

// changeObject(company);
// console.log(company1);
// console.log(user.display());
// const person = {
//   email: "marius@gmail.com",
//   firstName: "Marius",
//   age: 46,
//   city: "Vinerea",
// };

// for (const property in person) {
//   console.log(`person.${property}=${person[property]}`);
// }

// console.log("\n\n");

// const keys = Object.keys(person);

// for (let i of keys) {
//   console.log(person[keys[i]]);
// }

// console.log("\n\n");

// const values = Object.values(person);

// console.log(values);

// console.log("\n\n");

// console.log(keys);

// console.log("\n\n");

// const entries = Object.entries(person);

// for (const [key, value] of entries) {
//   console.log(`${key} = ${value}`);
// }
// const lessonMembers = {
//   syntax: 3,
//   using: 2,
//   foreach: 10,
//   operations: 10,
//   destructuring: 2,
//   array: 2,
// };

// const findKeys = (lessonMembers, expectedValues) => {
//   const result = [];
//   const entries = Object.entries(lessonMembers);

//   for (const [key, value] of entries) {
//     if (value === expectedValues) {
//       result.push(key);
//     }
//   }
//   return result;
// };

// console.log(findKeys(lessonMembers, 2));

// const user = {
//   name: "Vasya",
//   married: true,
//   age: 25,
//   friends: ["Mircea", "Mihai"],
//   children: [
//     { name: "Mila", age: 1 },
//     { name: "Petr", age: 10 },
//   ],
//   company: {
//     name: "SkillBrain",
//   },
// };
// const z = Object.entries(user);
// // for (let i of z) {
// //   console.log(i);
// // }
// console.log(user.children[1].name);

// const user = { name: "Tirion", email: "support@skillbrain.com", age: 34 };
// const data = { name: "Tirion 2", age: 33 };
// let user2 = user;
// // user2.name = data.name;
// // user2.age = data.age;
// Object.assign(user2, data);
// console.log(user2);

//clone object
// const obj1 = { a: "a", b: "b", c: "c", d: { name: "g" } };
// const obj2 = obj1;
// const copyOfObject = Object.assign({}, obj1);
// const copyOfObject1 = { ...obj1 };
// const deepClone = JSON.parse(JSON.stringify(obj1));
// console.log(obj1 === obj2);
// console.log(obj1 === copyOfObject);
// console.log(deepClone);
// console.log(obj1.d === copyOfObject.d);

// console.log(obj1.d === deepClone.d);

// const user = { name: "Geo", age: 11 };
// const newUser = { age: 25, married: true, ...user };
// const newUser2 = { ...user, age: 35, married: false };
// console.log(newUser);
// console.log(newUser2);
// const person = { firstName: "Rasmus", lastName: "Lerdorf" };

// console.log(person.manager); // undefined
// const { manager = false } = person;
// console.log(manager); // => false

const createScoreBoard = () => {
  highScoreBoard = {
    TheBestEver: 1000,
  };

  // return highScoreBoard;
};
createScoreBoard();

const addPlayer = (existingObject, key, value) => {
  if (highScoreBoard.hasOwnProperty([Object.keys(existingObject)])) {
    highScoreBoard[key] = value;
  } else {
    console.log("The key-value pair does not exist.");
  }
  console.log(highScoreBoard);
};

addPlayer({ TheBestEver: 1000 }, "Vasile", 10);
