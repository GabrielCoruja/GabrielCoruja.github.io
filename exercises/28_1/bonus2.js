const inquirer = require('inquirer');

function fibonacci(quantity) {
  let inicialValue = 0;
  const arrayFibonacci = [1, 1];
  const lenghtArray = arrayFibonacci.length;
  if (quantity === 1) {
    return [1];
  }
  for (let index = 1; index <= quantity - lenghtArray; index += 1) {
    inicialValue = arrayFibonacci[index - 1] + arrayFibonacci[index];
    arrayFibonacci.push(inicialValue);
  }
  return arrayFibonacci;
}

const objFibonacci = {
  type: 'number',
  name: 'fibonacci',
  message: 'Choose a fibonacci sequency of numbers: ',
  validate: function (value) {
    if (Number.isInteger(value)) return true;
    return `It's not a integer number`
  }
}

inquirer
  .prompt(objFibonacci)
  .then(answer => {
    console.log(fibonacci(answer.fibonacci));
  })
  .catch(error => {
    if (error.isTtyError) {
      console.log('Prompt could not be rendered in the current environment');
    } else {
      console.log('Something else when wrong');
    }
  });
