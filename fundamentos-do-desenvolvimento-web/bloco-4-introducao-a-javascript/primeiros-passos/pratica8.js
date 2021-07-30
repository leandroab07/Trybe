let numeros = [1, 3, 7];
let ehPar = false;

for (i = 0; i < numeros.length; i += 1) {
    if (numeros[i]%2 == 0) {
        ehPar = true;
    }
}

console.log(ehPar);