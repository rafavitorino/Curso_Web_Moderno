function soma(){
    let soma = 0
    for(i in arguments){
        soma += arguments[i]
    }
    return soma
}

console.log(soma())
console.log(soma(1))
console.log(soma(1, 2, 3, 4, 4))//Quantos mais argumentos eu vou inserindo, mais o array arguments vai crescendo e vai atribuindo os valores na variável soma.
console.log(soma(1, 2, 3, ' Também pode-se usar strings'))
