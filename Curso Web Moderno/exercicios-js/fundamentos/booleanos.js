let isAtivo = false
console.log(isAtivo)

isAtivo = true
console.log(isAtivo)

isAtivo = 1
console.log(!!isAtivo)//Duas exclamações mata a primeira negação

console.log('os verdadeiros...')
console.log(!!3) //3 é true
console.log(!!-1) //-1 é true
console.log(!!' ') //' ' é true
console.log(!![]) //-1 é true
console.log(!!{}) //-1 é true
console.log(!!Infinity) //-1 é true
console.log(!!(isAtivo = true)) //-1 é true

console.log('Os falsos......')
console.log(!!0)
console.log(!!'')
console.log(!!null)
console.log(!!NaN) //Not a Nummber
console.log(!!undefined)
console.log(!!(isAtivo = false))

console.log('para finalizar')
console.log(!!('' || 0 || ' ')) // || significa OU, e algum dos parâmetros apresentados deve ser verdadeiro

let nome = ''

console.log(nome || 'Desconhecido')


