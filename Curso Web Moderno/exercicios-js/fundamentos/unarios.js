let num1 = 1
let num2 = 2

num1++ // num1 = num1 + 1
console.log(num1)

--num1 // num1 = num1 - 1 tem mais prioridade
console.log(num1)

console.log(++num1 === num2--)// Fuja desse tipo de operação porque não deixa o código facilmente legível
console.log(num1 === num2)
