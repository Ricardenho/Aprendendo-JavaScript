for(let letra of 'Coder'){
    console.log(letra)
}

const assuntoEcma = ['Map', 'set', 'promise']

for (let i in assuntoEcma){
    console.log(i)//for In imprime o indice
}

for (let assunto of assuntoEcma){
    console.log(assunto)//for Of imprime os valores
}