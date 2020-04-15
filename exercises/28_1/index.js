const readlineSync = require('readline-sync');

const name = readlineSync.question('What is your name?');
console.log(`My name is ${name}`);

const weight = readlineSync.question('What is your weight?');
const height = readlineSync.question('What is your height?');

function IMC(height, weight) {
  const peso = parseFloat(weight / (height * height)).toFixed(2);
  if (peso < 18.5) {
    console.log('Abaixo do peso', peso);
  } else if (peso < 24.9) {
    console.log('Peso normal', peso);
  } else if (peso < 29.9) {
    console.log('Acima do peso (sobrepeso)', peso);
  } else if (peso < 34.9) {
    console.log('Obesidade grau I', peso);
  } else if (peso < 39.9) {
    console.log('Obesidade grau II', peso);
  } else {
    console.log('Obesidade grau III e IV', peso);
  }
}

IMC(height, weight);
