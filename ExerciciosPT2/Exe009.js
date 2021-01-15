/*Escreva uma função que receba dois parâmetros. O primeiro parâmetro é o elemento que repetirá, enquanto
que o segundo será o número de vezes que haverá repetição. Um array será retornado.*/

function repetir(n1 , n2){
    let array = []
    for(let a = 0; a<n2;a++){
        array.push(n1)
    }
    return array
}

console.log(repetir(2, 5))