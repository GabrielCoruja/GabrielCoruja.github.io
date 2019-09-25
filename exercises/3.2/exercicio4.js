
var n = 5;
var espaco, asterisco, estrela;
let g = 0;
let h = 1;
   
if (n < 4){
    console.log("Digite um valor maior");
}
else{
for (var i = 1; i <= n; i++){
  espaco = n - 2 - i;
  asterisco = h + g;
  estrela = ' '.repeat(espaco) + '*'.repeat(asterisco);
  g = g + 2;
  console.log(estrela);    
}  
}