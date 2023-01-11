/**
 * atribuicao p valor vs por referencia
 */
const a = {name:'Teste'}
console.log(a)
const b = a;
b.name = 'Opa'
console.log(b)
console.log(a)       // atribuição por ref
console.log("-------------------------")

let valor // não inicializada
console.log(valor)
// console.log(valor2) / nem declarado

console.log("-------------------------")
valor = null  // ela não tem nenhum valor e nem nehu endereco de memoria apontando
console.log(valor)
//console.log(valor.toString()) // vc tentar acessar algo q esta  null ERRO

console.log("-------------------------")
const produto = {}

console.log(produto.preco)
console.log(produto)

console.log("-------------------------")

produto.preco = 3.50
console.log(produto)
console.log("-------------------------")

produto.preco = undefined // evite atribuir undefined
console.log(!!produto.preco)
// delete produto.preco
console.log(produto)

console.log("-------------------------")

produto.preco = null // sem preço 
console.log(!!produto.preco);
console.log(produto)