
var n = 5;
var espaco, asterisco, estrela;

for (var i = 0; i < n; i++){
  espaco = n - 1 - i;
  asterisco = i + 1;
  estrela = ' '.repeat(espaco) + '*'.repeat(asterisco);
  console.log(estrela);    
}  