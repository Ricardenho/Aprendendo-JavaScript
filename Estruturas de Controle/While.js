function NumAleatorio(min, max){
    const valor = Math.random() * (max-min) + min// Sorteio um numero entre min e max
    return Math.floor(valor)//arredonda o numero sorteado
}

let opcao =0

while (opcao != -1){
    opcao = NumAleatorio(-1, 10)
    console.log(`Opção sorteada foi ${opcao}`)
    
}
console.log('FIm......')