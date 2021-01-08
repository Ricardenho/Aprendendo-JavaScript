function boaNota(nota){
    if(nota >= 7){
        console.log('Aprovado com '+  nota)

    }
}

boaNota(8.1)
boaNota(6.1)

function teste1(num){
    if(num > 7)
        console.log(num)
        console.log('Final...')
}

teste1(6)//impreime o Final pq só a primeira sentença esta dentro do if
teste1(8) 

function teste2(num){
    if(num > 7);{//não ponha ; em estruturas de controle
        console.log(num)

    }
}
teste2(6)
teste2(8)