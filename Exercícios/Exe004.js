/*Crie uma função que irá receber dois valores, o dividendo e o divisor. A função deverá imprimir o resultado
e o resto da divisão destes dois valores.*/

function calc(dividendo = 1, divisor =1){
    console.log('Divisão: ' + parseInt( dividendo/divisor))
    console.log('Resto: ' + dividendo%divisor)
}

calc(17, 2)