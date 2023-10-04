let min = (a, b, c) => {
  let minNumber;
  if (a < b && a < c) minNumber = a;
  else if (b < a && b < c) minNumber = b;
  else minNumber = c;
  return minNumber;
};
// console.log(min(25, 17, 23));
// console.log(min(25, 17, -23));

let multipluDe3sau5 = (numar) => {
  return numar % 3 === 0 || numar % 5 === 0
    ? `${numar} este multiplu de 3 sau de 5`
    : `${numar} nu este multiplu de 3 sau 5`;
};
// console.log(multipluDe3sau5(22));

let verificaLitera = (litera) => {
  let regMic = /[a-z]/;
  let regMare = /[A-Z]/;
  let regNumar = /[0-9]/;
  if (litera.match(regMic)) return `${litera} este  litera mica`;
  else if (litera.match(regMare)) return `${litera} este  litera mare`;
  else if (litera.match(regNumar)) return `${litera} este  o cifra`;
  else return `${litera} nu este litera`;
};
// console.log(verificaLitera("b"));

const radical = (numar) => {
  let result = Math.sqrt(numar);
  const decimal = result % 1;
  if (decimal > 0) return "nu e patrat perfect";
  else return "e patrat";
};

// console.log(radical(37));
