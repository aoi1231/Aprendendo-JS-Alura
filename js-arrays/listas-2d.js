const alunos = ['nicolas','eloisa','laura','igor'];
const notas = [10, 9, 8, 7.5];

const alunosNotas = [alunos, notas];//0 é alunos, 1 é notas

console.log(`O aluno no index 1 é ${alunosNotas[0][1]}   
    a nota desse aluno é ${alunosNotas[1][1]}`) //[0]- alunos [1] index 1 da tabela alunos //[1]- notas [1] index 1 da tabela notas