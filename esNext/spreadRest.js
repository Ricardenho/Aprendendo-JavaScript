//operador ... rest (juntar) / spread (espalhar)
//usar rest como parametro de função

//spread com obj
const funcionario = {
    nome : 'Maria', 
    salario : 1234.89
}

const clone = {
    ativo: true,
    ...funcionario
}

console.log(clone)

//spread comn array
const grupoA = ['João', 'Pedro', 'Gloria']
const grupoFinal = ['Maria', ...grupoA, 'Rafaela']

console.log(grupoFinal)