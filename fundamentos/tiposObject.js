/**
 *   um obj é um conjunto chave valor 
 * evitar atributos com espaço 
 */
const prod1 = {}    
prod1.nome = 'Celular Ultra Mega'
prod1.preco = 4998.90
prod1['desconto legal'] = 0.40  // par chave valor  

console.log(prod1)

const prod2 = {              // estrutura alinhada de obj
   nome: 'Camisa Polo',
   preco:79.90,
   obj:{
     bla:1
   }
}
console.log(prod2)