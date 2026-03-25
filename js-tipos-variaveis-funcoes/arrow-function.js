function apresentar(nome) {
    return `meu nome é ${nome}.`;
}

const apresentarArrow = nome => `meu nome é ${nome}`;

console.log(apresentar("nicolas"), apresentarArrow("nicolas"))

const soma = (n1, n2) => n1 + n2;

const somaNumPequenos = (n1, n2) => {
    if (n1 > 10 || n2 > 10) {
        return "somente numeros pequenos de 1 a 9"
    } else {
        return n1 + n2;
    }
}

console.log(somaNumPequenos(1, 9))