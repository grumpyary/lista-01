// Ler um valor do teclado
const prompt = require('prompt-sync')();

var valor = prompt(" Digite um valor: ");

// Converter o valor para um numero
valor = Number(valor);

// Calcular o antecessor
var antecessor = valor - 1;

// Mostrar o antecessor
console.log(`O antecessor de ${valor} e ${antecessor}`);
