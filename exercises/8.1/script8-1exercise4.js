function trocarx(string) {
    let parametro = `Tryber x aqui! 
    
    Tudo bem?`
    return parametro.replace('x', string );
}

const minhasHabilidades = ['JavaScript', 'HTML', 'CSS', 'PHP', 'Java'];

const retornoString = trocarx('falando');

function recebeString(concatenacao) {

    return `${concatenacao}
    
    Minhas cinco principais habilidades são:
    
    ${minhasHabilidades.sort()}
    
    #goTrybe`
    
}
console.log(recebeString(retornoString))