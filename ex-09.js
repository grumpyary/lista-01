const prompt = require('prompt-sync')();

var fahrenheitTemp = Number(prompt( " Digite a temperatura em Fahrenheit ") )
var result = (fahrenheitTemp - 32) * (5 / 9)

console.log(`A temperatura e de ${result} graus Celsius`)