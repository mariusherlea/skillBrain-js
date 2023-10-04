const user = {
  email: "marius@gmail.com",
  firstName: "Marius",
  age: 46,
  city: "Vinerea",
  listOfSkills: ["html", "css", "javaScript"],
  dinamicProp: function (prop) {
    if (this[prop]) return this[prop];
    else return `this ${prop} property missing`;
  },
  display: function () {
    let txt = "";
    for (let x in this) {
      txt += this[x] + " ";
    }
    return txt;
  },
};

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

let ceva = "email";
// console.log(user.dinamicProp(ceva));
// console.log(user.display());

const company = {};
const company1 = { ...company };
company.name = "True";
const changeObject = (o) => {
  o.rating = 5;
};

changeObject(company);
// console.log(company1);
console.log(user.display());
