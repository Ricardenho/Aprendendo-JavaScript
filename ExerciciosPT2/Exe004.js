/*Crie uma função que recebe um número (de 1 a 12) e retorne o mês correspondente como uma string. Por
exemplo, se a entrada for 2, a função deverá retornar "fevereiro", pois este é o 2° mês.*/


function escolhaMes(mes){
    switch (mes){
        case 1:
            return 'Janeiro'
            break
        case 2:
            return 'Fevereiro'
            break
        case 3:
            return 'Março'
            break
        case 4:
            return 'Abril'
            break
        case 5:
            return 'Maio'
            break
        case 6:
            return 'Junho'
            break
        case 7:
            return 'Julho'
            break
        case 8:
            return 'Agosto'
            break
        case 9:
            return 'Setembro'
            break
        case 10:
            return 'Outubro'
            break
        case 11:
            return 'Novembro'
            break
        case 12:
            return 'Dezembro'
            break
        default:
            return 'ERRO'
    }
}

console.log(escolhaMes(2))
console.log(escolhaMes(13))