// pessoa -> 123 -> {....}

const pessoa = {nome:'João'}
pessoa.nome = 'Pedro'
console.log(pessoa)

// pessoa -> 456 -> {....} não pode atribuir para const pessoa
/// pessoa = {nome: 'Ana'}

Object.freeze(pessoa)   // freeze congela obj
pessoa.nome = 'Maria'
console.log(pessoa.nome)

const pessoaConstante = Object.freeze({nome: 'João'})
console.log(pessoaConstante);

