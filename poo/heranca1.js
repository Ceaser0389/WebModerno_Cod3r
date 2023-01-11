const ferrari = {
    modelo: 'f40',
    velMax:324
}

const volvo = {
    modelo: 'Vo40',
    velMax: 200
}
///  __proto__  usa p acessar  prototico

console.log(ferrari.__proto__)
console.log(ferrari.__proto__ === Object.prototype)
console.log(volvo.__proto__ === Object.prototype)
console.log(Object.prototype.__proto__)
console.log(Object.__proto__ === null)

console.log('********************************')

function meuObjeto() {
    console.log(typeof Object, typeof meuObjeto)
    console.log(Object.prototype, meuObjeto.prototype)
}

