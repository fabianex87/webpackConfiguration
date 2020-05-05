import "../css/components.css";
export const salutare = (nome) => {
  console.log("Creando etichetta h1");
  const h1 = document.createElement("h1");
  h1.innerHTML = `Ciao come stai ${nome}`;
  document.body.append(h1);
};

/*
module.exports = function salutare(nome) {
  console.log("Creando etichetta h1");
  const h1 = document.createElement("h1");
  h1.innerHTML = `Ciao ${nome}`;
  document.body.append(h1);
};
*/
