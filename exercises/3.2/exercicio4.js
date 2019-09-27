var n = 32;
var v = (n - 3)/2;
var espaco;
var asterisco;
var estrela = '';
let g = 0;
let h = 1;
   
if (n < 4 || n % 2 == 0){
    console.log("Digite um valor ímpar");
    return
}
else{
for (var i = v ;i < n - 1; i++){
  espaco = n - 2 - i;
  asterisco = h + g;
  estrela = ' '.repeat(espaco) + '*'.repeat(asterisco);
  g = g + 2;
  console.log(estrela);    
}  
}