const inquirer = require('inquirer');

function fatorial(n) {
  if (n === 0) return 1;
  return n * fatorial(n - 1);
};

const recursive = {
  type: 'number',
  name: 'fatorial',
  message: 'digit some number to find out the fatorial its',
  validate: function (value) {
    if (Number.isInteger(value)) return true;
    return 'Please digit a integer number';
  }
}

inquirer
  .prompt(recursive)
  .then(answers => {
    console.log(fatorial(answers.fatorial));
  })
  .catch(error => {
    if(error.isTtyError) {
      console.log('Prompt could not be rendered in the current environment');
    } else {
      console.log('Something else when wrong');
    }
  });


