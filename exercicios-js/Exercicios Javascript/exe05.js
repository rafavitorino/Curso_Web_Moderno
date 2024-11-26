console.log(0.1 + 0.2)
let resultado = 0.1 + 0.2
let numeroFormatado = new Intl.NumberFormat('pt-BR').format(resultado);
console.log("R$ " + resultado.toFixed(2))

console.log("R$ " + numeroFormatado)
