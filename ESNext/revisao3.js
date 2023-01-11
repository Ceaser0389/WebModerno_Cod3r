// ES8: Object.values/Object.entries
const obj = {a:1 ,b:2,c:3}
console.log(Object.values(obj))
console.log(Object.entries(obj))

console.log("***************************")

// Melhorias na Notação literal
const nome = 'Carla'
const pessoa = {
    nome,
    ola(){
      return 'oi gente'  
    }
}
console.log(pessoa.nome, pessoa.ola())

console.log("***************************")

// Class
class Animal{}
class Cachorro extends Animal {
    falar(){
        return 'Au au!'
    }
}
console.log( new Cachorro().falar())