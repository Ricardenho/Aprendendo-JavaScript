const contadorA = require('./InstanciaUnica')
const contadorB = require('./InstanciaUnica')

const contadorC = require('./InstanciaNova')()
const contadorD = require('./InstanciaNova')()

contadorA.inc()
contadorA.inc()
console.log(contadorB.valor, contadorA.valor)

contadorC.incr()
contadorC.incr()
console.log(contadorC.valor, contadorD.valor)