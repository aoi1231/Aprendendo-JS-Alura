const cliente = {
    nome: "calebe",
    idade: 24,
    email: "calebe@firma.com",
    telefone: ["419999999", "419999998"]
};

cliente.endereco = {
    rua: 'r. silva jardim',
    numero: 333,
    apartamento: true,
    complemento: "ap 102",
}

console.log(cliente["endereco"])