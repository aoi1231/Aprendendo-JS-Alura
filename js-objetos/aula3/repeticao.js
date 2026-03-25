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

for (let chave in cliente) {
    let tipo = typeof cliente[chave];
    if (tipo !== "object" && tipo !== "function") {
        console.log(`A chave ${chave} tem o valor ${cliente[chave]}`);  
    }
}