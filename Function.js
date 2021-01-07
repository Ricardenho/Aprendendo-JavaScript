//função sem Retorno

function imprimeSoma(a, b){
    console.log(a + b)
}

imprimeSoma(2, 3)
imprimeSoma(2)
imprimeSoma(2, 10, 5, 4)
imprimeSoma()

//função com Retorno

function Soma (a =1, b = 1){
    return a+b
}

console.log(Soma(2 , 3))
console.log(Soma(2))
console.log(Soma())
