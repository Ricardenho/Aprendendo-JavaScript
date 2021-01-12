/*Construa uma função que receba como parâmetros as alturas e as taxas de crescimento anuais de duas
crianças e calcule se existe uma criança menor, caso exista se a criança menor ultrapassará a maior e em
quantos anos isso acontecerá. Utilize centímetros p*/

function verificarAltura(altura1, cresc1, altura2, cresc2){
    let pessoa1 = altura1
    let pessoa2 = altura2
    let cont = 0
    if (pessoa1 > pessoa2 && cresc1 >= cresc2){
        return `A criança 2 é menor que a 1, e não podera ultrapassa-la no funturo`
    }
    else if(pessoa2 > pessoa1 && cresc2 >= cresc1){
        return `A criança 1 é menor que a 2, e não podera ultrapassa-la no funturo`
    }
    else if(pessoa1 > pessoa2 && cresc1 < cresc2){
        while(pessoa2 < pessoa1){
            pessoa2+=cresc2
            pessoa1+=cresc1
            cont++
        }
        return `A criança 2 ultrapassou a 1 em ${cont} anos`
    }
    else if(pessoa2 > pessoa1 && cresc2 < cresc1){
        while(pessoa1 < pessoa2){
            pessoa2+=cresc2
            pessoa1+=cresc1
            cont++
        }
        return `A criança 1 ultrapassou a 2 em ${cont} anos`
    }
    else{
        return 'Ambas as crianças tem a mesma altura'
    }
}

console.log(verificarAltura(100, 1, 98,1.1))
console.log(verificarAltura(98, 1.1, 100,1))
console.log(verificarAltura(100, 1, 98,1))
console.log(verificarAltura(98, 1, 100,1))
console.log(verificarAltura(100, 1, 100,1))