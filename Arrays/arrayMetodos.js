const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']
pilotos.pop()//remove o ultimo elemento
console.log(pilotos)

pilotos.push('Verstappen')
console.log(pilotos)//adiciona na ultima posição

pilotos.shift()//remove o elemento da primeira posição
console.log(pilotos)

pilotos.unshift('Hamilton')//adiciona na primeira posição
console.log(pilotos)

//splice pode remover e adicionar elementos
//adicionar
pilotos.splice(2, 0, 'Bottas ', 'Massa')
console.log(pilotos)

//remover
pilotos.splice(3, 1 )// remove só um elemento da posição 3
console.log(pilotos)

const algunsPilotos1 = pilotos.slice(2) // gera um novo Array da posição 2 pra frente
console.log(algunsPilotos1)

const algunsPilotos2 = pilotos.slice(1, 4)//gera um novo array do elemento 1 ao 4 sem incluir o 4
console.log(algunsPilotos2)