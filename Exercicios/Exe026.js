/*Fazer um programa para encontrar todos os pares entre 1 e 100.*/

function pares(){
    let cont = 1
    const par = []
    while (cont <= 100){
        if (cont % 2 == 0){
            par.push(cont)
            
        }
        cont++
    }
    return par
}

console.log(pares())