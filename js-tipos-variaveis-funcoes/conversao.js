//tipo de dado
//boleanos

//conversão implícita 
const num = 456;
const numStr = "456";

console.log(num == numStr);
console.log(num + numStr);

//conversão explícita

//Number()
//String()
console.log(num + Number(numStr)); //ou ..(num + + numStr); o "+" converte "numStr" pra número
console.log(numStr + String(num)); //ou ..(numStr + num); converte "num" pra string automaticamente

let usuarioConectado = false;
console.log(Number(usuarioConectado)); // teremos a conversão da booleana para número, sendo que false (falso) retorna o número 0.
usuarioConectado = true;
console.log(Number(usuarioConectado)); // agora teremos a conversão de true (verdadeiro) para o número 1.
