//criar de forma litoral
function fun1() {

}

//Armazenar em uma variavel
const fun2 = function(){

}

//Armazenar em um array
const array = [function (a, b) { return a+b}, fun1, fun2]
console.log(array[0](2,3))

//Armazenar em m atributo de Objeto
const obj = {}
obj.falar = function(){return 'Opa'}
console.log(obj.falar())

//Passar função como parametro
function run (fun){
    fun()
}
run(function() {console.log('Executando...')})

//Um função pode retornar uma função
function Soma(a, b){
    return function (c) {
        console.log(a+b+c)
    }
}
Soma(2, 3)(4)