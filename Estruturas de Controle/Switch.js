function imprimirResultado(nota){
    switch(Math.floor(nota)){
        case 10:
        case 9: case 8:
            console.log('Aprovado com Honra')
            break
        case 7: case 6: case 5:
            console.log('Aprovado ')
            break
        case 4: case 3:
            console.log('Recuperação')
            break
        case 2: case 1: case 0:
            console.log('Reprovado')
            break
        default:
            console.log('Nota Invalida')
    }
}

imprimirResultado(10)
imprimirResultado(7)
imprimirResultado(4)
imprimirResultado(2)
imprimirResultado(11)