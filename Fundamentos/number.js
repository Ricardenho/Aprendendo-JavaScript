const n1 = 1.0
const n2 = Number('2.0')

console.log(typeof n1, typeof n2)

const n3 = 1.0
console.log(Number.isInteger(n3))
const n4 = 1.1
console.log(Number.isInteger(n4))
// na variavel n3 esta com .0 de valor, então o js considera o valor com intero tbm
//ja a variavel n4 tem valor .1 então ela só é do tipo float

const nota1 = 9.871
const nota2 = 6.871
const total =  nota1 * n1 + nota2 * n2
const media = total / (n1 + n2)

console.log(media)
console.log(media.toFixed(2))
console.log(media.toFixed(2).replace('.' , ','))
console.log(media.toString(2))//binário

console.log(7 / 0)
console.log("10" / 2 )
console.log('show' * 2)
console.log(0.1 + 0.7)
//console.log(10.toString())
console.log((10.345).toFixed(2))

const raio = 5.6
let area = Math.PI * Math.pow(raio , 2)
console.log(area)
console.log(area.toFixed(3))
console.log(typeof Math)