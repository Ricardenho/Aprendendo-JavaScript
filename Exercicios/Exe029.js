/*Utilizando a estrutura de repetição for, faça uma função que percorra um vetor e conte quantos números
deste vetor estão no intervalo [10,20] (repare que o intervalo é fechado, ou seja, inclui o 10 e o 20) e quantos
deles estão fora do intervalo, escrevendo estas informações.*/

function verificaVetor(){
    let estao = 0
    let naoEstao = 0
    for (let i=0;i<arguments.length;i++){
        if (arguments[i]>=10 && arguments[i]<=20){
            estao++
        }
        else{
            naoEstao++
        }
    }
    return`${estao} ESTÃO no intervalo de 10, 20\n${naoEstao} NÃO ESTÃO no intervalo de 10, 20`
}

console.log(verificaVetor(2,5,10,15,20,35,20.1))