/*Desenvolva uma função que recebe dois números inteiros não negativos (maiores ou iguais a zero) e realize a
multiplicação deles. Porém, não utilize o operador de mutiplicação.*/

function multiplicação(n1, n2){
    let tot = n1
    for(let a =1; a< n2;a++){
        tot+=n1 
    }
    return tot
}

console.log(multiplicação(2, 3))
console.log(multiplicação(4, 4))