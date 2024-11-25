// Crie uma função que receba o comprimento dos trẽs lados de um triângulo e retorne sua classificação:
// Equilátero: Os três lados são iguais
// Isósceles: dois lados são iguais
// Escaleno: Todos os lados são diferentes 

function triangulo(lado1, lado2, lado3){
    if (lado1 == lado2 && lado2 == lado3){
        console.log("TRIANGULO EQUILÁTERO")
    } 
    if((lado1 == lado2 && lado1 != lado3 ) || (lado2 == lado3 && lado2 != lado1) || (lado1 == lado3 && lado2 != lado1)){
        console.log("TRIGANGULO ISÓSCELES")
    }
    if (lado1 != lado2 && lado2 != lado3 && lado1 != lado3){
        console.log("TRIANGULO ESCALENO")
    }
}

triangulo(3,2,4)