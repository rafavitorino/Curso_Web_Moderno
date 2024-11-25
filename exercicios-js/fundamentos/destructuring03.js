//USANDO O DESTRUCTURING PARA ACESSAR DOIS MEMBROS DE UM OBJETO E FAZER UMA OPERAÇÃO COM ELES DENTRO DE UMA FUNÇÃO
function rand({min = 0, max = 1000}){
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

const obj = { max: 50, min: 0 }
console.log(rand(obj))
console.log(rand({ min: 955 }))
