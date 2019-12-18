function sufixo(word1,word2){

let sufixo,prefixo;

    if (word1.length > word2.length){
       sufixo = word1.slice(-2);
       prefixo = word2;

    }else {
        console.log("A palavra 1 deve ter mais letras que a palavra 2");
        return
    }
    if(prefixo == sufixo){
        return true
    }else{
        return false
    }
}
let palavras = sufixo("trybe","be");

console.log(palavras);