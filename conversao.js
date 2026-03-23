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
console.log(num + Number(numStr));
console.log(numStr + String(num)); //igual console.log(num + numStr);