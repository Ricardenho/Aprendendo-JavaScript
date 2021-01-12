/*Escreva um algoritmo que leia o código de um aluno e suas três notas. Calcule a média ponderada do
aluno, considerando que o peso para a maior nota seja 4 e para as duas restantes, 3. Mostre o código do
aluno, suas três notas, a média calculada e uma mensagem "APROVADO" se a média for maior ou igual a 5 e
"REPROVADO" se a média for menor que 5. */

function verificarSituação(cod, n1, n2, n3){
     let np1 = 0
     let np2 = 0
     let np3 = 0
    if (n1 >= n2 && n1 >= n3){
        np1 = n1 * 4
        np2 = n2 * 3
        np3 = n3 * 3
    }
    else if (n2 >= n1 && n2 >= n3){
        np2 = n2 * 4
        np3 = n3 * 3
        np1 = n1 * 3
    }
    else{
        np1 = n1 * 3
        np2 = n2 * 3
        np3 = n3 * 4
    }

    if ((np1+np2+np3)/10 >= 5){
        return `Aluno Codigo: ${cod}\nN1: ${n1}, N2: ${n2}, N3: ${n3}\nSituação: Aprovado`
    }
    else{
        return `Aluno Codigo: ${cod}\nN1:${n1}, N2:${n2}, N3: ${n3}\nSituação: Reprovado`
    }
     
}

console.log(verificarSituação(123, 5, 5, 5))
console.log(verificarSituação(124, 1, 2, 2))