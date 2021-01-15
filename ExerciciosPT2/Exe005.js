/*Crie uma função que receba dois números e retorne se o primeiro é maior ou igual ao segundo.*/

function verificaNumeros(n1, n2){
    if(n1 >= n2){
        return true
    }
    else{
        return false
    }
}

console.log(verificaNumeros(0, 1))
console.log(verificaNumeros(1, 0))
console.log(verificaNumeros(0, 0))