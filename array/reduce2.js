
const alunos = [
    {nome:'João',nota:7.3,bolsista:false},
    {nome:'Maria',nota:9.2,bolsista:true},
    {nome:'Pedro',nota:9.8,bolsista:false},
    {nome:'Ana',nota:8.7,bolsista:true},
]

// desafio1: todos os alunos são bolsistas?
const todosBolsistas = (resultado,bolsista) => resultado && bolsista
console.log(alunos.map(a=>bolsista)).reduce(todosBolsistas)



// desafio 2: algum aluno é bolsista
const algumBolsista =(resultado,bolsista) => resulado || bolsista
console.log(alunos.map(a=>bolsista)).reduce(algumBolsista)

