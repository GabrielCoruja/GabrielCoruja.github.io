 
let estadosBrasileiros = {
    'AC': 'Acre',
    'AL': 'Alagoas',
    'AP': 'Amapá',
    'AM': 'Amazonas',
    'BA': 'Bahia',
    'CE': 'Ceará',
    'DF': 'Distrito Federal',
    'ES': 'Espírito Santo',
    'GO': 'Goiás',
    'MA': 'Maranhão',
    'MT': 'Mato Grosso',
    'MS': 'Mato Grosso do Sul',
    'MG': 'Minas Gerais',
    'PA': 'Pará',
    'PB': 'Paraíba',
    'PR': 'Paraná',
    'PE': 'Pernambuco',
    'PI': 'Piauí',
    'RJ': 'Rio de Janeiro',
    'RN': 'Rio Grande do Norte',
    'RS': 'Rio Grande do Sul',
    'RO': 'Rondônia',
    'RR': 'Roraima',
    'SC': 'Santa Catarina',
    'SP': 'São Paulo',
    'SE': 'Sergipe',
    'TO': 'Tocantins'
}

for(let ganha in estadosBrasileiros) {
  let estado = document.createElement('option');
  estado.innerHTML = ganha;
  estado.value = estadosBrasileiros[ganha];
  document.getElementById("opçao-de-estados").appendChild(estado);
}

const date = document.getElementById("data");
const dataValid = /^[0-9]{2}\/[0-9]{2}\/[0-9]{4}$/;
const submit = document.getElementById("submit");

submit.addEventListener('change', () => {
    date = date.value.toUpperCase()
})


submit.addEventListener('click', () => {
  if(!dataValid.test(date.this.value)) {
    alert("Data informada é inválida");
    console.log(date.value)
  };
});