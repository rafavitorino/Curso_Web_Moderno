const escola = "Cod3r"

console.log(escola.charAt(0))
console.log(escola.charAt(1))
console.log(escola.charAt(2))
console.log(escola.charAt(3))
console.log(escola.charAt(4))

//Proximo método para saber o código do caracter na tabela UNICODE

console.log(escola.charCodeAt(0))
console.log(escola.charCodeAt(1))
console.log(escola.charCodeAt(2))
console.log(escola.charCodeAt(3))
console.log(escola.charCodeAt(4))

// Mostra as letras partir de um determinado caracter

console.log(escola.substring(1))
console.log(escola.substring(0, 3))

// Concatenar
console.log('Escola: '.concat(escola).concat("!"))

// Replace 
// "/\3/" isso é uma expressão regular que significa substituir todos os digitos do texto 
console.log(escola.replace(3, 'e'))

// Arrays (Convertendo string em array)
console.log('Ana|Maria|Pedro'.split('|'))