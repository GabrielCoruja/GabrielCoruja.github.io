function inteiro(n){
let soma = 0;

    for (let i = 1; i <= n; i++){
        soma = soma + i;
    }
    return soma;
}
n = 5;
console.log(inteiro(n));