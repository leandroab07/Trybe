let valorCusto = 203;
let valorCustoTotal = valorCusto * 1.2;
let valorVenda = 247;
let valorLucro = valorVenda - valorCustoTotal;

if (valorCusto > 0 && valorVenda > 0) {
    console.log('O lucro com a venda de mil produtos é: ' + (valorLucro * 1000) + ' reais.')
}