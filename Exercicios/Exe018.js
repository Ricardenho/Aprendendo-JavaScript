/*Faça um programa que leia um número entre 0 e 10, e escreva este número por extenso. Use o comando
switch. Crie um case default que escreva ‘Número fora do intervalo.’*/

function numPorExtenso(num){
    switch(num){
        case 0:
            return 'ZERO'
            break
        case 1:
            return 'UM'
            break
        case 2:
            return 'DOIS'
            break
        case 3:
            return 'TRÊS'
            break
        case 4:
            return 'QUATRO'
            break
        case 5:
            return 'CINCO'
            break
        case 6:
            return 'SEIS'
            break
        case 7:
            return 'SETE'
            break
        case 8:
            return 'OITO'
            break
        case 9:
            return 'NOVE'
            break
        case 10:
            return 'DEZ'
            break
        default:
            return 'Valor fora do Intervalo'
    }
}

console.log(numPorExtenso(0))
console.log(numPorExtenso(1))
console.log(numPorExtenso(2))
console.log(numPorExtenso(3))
console.log(numPorExtenso(4))
console.log(numPorExtenso(5))
console.log(numPorExtenso(6))
console.log(numPorExtenso(7))
console.log(numPorExtenso(8))
console.log(numPorExtenso(9))
console.log(numPorExtenso(10))
console.log(numPorExtenso(15))