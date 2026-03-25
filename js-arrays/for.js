const numeros = [100, 200, 300, 400, 500, 600];

// Primeira expressão: é executada apenas uma única vez     //let indice = 0;
// Segunda expressão: condição de execução                  //indice < 6;
// Terceira expressão: é executada sempre ao final do bloco //indice++ ou indice = indice + 1

for (let indice = 0; indice < numeros.length; indice++) {
    console.log(indice, numeros[indice]);
}