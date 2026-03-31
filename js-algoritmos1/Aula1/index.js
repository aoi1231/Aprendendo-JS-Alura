const livros = require("./listaLivros");
let atual = 0;
let barato = 0;

for (atual; atual <livros.length; atual++) {
    if (livros[atual].preco < livros[barato].preco) {
        barato = atual
    }
}

console.log(`O livro mais barato é o ${livros[barato].titulo} que custa R$:${livros[barato].preco},00`)