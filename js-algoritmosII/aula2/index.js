const listaLivros = require("./array");
const livros = require("./array");

function mergeSort(array, nivelAninhamento = 0) {
    console.log(`Nivel de alinhamento: ${nivelAninhamento}`)
    console.log(array)

    if (array.length > 1) {
        const meio = Math.floor(array.length/2);
        const parte1 = mergeSort(array.slice(0,meio), nivelAninhamento+1);
        const parte2 = mergeSort(array.slice(meio, array.length), nivelAninhamento+1);
        array = orderna(parte1, parte2)
    }
    return array;
}

function orderna(p1, p2) {
    let posAtualP1 = 0;
    let posAtualP2 = 0;
    const resultado = [];

    while (posAtualP1 < p1.length && posAtualP2 < p2.length) {
        let prodAtualP1 = p1[posAtualP1]
        let prodAtualP2 = p2[posAtualP2]

        if (prodAtualP1.preco < prodAtualP2.preco) {
            resultado.push(prodAtualP1);
            posAtualP1 ++;
        } else {
            resultado.push(prodAtualP2);
            posAtualP2 ++;
        }
    }
    return resultado.concat(posAtualP1 < p1.length ? p1.slice(posAtualP1): p2.slice(posAtualP2));
}


console.log(mergeSort(listaLivros));