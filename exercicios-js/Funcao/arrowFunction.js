//Função normal
let dobro = function(a){
    return 2*a
}

dobro = (a) => {
    return 2 * a
}

dobro = a => 2 * a //retorno implicito

console.log(dobro(4))
console.log(dobro(Math.PI))

let ola = function () {
    return "Olá"
}

ola = () => "Olá"
ola = _ => "Olá" //Possui um parametro, mas na hora de chamar, você pode ignorar
console.log(ola())