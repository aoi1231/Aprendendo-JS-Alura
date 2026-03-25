const alunos = ['nicolas', 'vitor', 'brenda', 'brenda', 'vitor', 'nicolas'];

const nomesAtualizados = [...new Set(alunos)];

console.log(nomesAtualizados);