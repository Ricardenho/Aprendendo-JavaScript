function potenciacao(base = 1, expoente = 1){
    let res =1
    while(expoente != 0){
        res = base * res 
        expoente--
    }
    return res
}

console.log(potenciacao(5,2))

//=====================================================

function potenciacao2(base = 1, expoente = 1){
    return Math.pow(base, expoente)
}

console.log(potenciacao2(5,2))