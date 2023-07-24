// Criação do array de objetos
let alunos = [
    { nome: 'Gian', nota: 10 },
    { nome: 'Alex', nota: 8 },
    { nome: 'Flavia', nota: 5.5 },
    { nome: 'Bruno', nota: 5 },
    { nome: 'Carla', nota: 7 },
    { nome: 'Diana', nota: 6 },
    { nome: 'Eduardo', nota: 4 },
    { nome: 'Fernanda', nota: 7.5 },
    { nome: 'Gabriel', nota: 6.5 },
    { nome: 'Anna', nota: 6 },
    { nome: 'Renato', nota: 3 },
    { nome: 'Ronaldo', nota: 2 }
];

// Função que retorna os alunos com nota maior ou igual a 6
function alunosAprovados(alunos) {
    return alunos.filter(aluno => aluno.nota >= 6);
}

// Uso da função para obter os alunos aprovados
let aprovados = alunosAprovados(alunos);

// Exibir os alunos aprovados
console.log(aprovados);
