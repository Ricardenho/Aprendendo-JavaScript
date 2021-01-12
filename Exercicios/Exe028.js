/*Ler um vetor de números inteiros e imprimir quantos são pares e quantos são ímpares.*/

function verificaNums(){
    let par = []
    let impar = []

    for (let i=0; i< arguments.length;i++){
        if(arguments[i] % 2 == 0){
            par.push(arguments[i])
        }else{
            impar.push(arguments[i])
        }
    }
    return `Pares: ${par}\nImpares: ${impar}\n\n`
}

console.log(verificaNums(1,2,3,4,5,6,7,8,9,10))
console.log(verificaNums(0))
console.log(verificaNums(-3-4, -5))