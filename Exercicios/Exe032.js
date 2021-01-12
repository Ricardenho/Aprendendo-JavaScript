/*Construir um algoritmo que calcule a média aritmética dos valores de um vetor de inteiros*/

function mediaArit(){
    let valores = 0
    let tot = 0
    for (let i=0;i<arguments.length;i++){
        tot+=arguments[i]
        valores++

    }
    return`No total tivemos ${valores}\nE a média deles é ${(tot/valores).toFixed(2)}`
}

console.log(mediaArit(2,3,4,5,6,7))
console.log(mediaArit(2,3,4,5,6,7,-2))