const times = new Set()

times.add('Vasco')
times.add('São Paulo').add('Santos').add('Corinthians')
times.add('Flamengo')
times.add('Vasco')//não aceita valores repetidos

console.log(times)
console.log(times.size)
console.log(times.has('vasco'))//está contido no set?
console.log(times.has('Vasco'))
times.delete('Flamengo')
console.log(times)

const nomes = ['Raquel', 'Lucas', 'Julia', 'Lucas']
const nomesSet = new Set(nomes)
console.log(nomesSet)