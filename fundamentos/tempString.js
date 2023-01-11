/**
  templete String interpola , aceita quebra de linha 
 */

const nome = ' Rebeca'
const concatenacao  = 'Olá ' + nome + '!'

const templete = `
   Olá
   ${nome}!`

console.log(concatenacao,templete)
console.log("----------------------------------------")
// expressoes...
console.log(`1+1 = ${1+1}`)
console.log('----------------------------------------')

const up = texto => texto.toUpperCase()
console.log(`Ei... ${up('cuidado')}!`)