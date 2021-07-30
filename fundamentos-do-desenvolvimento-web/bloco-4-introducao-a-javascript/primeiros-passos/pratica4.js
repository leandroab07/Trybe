let a = 3;
let b = 0;
let c = -2;

let numeros = [a, b, c];

for (let i = 0; i < numeros.length; i += 1) {
    if (numeros[i] > 0) {
        console.log(numeros[i] + ' é positivo');
    }
    else if (numeros[i] < 0) {
        console.log(numeros[i]  + ' é negativo');
    }
    else {
        console.log('É ' + numeros[i])
    }
}