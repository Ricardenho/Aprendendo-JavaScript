console.log(typeof Array, typeof new Array, typeof [])

let aprovados = new Array("Bia", 'Carlos', 'Ana')
console.log(aprovados)
console.log('===============================================')

aprovados = ['Bia', 'Carlos', 'Ana']
console.log(aprovados[0])
console.log(aprovados[1])
console.log(aprovados[2])
console.log(aprovados[3])
console.log('===============================================')

aprovados[3] = 'Paulo'
aprovados.push('Abia')
console.log(aprovados.length)
console.log('===============================================')

aprovados[9] =  'Rafael'
console.log(aprovados.length)
console.log('===============================================')

console.log(aprovados[8] === undefined)
console.log(aprovados)
console.log('===============================================')

aprovados.sort()
console.log(aprovados)
console.log('===============================================')

delete aprovados[1]
console.log(aprovados[1])
console.log(aprovados)
console.log('===============================================')

delete aprovados[1]
console.log(aprovados)