const saudacao = 'Opa' // Contexto léxico

function exec(){
    const saudacao = 'Falaaa'
    return saudacao
}// Uma função é um contexto próprio

// Objetos são grupos aninhados de pares nome/valor

const Cliente = {
    nome: 'Pedro',
    idade: 32,
    peso: 67,
    endereco: {
        logradouro: 'Rua das Flores',
        numero: 127,
        cor: 'Amarela'
    }
}

console.log(saudacao)
console.log(exec())
console.log(Cliente)

