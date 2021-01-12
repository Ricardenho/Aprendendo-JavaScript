/*​Escrever um algoritmo que percorre um vetor de inteiros, conta quantos números negativos há nesse vetor
e imprime a quantidade no console.*/

function verificarNegativos(){
    let negativos = 0
    for (let i =0; i< arguments.length;i++){
        if (arguments[i] < 0){
            negativos++
        }
    }
    return `Negativos: ${negativos}`
}

console.log(verificarNegativos(2,1,-5,-1,135,7-11))