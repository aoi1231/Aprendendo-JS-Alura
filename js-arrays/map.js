const notas = [10, 9.5, 8, 7, 6];

//map
const notasUpdt = notas.map(nota => {
    return nota + 1 >= 10 ? 10 : nota +1 ;
});
console.log(notasUpdt);

//forEach
const notasUpdt2 = []
notas.forEach((nota, index) => {
    notasUpdt2[index] = nota + 1 >= 10 ? 10 : nota +1;
})
console.log(notasUpdt2);