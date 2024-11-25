let a = 3

global.b = 123

this.c = 456
this.d = false
this.e = 'Teste'


console.log(a)
console.log(global.b)
console.log(this.c)
console.log(module.exports.c)
console.log(module.exports)

// criando uma variavel maluca: sem var ou let
abc = 3 // nao faça isso em casa!!! Muito menos no trabalho
console.log(global.abc)






