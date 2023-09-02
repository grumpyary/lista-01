const prompt = require('prompt-sync')();

var year = Number(prompt( " Digite o ano " ) )
var yearMinus = Number(prompt( "Digite o ano a ser subtraido " ))
var result = year - yearMinus

console.log(` O resultado e ${result}`)