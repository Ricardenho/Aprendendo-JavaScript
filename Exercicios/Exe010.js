/*Crie uma função que verifica se um número inteiro passado como parêmetro é divisível por 3 e retorne true
ou false.*/

function verificar(a = 1){
    if (parseInt(a)%3 == 0){
        return true
    }
    else{
        return false
    }
}

console.log(verificar(4))
console.log(verificar(3))