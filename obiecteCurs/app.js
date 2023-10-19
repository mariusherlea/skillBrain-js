// let masina = {
//   culoare: "rosu",
//   nrRoti: 4,
//   anFabricatie: 2018,
//   displayProp: function (val) {
//     console.log(this[val]);
//   },
//   stop: function () {
//     console.log("Masina sa oprit");
//   },
// };
// //accesare date
// masina.displayProp("nrRoti");
// masina.displayProp("culoare");
// masina.displayProp("anFabricatie");
// masina.stop();

// //operatii pe obiecte adaugarea de prop

// masina.nrLocuri = 5;
// masina.culoare = "verde";
// console.log(masina);
// masina.displayProp("nrLocuri");
// masina.displayProp("parbriz");
// delete masina.nrRoti;
// console.log(masina);

// //crearea unei metode
// masina.claxon = () => {
//   console.log("Tit tit");
// };

// masina.claxon();

// console.log(Object.keys(masina));
// console.log(Object.values(masina));
// console.log(Object.entries(masina));

let person = {
  nume: "Ion",
  prenume: "Popescu",
  anulNasterii: 1980,
  contact: {
    email: {
      gmail: "",
      yahoo: "ip@yahoo.com",
    },
    nrTelefon: "0722123456",
  },
  hobby_uri: ["citit", "chitara"],
};
// console.log(person.contact.nrTelefon);
// console.log(person.contact.email.yahoo);
// console.log(person?.sex);
let obj1 = {
  a: 1,
  b: "",
  c: true,
};

let copieObj1 = { ...obj1 };
// console.log(copieObj1);

let obj2 = {
  nume: "ma",
  varsta: 20,
  feminin: true,
  c: false,
};

let obj3 = Object.assign({}, obj1, obj2);
// console.log(obj3);

let obj4 = { ...obj1, ...obj2 };
// console.log(obj4);

const { nume, varsta: oVarsta } = obj2;

// console.log(nume, oVarsta);
const student = {
  nume: "Ion",
  note: [9, 10, 8],
  media: function () {
    let suma = 0;
    for (let i = 0; i <= this.note.length - 1; i++) {
      suma = suma + this.note[i];
    }
    return suma / this.note.length;
  },
};
// console.log(`Studentul ${student.nume} are media ${student.media()}`);

const caine = {
  culoare: "negru",
};
