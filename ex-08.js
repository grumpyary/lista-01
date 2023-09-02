const prompt = require('prompt-sync')();

var salespersonCode = Number(prompt( " Digite o codigo do vendedor " ) )
var salespersonName = prompt( " Digite o nome do vendedor " )
var computerPrice = Number(prompt( " Digite o preco do computador vendido " ) )
var computerAmount = Number(prompt( " Digite a quantidade de computadores vendida " ) )

var comission = computerPrice * computerAmount * 0.01

console.log(`O valor da comissao a ser recebida e de ${comission}`)

// console.log("Vendedor: " + salespersonName);
// console.log("Código: " + salespersonCode);
// console.log("Participação sobre vendas: R$" + comission.toFixed(2));