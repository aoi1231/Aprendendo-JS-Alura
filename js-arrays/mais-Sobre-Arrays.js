const array1 = [6, 7];
const array2 = [5.5, 8];

//adição e remoção:
array1.push(1); //adiciona por ultimo
console.log(`adiciona "1" no último: ${array1}`);

array1.unshift(2); //adiciona por primeiro
console.log(`adiciona "2" no primeiro: ${array1}`);

array1.pop(); //remove o último
console.log(`remove o último: ${array1}`);

array1.shift(); //remove o primeiro
console.log(`remove o primeiro: ${array1}\n`);

//

const arrays = array1.concat(array2); // concat() junta dois arrays.
console.log(`array1.concat(array2) = ${arrays}, juntou arrays`);

const filtrarPares = arrays.filter(numero => numero %2 === 0); // filter() filtra usando uma função.
console.log(`filter(arrays) = ${filtrarPares}, função de filtrar pares`);

const primeiroImpar = arrays.find(numero => numero %2 !== 0); // find() funciona igual filter, mas só pega o primeiro número.
console.log(`find(arrays) = ${primeiroImpar}, função de pegar impar, pegou o primeiro impar`); 

const imparIndex = arrays.findIndex(numero => numero %2 !== 0); // igual o find, mas retorna o index "[0]".
console.log(`O index do impar é: [${imparIndex}]. Usando arrays.findIndex()`)

const ultimoIndex = arrays.lastIndexOf(numero => numero %2 === 0);
console.log(`O último index dos pares é: [${ultimoIndex}]. Usando arrays.lastIndexOf()`);

const precos = [5, 10, 20];
precos.forEach((preco, index) => { // executa uma função em cada elemento de forma individual.
    precos[index] = preco * 2;
}); 
console.log(`preços * 2 = ${precos}\n`);

//

const palavras = ["oi", ",", "tudo ", "bem?"]
const frase = palavras.reduce((acumulador, valorAtual) => { //função guardando o elemento atual e o proximo
    return acumulador + valorAtual;
});

const numeros = [1, 2, 3, 4]
const reduzidos = numeros.reduce((acumulador, valorAtual) => {//nessa função junta os numeros
    console.log(acumulador)
    console.log(valorAtual)
    return acumulador + valorAtual;
})
console.log(`frase: ${frase}, numero reduzido: ${reduzidos}`); 

const numeros2 = [1, 2, 3, 4]
const reduzidos2 = numeros2.reduceRight((acumulador, valorAtual) => { //igual o reduce, mas começa pelos últimos elementos até o início.
    console.log(acumulador)
    console.log(valorAtual)
    return acumulador + valorAtual;
})

console.log(arrays)
console.log(`reverse: ${arrays.reverse()}`);

const arrays2 = arrays.slice(1); // copia um array a partir do index[1]
console.log(arrays2)

const arrays3 = arrays.slice(0, 2); // copia um array entre 2 index [0, 2]
console.log(arrays3)

//sort
const numerosAleat = [1, 9, 4, 20, 15, 79, 54, 3]
numerosAleat.sort((a, b) => a-b);
console.log(numerosAleat);

//splice
const frutas = ['banana', 'laranja', 'limão', 'maçã', 'manga'];

frutas.splice(2, 1); // Remove 1 elemento a partir do índice 2 (limão)

console.log(frutas);

const frutas1 = ['banana', 'laranja', 'maçã', 'manga'];

frutas1.splice(2, 0, 'limão', 'morango'); // Adiciona 'limão' e 'morango' a partir do índice 2

console.log(frutas1);

const frutas2 = ['banana', 'laranja', 'limão', 'maçã', 'manga'];

frutas2.splice(2, 2, 'morango', 'abacaxi'); // Remove 2 elementos a partir do índice 2 e adiciona 'morango' e 'abacaxi'

console.log(frutas2);