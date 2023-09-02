const prompt = require('prompt-sync')();

var cotacaodolar = Number(prompt( " Digite aqui a atual cotacao do dolar " ) )

var valorConvercao = Number(prompt( " Digite aqui o valor a ser convertido " ))

var valorConvertido = valorConvercao * cotacaodolar;

console.log(` O valor convertido do Real para o Dolar e ${valorConvertido} `)