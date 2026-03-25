const alunos = ['nicolas', 'henrique', 'cauan', 'giovana', 'laura'];
const medias = [10, 6, 5.5, 4.0, 8]

const reprovados = alunos.filter((_, index) => {
    if (medias[index] <6) {
        return true;
    }
});

console.log(reprovados)