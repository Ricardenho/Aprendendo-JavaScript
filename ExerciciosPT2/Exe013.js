/*Desenvolva uma função que recebe como parâmetro um objeto e retorne um array de arrays, em que cada
elemento é um array formado pelos pares chave/valor que corresponde a um atributo do objeto. Observe os
exemplos abaixo para um melhor entendimento:*/
var person = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue"
  }

function objetoParaArray(obj){
    let novoArray = []
    for (let a=0;a<Object.keys(obj).length;a++){
        arrayTeste = []
        arrayTeste.push(Object.keys(obj)[a])
        arrayTeste.push(Object.values(obj)[a])
        novoArray.push(arrayTeste)
    }
    return novoArray    
} 

console.log(objetoParaArray(person))