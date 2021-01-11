/*Um funcionário irá receber um aumento de acordo com o seu plano de
trabalho, de acordo com a tabela abaixo:
Plano Aumento
A 10%   B 15%   C 20%
Faça uma função que leia o plano de trabalho e o salário atual de um funcionário e calcula e imprime o seu
novo salário. Use a estrutura switch e faça um caso default que indique que o plano é inválido.*/

function calculoDeSalario(plano, salario){
    switch(plano.toUpperCase()){
        case 'A':
            return salario + (salario*0.1)
            break
        case 'B':
            return salario + (salario*0.15)
            break
        case 'C':
            return salario + (salario*0.2)
            break
        default:
            return 'Plano invalido'
    }    
}

console.log(calculoDeSalario('A', 1000))
console.log(calculoDeSalario('b', 1000))
console.log(calculoDeSalario('C', 1000))
console.log(calculoDeSalario('Gold', 1000))