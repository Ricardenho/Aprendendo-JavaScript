const imprimirResultado = function(nota){
    if (nota >= 7){
        console.log('Aprovado')
    }else{
        console.log('Reprovado')
    }
}

imprimirResultado(8)
imprimirResultado(4)
imprimirResultado('Epa')//retorna Reprovado

console.log('==============================================')

function Resultado(nota){
    if(nota >= 8 && nota <=10){
        console.log('Aprovado com Honra')
    }else if(nota < 8 && nota >=5){
        console.log('Aprovado')
    }else if(nota < 5 && nota>=3.5){
        console.log('Recuperação')
    }else if(nota <3.5 && nota >=0){
        console.log('Reprovado')
    }else{
        console.log('Nota Invalida')
    }
}

Resultado(10)
Resultado(7)
Resultado(4)
Resultado(2)
Resultado(11)