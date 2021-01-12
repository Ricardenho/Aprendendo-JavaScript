/*Crie um programa que imprima 11 vezes a frase " Hello World!" utilizando uma estrutura de repetição while.*/

function hello(){
    let cont = 0
    while(cont <= 10){
        console.log(`${cont+1}: Hello World`)
        cont++
    }
}

hello()