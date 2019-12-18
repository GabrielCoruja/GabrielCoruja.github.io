let numero = 197;
let contador = 0;

for (let i = 2; i <= numero; i++){

    if(numero % i == 0){
    contador++;
    }
    if(contador == 2){
    console.log('Este número não é primo')
    return
    }
}
console.log('Este numero é primo')