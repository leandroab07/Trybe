let numeros = [2, 4, 8];
let ehImpar = true;

for (i = 0; i < numeros.length; i += 1) {
    if (numeros[i]%2 == 0) {
        ehImpar = false;
    }
}

console.log(ehImpar);