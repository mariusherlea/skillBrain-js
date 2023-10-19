const user = [
  { name: "Ion", age: 15 },
  { name: "Mircea", age: 20 },
  { name: "Matei", age: 7 },
  { name: "Mia", age: 13 },
  { name: "Bob", age: 30 },
];

// user.sort((a, b) => (a.age < b.age ? -1 : 1)); //1 -1
const mappedUser = user.map((item, index) => {
  console.log(item);
  return { index: index + 1, ...item };
});
console.log(mappedUser);
