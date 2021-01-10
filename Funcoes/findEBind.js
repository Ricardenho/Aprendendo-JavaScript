const pessoa = {
    saudacao : 'Bom dia',
    falar(){
        console.log(this.saudacao)
        //console.log(saudacao) erro
    }
}

pessoa.falar()
const falar = pessoa.falar
falar() // conflito entre OO e Funcional

const falarDePesoa = pessoa.falar.bind(pessoa)//UNDEFINED
falarDePesoa()

