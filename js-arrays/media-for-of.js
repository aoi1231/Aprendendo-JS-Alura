const notas = [6, 4, 7, 9];

let soma =  0;

for (let elemento of notas) {
    soma += elemento;
}

console.log(soma/notas.length);

const numeros = [100, 200, 300, 400, 500, 600];

let num;
for (num of numeros) {
    console.log(num, numeros.indexOf(num))
}