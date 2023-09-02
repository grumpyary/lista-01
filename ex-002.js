const prompt = require('prompt-sync')()

var a = prompt( " 1 " );
var b = prompt( " 2 " );
var c = prompt( " 3 " );

var tempA = prompt(c);
var tempB = prompt(a);
var tempC = prompt(b);

console.log(` O conteudo de "A" e ${tempA}`);
console.log(` O conteudo de "B" e ${tempB}`);
console.log(` O conteudo de "C" e ${tempC}`);
