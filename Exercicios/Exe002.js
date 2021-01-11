/* Os triângulos podem ser classificados em 3 tipos quanto ao tamanho de seus lados:
Equilátero: Os três lados são iguais. Isósceles: Dois lados iguais. Escaleno: Todos os lados são diferentes.
Crie uma função que recebe os comprimentos dos três lados de um triângulo e retorne sua classificação quanto
ao tamanho de seus lados. (Neste exemplo deve-se abstrair as condições matemáticas de existência de um
triângulo) */

function calcTriangulo(a =1, b=1, c=1){
    if (a < (b+c) && b < (a+c) && c < (a+b)){
        if (a == b && a == c){
            console.log("Triangulo EQUILÁTERO de perímetro: " + (a+b+c)+"cm²")//todos os lados iguais
        }else if((a == b && a != c) || (a == c && a != b) || (b == c && b != a)){
            console.log("Triangulo ISÓCELES de perímetro: " + (a+b+c)+"cm²")//2 lados iguais e 1 diferente
        }else{
            //if (a != b && a!= c && b != c)
            console.log("Triangulo ESCALENO de perímetro: " + (a+b+c)+"cm²")//Todos os lados diferentes
        }
    }else{
        console.log('Não pode formar um triangulo')
    }
}

calcTriangulo(1,7,6)//não pode formar um triangulo
calcTriangulo(6,6,5)//Isóceles
calcTriangulo(6,5,4)//Escaleno
calcTriangulo(6,6,6)//Equilátero
