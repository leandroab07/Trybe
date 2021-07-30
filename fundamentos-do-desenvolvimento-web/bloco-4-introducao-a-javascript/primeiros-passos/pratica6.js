let peca = 'Rei'.toLowerCase();

switch (peca) {
    case 'peão':
        console.log(peca);
        console.log('Duas ou uma casa para frente na primeira jogada, uma casa para frente nas outras jogadas ou na diagonal caso coma uma peça.');
        break;

    case 'cavalo':
        console.log(peca);
        console.log('Move-se em "L".');
        break;

    case 'bispo':
        console.log(peca);
        console.log('Move-se nas diagonais.');
        break;

    case 'torre':
        console.log(peca);
        console.log('Move-se pela vertical e horizontal');
        break;
    
    case 'dama':
        console.log(peca);
        console.log('Move-se pela vertical, horizontal e diagonal.');
        break;

    case 'rei':
        console.log(peca);
        console.log('Move-se pela vertical, horizontal e diagonal, mas apenas uma casa.');
        break;

    default:
        console.log('Peça não identificada.')
}