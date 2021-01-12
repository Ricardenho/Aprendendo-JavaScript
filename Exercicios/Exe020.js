/*Crie um programa para informar quais e quantas notas são necessárias para entregar o mínimo de cédulas
para um determinado valor informado pelo usuário considerando notas de R$ 100, R$ 50, R$ 10 e R$ 5 e R$ 1.
Seu programa deve mostrar apenas as notas utilizadas. Por exemplo, ao solicitar R$18, o programa deve
informar apenas a seguinte informação (note que não foram exibidas informações sobre as demais cédulas): 1
nota(s) de R$ 10. 1 nota(s) de R$ 5. 3 nota(s) de R$ 1.*/

function cedulas(valor){
    let nota100 = 0
    let nota50 = 0
    let nota10 = 0
    let nota5 = 0
    let nota1 = 0

    while (valor != 0){
        if ((valor - 100) >= 0){
            valor-=100
            nota100++
        }
        else if((valor - 50) >= 0){
            valor-=50
            nota50++
        }
        else if((valor - 10) >= 0){
            valor-=10
            nota10++
        }
        else if((valor - 5) >= 0){
            valor-=5
            nota5++
        }
        else if((valor - 1) >= 0){
            valor-=1
            nota1++
        }
    }
    return `Notas de 100: ${nota100} \nNotas de 50: ${nota50}\nNotas de 10: ${nota10}\nNotas de 5: ${nota5}\nNotas de 1: ${nota1}`
}

console.log(cedulas(27))