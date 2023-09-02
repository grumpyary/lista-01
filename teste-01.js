function calcularPrecoRevenda(produtos, porcentagem) {
    const produtosRevenda = [];
  
    for (let i = 0; i < produtos.length; i++) {
      const produto = produtos[i];
      const precoCusto = produto.precoCusto;
      const precoRevenda = precoCusto + (precoCusto * porcentagem / 100);
  
      produtosRevenda.push({
        nome: produto.nome,
        precoCusto: precoCusto,
        precoRevenda: precoRevenda
      });
    }
  
    return produtosRevenda;
  }
  
  const readline = require('readline');
  
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  const produtos = [];
  
  rl.question("Digite o nome e preço de custo de cada produto (exemplo: 'produto1 10'):\n", (resposta) => {
    for (let i = 0; i < 10; i++) {
      const entrada = resposta.split(' ');
      const nome = entrada[0];
      const precoCusto = parseFloat(entrada[1]);
  
      produtos.push({
        nome: nome,
        precoCusto: precoCusto
      });
    }
  
    rl.question("Digite a porcentagem de revenda a ser aplicada em todos os produtos:\n", (porcentagem) => {
      const produtosRevenda = calcularPrecoRevenda(produtos, parseFloat(porcentagem));
  
      console.log("Lista de produtos com seus respectivos preços de revenda:");
      for (let i = 0; i < produtosRevenda.length; i++) {
        const produto = produtosRevenda[i];
        console.log(`${produto.nome}: Preço de custo = R$ ${produto.precoCusto.toFixed(2)} | Preço de revenda = R$ ${produto.precoRevenda.toFixed(2)}`);
      }
  
      rl.close();
    });
  });
  