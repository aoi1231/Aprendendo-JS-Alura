const terceiroA = [10, 5, 4, 3, 7, 6, 8];
const terceiroB = [7, 8, 6, 2, 0, 5, 3];
const terceiroC = [10, 9, 9, 6, 7];

/*
const media3A = terceiroA.reduce((acumulador, nota) => {
    return nota + acumulador;
});
const media3B = terceiroB.reduce((acumulador, nota) => {
    return nota + acumulador;
});
const media3C = terceiroC.reduce((acumulador, nota) => {
    return nota + acumulador;
});

console.log(media3A/terceiroA.length, media3B/terceiroB.length, media3C/terceiroC.length);
*/

function calcMedias(notaDaSala) {
    const soma = notaDaSala.reduce((acumulador, nota) => acumulador + nota, 0)
    return soma / notaDaSala.length;;   
}

console.log(calcMedias(terceiroA), calcMedias(terceiroB), calcMedias(terceiroC));