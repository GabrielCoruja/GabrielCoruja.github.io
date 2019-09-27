let array = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];

let maiorString = '';

for (i = 0; i < array.length; i++){

    if(array[i].length > maiorString.length){

        maiorString = array[i];
    }
}
console.log(maiorString);

