const cliente = {
    nome: 'thereza',
    idade: 67,
    cpf: '222.333.444-55',
    email: 'therezalopes@gmail.com'
}

console.log(cliente.nome)
console.log(`O nome do cliente é ${cliente.nome} e essa pessoa tem ${cliente.idade} anos.`)
console.log(`Os três primeiros digitos do cpf são ${cliente.cpf.substring(0, 3)}.`)