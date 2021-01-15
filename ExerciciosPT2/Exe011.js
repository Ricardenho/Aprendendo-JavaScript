/*Crie uma função que receba uma array e retorne o primeiro e o último elemento desse array como um novo
array:*/


function primeiroEUltimo(list){
    const ult = list.length
    let novoArray = [list[0], list[ult-1]]
    return novoArray
}

console.log(primeiroEUltimo([7, 14, 'Olá']))
console.log(primeiroEUltimo([-100, 'Aplicativo', 16]))