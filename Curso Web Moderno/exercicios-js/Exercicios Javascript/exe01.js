// Crie uma função que dado dois valores (passados como patâmetros) mostre no console a soma, subtração, multiplicação e divisão desses valores

function calcular( num1, num2){
    let soma = num1 + num2
    let sub = num1 - num2
    let mult = num1 * num2
    let div = num1 / num2

    console.log(` Soma: ${soma}\n Subtração: ${sub}\n Multiplicação: ${mult}\n Divisão: ${div}`)

}

calcular(20,5)