/// Object.preventExtensions
const produto = Object.preventExtensions({
    nome: 'Qualquer',preco: 199,tag:'Promocao'
})

console.log('Extensível:', Object.isExtensible(produto))

produto.nome = 'Barracha'
produto.descricao = 'Borracha escolar branca'
delete produto.tag
console.log(produto)

console.log("*******************************")
// Object.seal                   // só da p alterar o nome de algum atrr do obj
 const pessoa = { nome: 'Juliana', idade:35}
 Object.seal(pessoa)
 console.log('Seledo:',Object.isSealed(pessoa))

 pessoa.seobrenome = 'Silva'
 delete pessoa.nome
 pessoa.idade = 29
 console.log(pessoa)

 //Object.freeze = seldo + valores constantes 

 