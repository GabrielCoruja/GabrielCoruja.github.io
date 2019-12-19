let peçaDeXadrez = 'caVAlo';
peçaDeXadrez = peçaDeXadrez.toLowerCase();

switch (peçaDeXadrez){

    case 'pião':
        console.log('uma casa por vez, somente para frente');
    break;

    case 'cavalo':
        console.log('movimento em L');
    break;
    
    case 'bispo':
        console.log('movimento em diagonal ilimitado');
    break;

    case 'torre':
        console.log('movimento ilimitado na vertical ou horizontal');
    break;

    case 'rainha':
        console.log('movimento ilimitado para qualquer direção');
    break;

    case 'rei':
        console.log('movimento para qualquer direção, pulando apenas uma casa');
    break;

    default:
        console.log('Não é uma peça de xadrez');
}

