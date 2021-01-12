/*Criar um programa para identificar o valor a ser pago por um plano de saúde dada a idade do conveniado
considerando que todos pagam R$ 100 mais um adicional conforme a seguinte tabela: 1) crianças com menos
de 10 anos pagam R$80; 2) conveniados com idade entre 10 e 30 anos pagam R$50; 3) conveniados com
idade acima de 30 e até 60 anos pagam R$ 95; e 4) conveniados acima de 60 anos pagam R$130*/

function valorConvenio(idade){
    const padrao = 100.0
    let adicional = 0
    if (idade < 10 && idade >= 0){
        adicional = 80
        return ` valor padrão: R$${padrao}\n valor adicional: R$${adicional}\n valor Total: R$${padrao + adicional}\n`
    }
    else if (idade >= 10 && idade <= 30){
        adicional = 50
        return ` valor padrão: R$${padrao}\n valor adicional: R$${adicional}\n valor Total: R$${padrao + adicional}\n`
    }
    else if (idade > 30 && idade <= 60){
        adicional = 95
        return ` valor padrão: R$${padrao}\n valor adicional: R$${adicional}\n valor Total: R$${padrao + adicional}\n`
    }
    else if (idade > 60){
        adicional = 130
        return ` valor padrão: R$${padrao}\n valor adicional: R$${adicional}\n valor Total: R$${padrao + adicional}\n`
    }
    else{
        return `Idade Invalida`
    }
}

console.log(valorConvenio(5))

console.log(valorConvenio(12))
console.log(valorConvenio(45))
console.log(valorConvenio(89))
console.log(valorConvenio(-3))
