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

cliente.enderecos.push({
    rua: 'avenida das torres',  
    numero: 123,
    apartamento: false,
})

const apts = cliente.enderecos.filter(propriedade => propriedade.apartamento === true);

console.log(apts)
