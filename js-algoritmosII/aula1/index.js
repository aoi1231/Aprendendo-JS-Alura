const { edGalho, edFolha } = require("./arrays");

function juntaLista(lista1, lista2) {
    let listaFinal = [];
    let posAtualL1 = 0;
    let posAtualL2 = 0;
    let atual = 0;

    while (posAtualL1 < lista1.length && posAtualL2 < lista2.length) {
        let prodAtualL1 = lista1[posAtualL1];
        let prodAtualL2 = lista2[posAtualL2];

        if (prodAtualL1.preco < prodAtualL2.preco) {
            listaFinal[atual] = prodAtualL1
            posAtualL1++;
        } else {
            listaFinal[atual] = prodAtualL2
            posAtualL2++;
        }
        atual++;
    }
    while (posAtualL1 < lista1.length) {
        listaFinal[atual] = lista1[posAtualL1];
        posAtualL1++;
        atual++;
    }

    while (posAtualL2 < lista2.length){
        listaFinal[atual] = lista2[posAtualL2];
        posAtualL2++;
        atual++;
    }

    return listaFinal;
}

console.log(juntaLista(edFolha, edGalho))