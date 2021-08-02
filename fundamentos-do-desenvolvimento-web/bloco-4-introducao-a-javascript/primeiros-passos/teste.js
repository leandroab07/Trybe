let linhaRainha = 4;
let colunaRainha = 8;
let linhaPeca = 8;
let colunaPeca = 5;

let pegou = false;

if (Math.abs(linhaRainha - linhaPeca) === Math.abs(colunaRainha - colunaPeca)) {
    pegou = true;
}

console.log(pegou)