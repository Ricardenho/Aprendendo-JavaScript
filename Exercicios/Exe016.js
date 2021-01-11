/*Utilizando a estrutura do Switch faça um programa que simule uma calculadora básica, o programa recebe
como parâmetros dois valores numéricos e uma string referente à operação e a realize com os valores numéricos na ordem que foram inseridos. Por exemplo: calculadora (2, ‘+’, 3). A função efetuará a soma de 2 e 3. 
Dica: Os sinais das operações são: ‘+’. ‘-’, ‘*’ e ‘/’. Crie um caso default para operações inválidas.*/

function calculadora(n1=0, operacao, n2=0){
    switch (operacao){
        case '+':
            return n1 + n2
            break
        case '-':
            return n1 - n2
            break
        case '*':
            return n1 * n2
            break
        case '/':
            return n1 / n2
            break
        default:
            return 'Operação Invalida'
    }
} 

console.log(calculadora(5, '+', 5))
console.log(calculadora(5, '-', 5))
console.log(calculadora(5, '*', 5))
console.log(calculadora(5, '/', 5))
console.log(calculadora(5, 'Vezes', 5))