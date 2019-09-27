let array = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];

let maiorString = '';

for (let i = 0; i < array.length; i++){

    if(array[i].length > array[i+1].length){

        maiorString = array[i];
    }
}
console.log(maiorString);

