/*Crie um programa que exibe se um dia é dia útil, fim de semana ou dia inválido dado o número referente ao
dia. Considere que domingo é o dia 1 e sábado é o dia 7. Utilize a estrutura Switch.*/

function classificaDia(numero) {
    switch (numero) {
        case 1:
            return "Domingo : Fim de semana"
            break
        case 2:
            return "Segunda-feira : Dia Util"
            break
        case 3:
            return "Terça-feira : Dia Util"
            break
        case 4:
            return "Quarta-feira : Dia Util"
            break
        case 5:
            return "Quinta-feira : Dia Util"
            break
        case 6: 
        return "Sexta-feira : Dia Util"
        break
        case 7:
            return "Sábado : Fim de semana"
            break
        default: 
            return "Dia inválido"
    }
}

console.log(classificaDia(1));
console.log(classificaDia(2));
console.log(classificaDia(3));
console.log(classificaDia(4));
console.log(classificaDia(5));
console.log(classificaDia(6));
console.log(classificaDia(7));
console.log(classificaDia('a'));