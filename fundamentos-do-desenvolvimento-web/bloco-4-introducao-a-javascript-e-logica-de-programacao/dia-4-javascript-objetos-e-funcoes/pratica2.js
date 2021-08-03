function verificaPalindromo(positive) {
    let reversed = '';

    for (let i = (positive.length - 1);  i >= 0; i -= 1) {
        reversed += positive[i];
    }

    let palindromo;

    if (positive === reversed) {
        palindromo = true;
    } else {
        palindromo = false;
    }

    return console.log(palindromo)
}

function maiorValor(array) {

    for (let i in array) {
        let count = 1;
        for (let e in array) {
            if (array[i] > array[e]) {
                count += 1;
                if (count == array.length) {
                    return console.log(i)
                }
            }
        }
    }
}

function menorValor(array) {

    for (let i in array) {
        let count = array.length;
        for (let e in array) {
            if (array[i] < array[e]) {
                count -= 1;
                if (count == 1) {
                    return console.log(i)
                }
            }
        }
    }
}

let numeros = [3, 5, 7, 10, 1, 7, 11]
menorValor(numeros)