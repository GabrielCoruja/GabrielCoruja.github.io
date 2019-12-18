var array = [2,4,6,7,10,0,-3];

var menorValor = 0;

for (let i = 0; i <= array.length; i++){
    if (array[i] < array[menorValor]){
        menorValor = i;
    }    
}
console.log(menorValor);