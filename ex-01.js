// const prompt = require('prompt-sync')();

// var name = prompt("Qual seu nome ? ");

// console.log(name);

const prompt = require('prompt-sync')();

var clientCode = prompt("Qual o codigo do cliente ? ");
var clientName = prompt('Qual o nome do cliente? ');
var clientDate = prompt('Qual o ano de nascimento do cliente? ');

var calInYears = 2023 - Number(clientDate)
var calInDays = calInYears * 365

console.log(`O nome do cliente e ${clientName} e sua idade em dias e ${calInDays}`
)
