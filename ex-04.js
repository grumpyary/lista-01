const prompt = require('prompt-sync')();

var porcentagemOne = Number(prompt(" Qual a porcentagem para calculo ? ") )
var productOne = prompt(" Qual o nome do produto 1 ? ")
var priceOne = Number(prompt(" Qual o preço do produto 1 ? ") )
var porcentagem01 = priceOne * (porcentagemOne / 100)
var RevendaOne = porcentagem01 + priceOne

console.log(`O nome do produto e ${productOne} e seu preco para revenda e ${RevendaOne}`)  

var porcentagemTwo = Number(prompt(" Qual a porcentagem para calculo ? ") )
var productTwo = prompt("Qual o nome do produto 2 ? ")
var priceTwo = Number(prompt("Qual o preço do produto 2 ? ") )
var porcentagem02 = priceTwo * porcentagemTwo / 100
var RevendaTwo = porcentagem02 + priceTwo

console.log(`O nome do produto e ${productTwo} e seu preco e ${RevendaTwo}`)

var porcentagemThree = Number(prompt(" Qual a porcentagem para calculo ? ") )
var productThree = prompt("Qual o nome do produto 3 ? ")
var priceThree = Number(prompt("Qual o preço do produto 3 ? ") )
var porcentagem03 = priceThree * porcentagemThree / 100
var RevendaThree = porcentagem03 + priceThree

console.log(`O nome do produto e ${productThree} e seu preco e ${RevendaThree}`)

var porcentagemFour = Number(prompt(" Qual a porcentagem para calculo ? ") )
var productFour = prompt("Qual o nome do produto 4 ? ")
var priceFour = Number(prompt("Qual o preço do produto 4 ? ") )
var porcentagem04 = priceFour * porcentagemFour / 100
var RevendaFour = porcentagem04 + priceFour

console.log(`O nome do produto e ${productFour} e seu preco e ${RevendaFour}`)

