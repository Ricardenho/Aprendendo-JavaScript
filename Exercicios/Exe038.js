/*Escreva uma função que receba dois parâmetros início e fim. Essa função deve imprimir todos os números
ímpares que estão entre esses valores. Por padrão os valores devem ser 0 para início e 100 para fim. Atente
para corrigir a ordem dos parâmetros caso a função receba o valor maior antes do menor.*/

function imprimeImpares(inicio, fim){
    if (inicio>fim){
        let aux = inicio
        inicio = fim
        fim = aux
    }
    while(inicio<=fim){
        if (inicio % 2 == 1){
            console.log(inicio)
        }
        inicio++
    }  
}
imprimeImpares(100, 100)
imprimeImpares(99, 99)
imprimeImpares(200, 50)