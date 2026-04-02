const livros = require("./listaLivros");


function menorValor(arrProdutos, posicaoInicial) {
    let barato = posicaoInicial;

    for (let atual = posicaoInicial; atual < arrProdutos.length; atual++) {
        if (arrProdutos[atual].preco < arrProdutos[barato].preco) {
            barato = atual
        }
    }
    return barato;
}


module.exports = menorValor;

//console.log(`O livro mais barato é o ${livros[barato].titulo} que custa R$:${livros[barato].preco},00`)