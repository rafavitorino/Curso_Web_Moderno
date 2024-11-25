console.log(soma(3,4))//Dá pra chamar a função mesmo que ela n tenha sido declarada antes

// function declaration
function soma(x,y){
    return x + y
}

// function expression
const sub = function(x,y){
    return x - y
}
console.log(sub(5,2))//precisa ser chamado após a declaração da função, não antes


// named function expression
const mult = function mult(x,y){
    return x * y
}
console.log(multi(5,2))//precisa ser chamado após a declaração da função, não antes

