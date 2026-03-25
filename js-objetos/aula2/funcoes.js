const cliente = {
    nome: "calebe",
    idade: 24,
    email: "calebe@firma.com",
    telefone: ["419999999", "419999998"],
    saldo: 200,
    efetuaPagamento: function(valor) {
        if (valor>this.saldo){
            console.log("saldo insuficiente");
        } else {
            this.saldo -= valor;
            console.log(`Pagamento realizado. Novo saldo: ${this.saldo}`);
        }
    },
};

cliente.efetuaPagamento(198);

//teste
/*
const objPersonagem = {
 nome: "Gandalf",
 classe: "mago",
 nivel: "20"
}

const objPersonagem2 = objPersonagem
objPersonagem2.nome = "Gandalf, o Cinzento"

console.log(objPersonagem.nome) //Gandalf, o Cinzento
console.log(objPersonagem2.nome) //Gandalf, o Cinzento
*/
const objPersonagem = {
 nome: "Gandalf",
 classe: "mago",
 nivel: "20"
}

const objPersonagem2 = Object.create(objPersonagem)
objPersonagem2.nome = "Gandalf, o Cinzento"

console.log(objPersonagem.nome) //Gandalf
console.log(objPersonagem2.nome) //Gandalf, o Cinzento