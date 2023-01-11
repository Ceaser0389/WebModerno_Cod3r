// usado notação literal
const obj1 = {}
console.log(obj1)

console.log('************************')

// object em js
console.log(typeof Object, typeof new Object())
const obj2 = new Object
console.log(obj2)

console.log('************************')

// funções construtoras
function Produto(nome,preco,desc){
    this.nome = nome  // publico atributo
    this.getPrecoComDesconto = () => {
        return preco * (1 -desc)
    }
}
const p1 = new Produto ('Caneta',7.99,0.15)
const p2 = new Produto ('Nootbook',2998.99,0.25)
console.log(p1.getPrecoComDesconto(),p2.getPrecoComDesconto())

console.log('**************************')

// Função Factory
 function criarFuncionario(nome,salarioBase,faltas){
    return{
        nome,
        salarioBase,
        faltas,
        getSalario(){
            return( salarioBase / 30) * (30 - faltas)
        }
    }
 }
 const f1 = criarFuncionario ('João', 7980,4)
 const f2 = criarFuncionario('Maria',1100,1)
 console.log(f1.getSalario(), f2.getSalario())

 console.log('**************************')

 // Object.create
  const filha = Object.create(null)
  filha.nome = 'Ana'
  console.log(filha)

  console.log('**************************')

  // Um função famosa que retorna objeto...
  const FromJSON = JSON.parse('{"info": "Sou um JSON"}')
  console.log(FromJSON.info)
