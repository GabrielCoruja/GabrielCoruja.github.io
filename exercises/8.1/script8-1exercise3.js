const button = document.getElementsByTagName('button')[0];
const input = document.getElementsByTagName('input')[0];
let contador = 0;

button.addEventListener('click', function (){
    contador += 1;
    input.value = contador
})