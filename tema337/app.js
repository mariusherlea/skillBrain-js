function favRecipe(titlu, portii, elemente) {
  recipe = {
    titlu,
    portii,
    elemente,

    display: function () {
      console.log(
        `titlu=${this.titlu}, portii=${this.portii}, elemente=${this.elemente}`
      );
    },
  };
  return recipe;
}

let pizza = favRecipe("Pizza", 3, ["sunca", "cas", "ketchup"]);
pizza.display();

function enhanceDisp(a, b) {
  obj = {
    a,
    b,
    disp: function (c) {
      delete obj[c];
      return obj;
    },
  };
  return obj;
}

let ob = enhanceDisp(1, 2);
console.log(ob.disp("b"));

let bookShelf = [
  { titlu: "Carte1", autor: "Autor1", esteCitita: true },
  { titlu: "Carte2", autor: "Autor2", esteCitita: true },
  { titlu: "Carte3", autor: "Autor3", esteCitita: false },
  { titlu: "Carte4", autor: "Autor4", esteCitita: true },
];

function iterate() {
  bookShelf.forEach((element) => {
    console.log(`${element.titlu} de ${element.autor}`);
    if (element.esteCitita === true)
      console.log(`Ai citit deja ${element.titlu} de ${element.autor}`);
    else if (element.esteCitita === false)
      console.log(`Trebuie sa citesti ${element.titlu} de ${element.autor}`);
  });
}

iterate();
