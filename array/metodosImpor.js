const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']

pilotos.pop()        //remove o ulti elem do array
console.log(pilotos)

console.log('******************************')
pilotos.push('Verstapeen')
console.log(pilotos) // add na ultima posição

pilotos.shift() // remove da primeira posicao!
console.log(pilotos)
console.log('******************************')

pilotos.unshift('Hamilton') // add no comeco do array
console.log(pilotos)
console.log('******************************')
// splice pode adcionar quanto deletar elementos do array

// adicionar
pilotos.splice(2,0,'Bottas','Massa')
console.log(pilotos)

console.log('******************************')
//remover
pilotos.splice(3,1)
console.log(pilotos)

console.log('******************************')

const algunsPilotos1 = pilotos.slice(2) // novo array
console.log(algunsPilotos1)
console.log('******************************')

const algunsPilotos2 = pilotos.slice(1,4)
console.log(algunsPilotos2)