//1 parametros da função

//           parametro1, parametro 2 
function soma(numero1,   numero2) {
    return numero1 + numero2;
}

console.log(soma(2, 3));
console.log(soma(22, 35));

//ordem dos parametros

function nomeIdade(nome, idade) {
    return `meu nome é ${nome}, tenho ${idade} anos.`;
}

//console.log(nomeIdade(17, "Nicolas"))

function soma(n1, n2) {
    return n1 + n2;
}

function multip(n1 = 1, n2 = 2) {
    return n1 * n2;
}
                    //3          //10
//console.log(multip(soma(1, 2), soma(4, 6))); //30
                    //3
console.log(multip(soma(1, 2)));

function comParametro(param) {
    console.log(param)
}
comParametro(1)