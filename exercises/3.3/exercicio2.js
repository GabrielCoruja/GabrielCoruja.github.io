var array = [2,3,6,7,10,1];

var maiorValor = 0;

for (let i = 1; i <= array.length; i++){
    if (array[i] > array[maiorValor]){
        maiorValor = i;
    }    
}
console.log(maiorValor);

