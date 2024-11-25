//Função em JS é chamado de First-class Object (Citizens)
// Higher Order Function

// Criar uma função de forma literal
function funcao1(){

}

function soma(n1, n2){
    const resultado = n1 + n2
    return resultado
}
console.log(soma(5, 6))

// Armazenar em uma variável
const funcao2 = function () {

}

// Armazenar em um array
const array = [function(a, b){ return a + b }, funcao1, funcao2]
console.log(array[0](2, 3))

// Armazenar em um atributo de objeto
const obj = {}

obj.falar = function () { return 'Opa' }
console.log(obj.falar())

// Como passar uma função como parametro

function run(soma){
    soma()
}

run(function () {console.log('Executando....')})

// Uma função pode retornar/conter uma função

function soma2(a, b){
    return function (c) {
        console.log(a + b + c)
    }
}
soma2(2, 3)(4)
const cincoMais = soma2(2, 3)
cincoMais(4)