let estadosBrasileiros = {
  AC: "Acre",
  AL: "Alagoas",
  AP: "Amapá",
  AM: "Amazonas",
  BA: "Bahia",
  CE: "Ceará",
  DF: "Distrito Federal",
  ES: "Espírito Santo",
  GO: "Goiás",
  MA: "Maranhão",
  MT: "Mato Grosso",
  MS: "Mato Grosso do Sul",
  MG: "Minas Gerais",
  PA: "Pará",
  PB: "Paraíba",
  PR: "Paraná",
  PE: "Pernambuco",
  PI: "Piauí",
  RJ: "Rio de Janeiro",
  RN: "Rio Grande do Norte",
  RS: "Rio Grande do Sul",
  RO: "Rondônia",
  RR: "Roraima",
  SC: "Santa Catarina",
  SP: "São Paulo",
  SE: "Sergipe",
  TO: "Tocantins"
};

for (let ganha in estadosBrasileiros) {
  let estado = document.createElement("option");
  estado.innerHTML = ganha;
  estado.value = estadosBrasileiros[ganha];
  document.getElementById("opçao-de-estados").appendChild(estado);
}

const submit = document.getElementById("submit");
const clear = document.getElementById("reset");
const data = document.getElementById("dado");
const datas = document.getElementById("datas");
const label = document.getElementsByTagName("label");
const input = document.getElementsByTagName("input");
const tagSpan = document.getElementsByTagName("span");
const clas = document.getElementsByClassName("last-job");
const select = document.getElementById("opçao-de-estados");
const reset = document.getElementById("reset");
const arrayInput = [input[5], input[6]]

submit.addEventListener("click", event => {
  console.log(input)
  console.log(input[8].pattern)
  if(input[8].pattern == input[8].value) {
    alert("falta")

  }
  event.preventDefault();

});

function dataEntered(text, value, number) {
  for (let index = 0; index < text.length - number; index++) {
    const tagP = document.createElement("p");
    tagP.innerHTML = `${text[index].textContent} ${value[index].value}`;
    datas.appendChild(tagP);
  }
}

function valueEstate() {
  const tagP = document.createElement("p");
  tagP.innerHTML = `Estado: ${select.value}`;
  datas.appendChild(tagP);
}

// for(let complement of arrayInput) {
//   complement.addEventListener('click', display)
// }

// function display() {
//   return complement.value
// }
// // function valor() {
// //   for(let complement of arrayInput) {
// //     complement.addEventListener('click', function() {

      
// //       return complement.value
// //     })
// //   }
// // }

data.addEventListener("click", () => {
  while (datas.hasChildNodes()) {
    datas.removeChild(datas.firstChild);
  }
  dataEntered(label, input, 2);
  const tagP = document.createElement("p");
  tagP.innerHTML = `Complemento:`;
  datas.appendChild(tagP);
  valueEstate();
  dataEntered(tagSpan, clas, 0);
});

reset.addEventListener('click', () => {
  while (datas.hasChildNodes()) {
    datas.removeChild(datas.firstChild);
  }
})
