let patientId = '50';
let isEnrolled = true;
const patientInfo = {
  firstName: 'Ana',
  lastName: 'Santos',
};
const patientEmail = 'ana@email.com';

console.log(typeof patientId, typeof isEnrolled, typeof patientInfo, typeof patientId, typeof patientAge);

let base = 5;
let altura = 8;

let area = base*altura;
let perimetro = (2*base) + (2*altura);

console.log('Área: ', area, 'Perímetro: ', perimetro);

let notaCandidato1 = 78;

if (notaCandidato1 >= 80) {
    console.log('Parabéns, você foi aprovado(a)!');
}
else if (notaCandidato1 < 80 && notaCandidato1 >= 70) {
    console.log('Você está na nossa lista de espera');
}
else {
    console.log('Você foi reprovado(a)!');
}