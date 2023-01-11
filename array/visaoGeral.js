console.log(typeof Array, typeof new Array, typeof []) // array em js heterogeneo

let aprovados = new Array ('Bia', 'Carlos', 'Ana') // n é boa prática
console.log(aprovados)

aprovados = ['Bia','Carlos','Ana'] // forma literal boa prática
console.log(aprovados[0])
console.log(aprovados[1])
console.log(aprovados[2])
console.log(aprovados[3])
console.log("*******************************************")

aprovados[3] = 'Paulo'
aprovados.push('Abia')
console.log(aprovados[3])
console.log("*******************************************")

console.log(aprovados.length)
console.log("*******************************************")

aprovados[9] = 'Rafael'
console.log(aprovados.length)
console.log("*******************************************")
console.log(aprovados[8] == undefined)
console.log(aprovados[8]=== null)

console.log("*******************************************")
aprovados.sort()
console.log(aprovados)

console.log("*******************************************")
delete aprovados[1]
console.log(aprovados[1])
console.log(aprovados[2])
console.log("*******************************************")

aprovados = ['Bia','Carlos','Ana']
aprovados.splice(1,1,'Elemento1','Elemento2')
console.log(aprovados)
console.log("*******************************************")

