const numeros = [1, 2, 3, 4];

const multi = numeros.map(num => num*10);
console.log(multi);

const soma = numeros.reduce((acc, num) => acc + num, 0);
console.log(soma/numeros.length)