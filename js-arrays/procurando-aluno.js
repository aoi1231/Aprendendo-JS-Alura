const sala = ['nicolas', 'laís', 'hanna', 'lara']
const media = [10, 8, 7, 5]

const salaEMedia = [sala, media]

/*
function procurar(aluno){
    if (sala.find(aluno1 => aluno1 === aluno)){
        return media[sala.findIndex(aluno1 => aluno1 === aluno)];
    } else {
        return "(erro, aluno não foi encontrado.)"
    }
}
    
O includes() retorna true ou false, dependendo se o valor passado como parâmetro está presente ou não no array. 
O indexOf() retorna a posição no array do valor passado como parâmetro.
*/

function procurar(aluno) {
    if (salaEMedia[0].includes(aluno)){
        const [alunos, medias] = salaEMedia;

        const indice = alunos.indexOf(aluno);
        const mediaDoAluno = medias[indice];

        console.log(`O aluno ${aluno} tem a média: ${mediaDoAluno}`)
    } else {
        console.log(`O aluno ${aluno} não foi encontrado.`)
    }
}

procurar('laís')
