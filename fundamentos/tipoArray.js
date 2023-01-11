/**
 *  array é heteronegio, o array em js
 *  não tem tamanho fixo
 */

const valores  = [7.7,8.9,6.3,9.2]
console.log(valores[0],valores[3])
console.log("-----------------------------------------")
console.log(valores[4]) // da undefined pois elemento não existe

valores[4] = 10;
console.log(valores)

console.log("-------------------------------------")
valores[10] = 10;
console.log(valores)

console.log("-------------------------------------")

console.log(valores.length) // tamanho do array
console.log("-------------------------------------")

valores.push({id:3},false,null,'teste');
console.log(valores)

console.log(valores.pop());

delete valores[0]
console.log(valores);

console.log(typeof valores)