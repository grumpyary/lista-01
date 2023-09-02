// Ler idade

const prompt = require('prompt-sync')();

var ageOne = Number(prompt(" Digite sua idade: "));
var ageMonths = ageOne * 12;
var ageDays = ageOne * 365;

console.log(` A idade em meses e de ${ageMonths}`);
console.log(` A idade em dias e de ${ageDays}`);

