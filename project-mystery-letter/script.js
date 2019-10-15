var frase = document.getElementById("frase-carta-adicionada-pelo-usuario");
var receber = document.getElementById("recebe-frase-gerada");
var gerador = document.getElementById("gerar-carta");
let criar = document.createElement("div");
let titulo = document.getElementsByTagName("h1");

let corFundo = ["red","yellow","green","blue"];
let tamanhoDeFonte = ["5mm","8mm","12mm","15mm"];
let imagemDeFundo = ['background1.png','background2.png','background3.png'];
let efeitosNaFonte = ["normal","italic","oblique","initial"];
let corDeFundo = ["red","yellow","green","blue"];

function criatorio(envia) {
    let tags = document.createElement("span");
    tags.setAttribute("class","classe-criada-pelo-usuario");
    receber.appendChild(tags);
    tags.insertAdjacentHTML('afterbegin', envia);
}

function mudarEstiloCarta() {
    let novaCarta = document.getElementById("recebe-frase-gerada");
    while(novaCarta.firstChild) {
        novaCarta.firstChild.remove();
    }
}

function ativarCarta() {
    mudarEstiloCarta();
    palavras = frase.value.split(" ");
    for (const armazena of palavras) {
        criatorio(armazena);
    }   
    var tagsCriadas = document.getElementsByClassName("classe-criada-pelo-usuario");
    for(let indice = 0; indice < tagsCriadas.length; indice++) {
        let indiceAleatorio1 = Math.floor(Math.random()*3);
        let indiceAleatorio2 = Math.floor(Math.random()*3);
        let indiceAleatorio3 = Math.floor(Math.random()*3);
        let indiceAleatorio4 = Math.floor(Math.random()*3);
        let indiceAleatorio5 = Math.floor(Math.random()*3);
        tagsCriadas[indice].style.backgroundImage = "url('" + imagemDeFundo[indiceAleatorio1] + "')";
        tagsCriadas[indice].style.fontSize = tamanhoDeFonte[indiceAleatorio2];
        tagsCriadas[indice].style.color = corFundo[indiceAleatorio3];
        tagsCriadas[indice].style.fontStyle = efeitosNaFonte[indiceAleatorio4];
        tagsCriadas[indice].style.backgroundColor = corDeFundo[indiceAleatorio5];
    }
}