const dados = require("./cliente.json");

console.log(dados);

const clienteString = JSON.stringify(dados);
console.log(clienteString);

const objClient = JSON.parse(clienteString);
console.log(objClient)