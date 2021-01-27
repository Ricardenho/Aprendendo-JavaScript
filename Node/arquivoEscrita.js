const fs = require ('fs')

const produto = {
    nome: 'Celular',
    preco : 1299.99,
    desconto : 0.15
}

fs.writeFile(__dirname + '/arquivoGerado.json', JSON.stringify(produto), err => {
    console.log(err || 'arquivo Salvo!')//err retorna null se a operação ocorreu com sucesso
    //se err for null ele imprime arquivo salvo se não ele imprime valor err
})