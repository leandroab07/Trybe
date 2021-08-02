let salarioBruto = 3657.08;
let salarioLiquido;
let valorINSS;
let valorIR;
let salarioBase = salarioBruto - valorINSS;

if (salarioBruto <= 1556.94) {
    valorINSS = salarioBruto * 0.08;
    salarioLiquido = salarioBruto -  valorINSS;
}
else if (salarioBruto > 1556.94 && salarioBruto <= 2594.92) {
    if (salarioBase <= 1903.98) {
        valorINSS = salarioBruto * 0.09;
        salarioLiquido = salarioBruto - valorINSS;
    }
    else {
        valorINSS = salarioBruto * 0.09;
        valorIR = (salarioBase * 0.075) - 142.80;
        salarioLiquido = salarioBase - valorIR;
    }
}
else if (salarioBruto > 2594.92 && salarioBruto <= 5189.82) {
    if (salarioBr)
}