const cliente = {
    nome: "calebe",
    idade: 24,
    email: "calebe@firma.com",
    telefone: ["419999999", "419999998"]
};

cliente.enderecos = [
    {
    rua: 'r. silva jardim',
    numero: 333,
    apartamento: true,
    complemento: "ap 102",
    }
]

function ligaPraCliente(telefoneComercial, telefoneResidencial) {
    console.log(`Ligando para o número ${telefoneComercial}`)
    console.log(`Ligando para o número ${telefoneResidencial}`)
}

ligaPraCliente(...cliente.telefone);

const encomenda = {
    destinatario: cliente.nome,
    ...cliente.enderecos[0],
}

console.log(encomenda);
