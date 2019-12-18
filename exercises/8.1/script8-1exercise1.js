const numeroFatorial = 4;
let valorDoFatorial = 1;

if(numeroFatorial == 0) {
    console.log(`O valor de ${numeroFatorial}! é 1`)
}
else {
    for (let index = 1; index <= numeroFatorial; index++) {
        valorDoFatorial *= index;
    }
}
console.log(`O valor do ${numeroFatorial}! é: ${valorDoFatorial}`)

function recursividade(numero) { if (numero == 0) return 1; return numero * recursividade(numero - 1) }

console.log(recursividade(6))
