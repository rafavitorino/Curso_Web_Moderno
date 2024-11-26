
function fun1(capitalInicial, taxaJuros, tempAplicacao){
    Juros = capitalInicial * taxaJuros * tempAplicacao
    console.log("Valor a pagar: R$" + Juros)
}

function fun2(capitalInicial, taxaJuros, tempAplicacao){
    jurosComp = capitalInicial * (taxaJuros + 1 )**tempAplicacao 
    console.log("Valor a pagar: R$" + jurosComp.toFixed(2))

}

fun1(600, 0.12, 5) // É para dar R$360
fun2(1400, 0.07, 2) // É para dar R$1602.86
