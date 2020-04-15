const inquirer = require('inquirer');

const IMC = [
  {
    type: 'number',
    name: 'weight',
    message: 'What is your weight? '
  },
  {
    type: 'number',
    name: 'height',
    message: 'what is your height? '
  }
];

function weight(answers) {
  const peso  = (answers.weight / Math.pow(answers.height, 2)).toFixed(2);
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
};

inquirer
  .prompt(IMC)
  .then(answers => {
    weight(answers);
  })
  .catch(error => {
    if(error.isTtyError) {
      console.log('Prompt could not be rendered in the current environment');
    } else {
      console.log('Something else when wrong');
    }
  });
