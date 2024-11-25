//Estrategia 1 para gerar valor padrão
function soma1(a, b, c){
    a = a || 1
    b = b || 1
    c = c || 1

    return a + b + c

}

console.log(soma1())
console.log(soma1(2,2,2))
console.log(soma1(0,0,0,), 'Nesse caso temos um erro')//Nesse caso temos um erro pois 0 será considerado um valor FALSO e será atribuido à variável o número 1, o valor padrão

console.log('________________')
console.log('_____________')


//Estratégia 2, 3 e 4 para gerar valor padrão
function soma2(a, b, c){
    a = a !== undefined ? a : 1 //Se a for extritamente diferente de undefined pegue o valor de a ou transforme-o em 1
    b = 1 in arguments ? b : 1 //Se existe um valor no indice 1 dos argumentos, pegue esse valor ou transforme-o em 1
    c = isNaN(c) ? 1 : c

    return a + b + c
}

console.log(soma2())
console.log(soma2(2))
console.log(soma2(2, 3, 5))
console.log(soma2(0, 0, 0))

console.log('_____________')
console.log('__________')


//Usando o valor padrão do próprio javascript 2015
function soma3(a = 1, b = 1, c = 1){
    return a + b + c
}

console.log(soma3())
console.log(soma3(2))
console.log(soma3(2, 3, 5))
console.log(soma3(0, 0, 0))
