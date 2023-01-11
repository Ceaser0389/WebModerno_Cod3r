
// novo recurso do ES2015
const pessoa = {
    nome: 'Ana',
    idade: 5,
    endereco:{
        logradouro: 'Rua ABC',
        numero:1000
    }
}
// chaves usada aki como operador destructuring
//tirar varios atributos de um obj e atribui-los no seu respct obj
const { nome, idade } = pessoa;     
console.log(nome,idade)

console.log("*******************************")

const { nome:n , idade:i} = pessoa
console.log(n,i)


console.log("*******************************")

const {sobrenome, bemHumorada = true} = pessoa
console.log(sobrenome,bemHumorada)


console.log("*******************************")

const { endereco: {logradouro,numero, cep }} = pessoa
console.log(logradouro,numero,cep)

