let array = [];
let placar = document.getElementById("placar");
function randomBgColor() {                                                   
    for(let i = 1; i <= 6; i++) {
        let bola = document.getElementsByTagName("div")[i];             
        let r = Math.floor(Math.random() * 256); 
        let g = Math.floor(Math.random() * 256);                            
        let b = Math.floor(Math.random() * 256); 
        let bgColor = "rgb(" + r + ", " + g + ", " + b + ")";               
        bola.style.backgroundColor = bgColor;                               
        array[i-1] = bgColor;                                               
    }
} 
var somaPontos = 0;
randomBgColor();
let numeroRandom = (Math.floor(Math.random()*6));                                                 
let rgb = document.getElementById("numero-correspondente-cor");            
    rgb.innerHTML = array[numeroRandom];
let bolas = document.getElementsByClassName("bolas-com-opção-de-cores");
     
for(let i = 0;i < bolas.length;i++) {                                        
    bolas[i].addEventListener('click', function() {
        if(bolas[i].style.backgroundColor == array[numeroRandom]) {
            somaPontos = somaPontos + 3;
            document.getElementById("acertou-ou-errou").innerHTML = "Você acertou, congratulations";
            placar.innerHTML = "Placar: " + somaPontos;
            randomBgColor();
        } 
        else {
            document.getElementById("acertou-ou-errou").innerHTML = "Você errou, só lamento";
        }
    })
}