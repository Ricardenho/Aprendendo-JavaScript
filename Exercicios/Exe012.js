/*Faça um algoritmo que calcule o fatorial de um número.*/

function calcFatorial(num){
    let fatorial = 1
    for(let i=num;i>=1;i--){
        fatorial*=i
    }
    return fatorial
}

console.log(calcFatorial(10))