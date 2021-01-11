/*Um homem decidiu ir à uma revenda comprar um carro. Ele deseja comprar um carro hatch, e a revenda
possui, além de carros hatch, sedans, motocicletas e caminhonetes. Utilizando uma estrutura switch, caso o
comprador queira o hatch, retorne: “Compra efetuada com sucesso”. Nas outras opções, retorne: “Tem certeza
que deseja este modelo?”. Caso seja especificado um modelo que não está disponível, retorne no console:
“Não trabalhamos com este tipo de automóvel aqui”.*/

function comprarCarro(modeloDeCarro){
    switch(modeloDeCarro.toLowerCase()){
        case 'hatch':
            return 'Compra efetuada com sucesso'
            break
        case 'sedan':
        case 'motocicleta' :
        case 'caminhonete' :
            return 'Tem certeza que deseja este modelo?'
            break
        default:
            return 'Não trabalhamos com este tipo de automóvel aqui'
    }
}

console.log(comprarCarro('hatch'))
console.log(comprarCarro('sedaN'))
console.log(comprarCarro('MOTOCICLETA'))
console.log(comprarCarro('CaMiNhONeTe'))
console.log(comprarCarro('Bicicleta'))