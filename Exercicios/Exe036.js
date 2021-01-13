/*Crie uma função que recebe dois parâmetros, um vetor com apenas valores numéricos e um número
inteiro. Faça com que a função retorne outro vetor que será resultado da multiplicação de cada
elemento pelo número passado como parâmetro. */

let vetor = [1,2,3,4.4,-3,-3.7]

function muntiplicaVetor(vetor, num){
    let resultado = []
    for (let i=0;i<vetor.length;i++){
        resultado.push(vetor[i]*num)
    }
    return resultado
}

console.log(muntiplicaVetor(vetor, 2))