// juntar rest , espalhar spread
//usar rest com param de função

// usar spread com objeto
const funcionario = { nome: 'Maria', salario:12348.99}
const clone = {ativo:true, ...funcionario}

console.log(clone)
console.log('*************************************')

// usar spread com array
 const grupoA = ['joão','Pedro','Gloria']
 const grupoFinal = ['Maria', ...grupoA,'Rafaela' ]
 console.log(grupoFinal)

console.log('*************************************')