const nome = "Ricardo"

console.log(nome.charAt(4))//retorna o caractere na posição 4
console.log(nome.charAt(5))//retorna o caractere na posição 5
console.log(nome.charCodeAt(3)) //retorna o valor unicode do caractere da posição 3
console.log(nome.indexOf("c")) // retorna a posição do primeiro caractere encontrado
console.log(nome.indexOf("j")) // retorna -1 se não encontrar

console.log(nome.substring(1))//imprime tudo apartir da posição 1
console.log(nome.substring(0, 3))//imprime tudo da possição 0 até 3 sem incluir o 3

console.log("Pessoa ".concat(nome).concat("!"))// concatena tudo
console.log(nome.replace('a','x'))//substitui o valor a minusculo por x minusculo
console.log('Ronaldo pereira silva santos cunha'.split(' '))// cria um vetor de String 
console.log('3' + 2)//retorna uma concatenação

console.log(Nome.toLowerCase())//coloca a string pra minuscula
console.log(Nome.toUpperCase())//coloca a string pra maiuscula
console.log(Nome.length)//retorna o  numero de caracteres da string

let exemplo = "5"
console.log(typeof exemplo)
let n1 = Number.parseInt(exemplo)
console.log(typeof n1)
let n2 = Number.parseInt("9")
console.log(typeof n2)