// Ler a base do ret
const prompt = require('prompt-sync')();

var base = prompt(" Digite a base do retangulo: ");

// Converter a base para um numero
base = Number(base);

// Ler a altura do ret
var altura = prompt(" Digite a altura do retangulo: ");

// Converter a altura para um numero
altura = Number(altura);

// Calcular a area do ret
var area = base * altura;

// Ler area do ret
console.log(`A area do retangulo e ${area}`);
