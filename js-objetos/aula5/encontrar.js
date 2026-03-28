const clientes = require("./clientes.json");

function encontrar(lista, chave, valor){
    return lista.find((item) => item[chave].includes(valor));
}

const encontrado = encontrar(clientes, "nome", "Husein")
const encontrado2 = encontrar(clientes, "telefone", "51993301028")

console.log(encontrado2, encontrado)