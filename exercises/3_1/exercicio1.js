let a = 6;
let b = 3;
let operação1 = 0;
let operação2 = 0;
let operação3 = 0;
let operação4 = 0;

if (a > b && b % a){
    operação1 = a + b;
    operação2 = a - b;
    operação3 = a * b;
    operação4 = a / b;

    console.log("soma é igual", operação1)
    console.log("subtração é igual", operação2)
    console.log("multiplicação é igual", operação3) 
    console.log("divisão é igual", operação4);
}
   else{
       console.log("Não é possivel fazer esta conta");
   }

   