const imprimirResultado = function (nota) {
    switch (Math.floor(nota)){
        case 10:
        case 9:
            console.log('Quadro de Honra')
            break
        case 7:
            console.log('Raspando')
            break
        
        case 6:
        case 5: 
            console.log('Fudeu, mas vc pode recuperar')
            break

        case 4: case 3: case 2: case 1: case 0:
            console.log('Fudeu MUITO')
            break
        default: 
            console.log('Nota inválida')
    }
}

console.log(imprimirResultado(10))
console.log(imprimirResultado(7))

console.log(imprimirResultado(3))
console.log(imprimirResultado(6))

