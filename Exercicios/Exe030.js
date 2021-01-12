/*Escreva um algoritmo que percorre um vetor de inteiros e defina o maior e menor valor dentro do vetor.*/

function maiorEmenor(){
    let maior =arguments[0]
    let menor = arguments[0]
    for (let i=0;i< arguments.length;i++){
        
        if (arguments[i]>maior){
            maior = arguments[i]
        }
        if(arguments[i]<menor){
            menor = arguments[i]
        }
    }
    return`Maior: ${maior}\nMenor: ${menor}`
}

console.log(maiorEmenor(5,6,7,8,2,4,1,10))