const notas = [10, 6, 7.5, 2];
let soma = 0;

for (let i = 0; i < notas.length; i++) {
    soma += notas[i];
}
console.log(`A média das notas é: ${soma/notas.length}`);