/**
 *   " "  ''  ´´
 */

const escola = "Cod3r"
console.log(escola.charAt(4))
console.log("------------------------------")
console.log(escola.charAt(5))
console.log("------------------------------")
console.log(escola.charCodeAt(3))  // valor na tabela unico
console.log("------------------------------")
console.log(escola.indexOf('3')) // pega digito 3
console.log("------------------------------")
console.log(escola.substring(1));
console.log("------------------------------")
console.log(escola.substring(0,3)) // vai do 0 até o 3 mas não inclui o 3

console.log("------------------------------")
console.log('Escola'.concat(escola).concat("!"))

console.log("------------------------------")
console.log(escola.replace(3,'e'))

console.log("------------------------------")
console.log('Ana,Maria,Pedro'.split(',')) // gera um array
