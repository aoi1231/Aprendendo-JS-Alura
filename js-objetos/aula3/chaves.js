const cliente = {
    nome: "calebe",
    idade: 24,
    email: "calebe@firma.com",
    telefone: ["419999999", "419999998"]
};

/*
cliente.enderecos = [
    {
    rua: 'r. silva jardim',
    numero: 333,
    apartamento: true,
    complemento: "ap 102",
    }
]*/


const chaves = Object.keys(cliente);
console.log(chaves);

if (!chaves.includes("enderecos")){
    console.error("Erro, é necessário ter um endereço vinculado.")
}