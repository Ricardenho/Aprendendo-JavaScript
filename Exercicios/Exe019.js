/** 
O cardápio de uma lanchonete é o seguinte:
Código  Descrição do Produto    Preço
100     Cachorro Quente         R$ 3,00
200     Hambúrguer Simples      R$ 4,00
300     Cheeseburguer           R$ 5,50
400     Bauru                   R$ 7,50
500     Refrigerante            R$ 3,50
600     Suco                    R$ 2,80
Implemente uma função que receba como parâmetros o código do item pedido, a quantidade e calcule o valor
a ser pago por aquele lanche. Considere que a cada execução somente será calculado um item. Use o
comando switch. Crie um caso default para produto não existente. */

function lanchonete(codProd, qtd){
    switch(codProd){
        case 100: 
            return qtd*3
            break
        case 200:
            return qtd*4
            break
        case 300:
            return qtd*5.50
            break
        case 400:
            return qtd*7.50
            break
        case 500: 
            return qtd*3.50
            break
        case 600: 
            return qtd*2.80
            break
        default:
            return 'Produto Inexistente'
    }
}

console.log(`R$ ${lanchonete(100, 2).toFixed(2).replace('.', ',')}`)
console.log(`R$ ${lanchonete(200, 2).toFixed(2).replace('.', ',')}`)
console.log(`R$ ${lanchonete(300, 2).toFixed(2).replace('.', ',')}`)
console.log(`R$ ${lanchonete(400, 2).toFixed(2).replace('.', ',')}`)
console.log(`R$ ${lanchonete(500, 2).toFixed(2).replace('.', ',')}`)
console.log(`R$ ${lanchonete(600, 2).toFixed(2).replace('.', ',')}`)
console.log(`R$ ${lanchonete(700, 1)}`)