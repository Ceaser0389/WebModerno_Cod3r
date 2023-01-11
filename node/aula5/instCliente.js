const contadorA = require('./instUnica')
const contadorB = require('./instUnica')

const contadorC = require('./insNova')()
const contadorD = require('./insNova')()

contadorA.inc()
contadorA.inc()
console.log(contadorB.valor, contadorB.valor)

contadorC.inc()
contadorC.inc()
console.log(contadorC.valor, contadorD.valor)