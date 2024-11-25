// Hoisting é um conceito que a linguagem joga a variável para cima, declarando ela antes de qualquer coisa. Porém ela aparece como indefinida se voçê não atribui um valor a ela antes de exibí-la.

//var = a

console.log('a = ', a)

var a = 2;

console.log('a = ', a)

//Não ocorre hoisting quando vc usa LET

console.log('b = ', b)

let b = 2

console.log('b = ', b)