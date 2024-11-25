const notas = [7.7, 6.5, 5.2, 8.9, 3.6, 7.1, 9.0]

// Sem callback
console.log("Sem callback");
let notasBaixas = [];
for (let i in notas){
    if (notas[i] < 7){
        notasBaixas.push(notas[i])
    }
}
console.log(notasBaixas);


/*
let notasAltas = [];

for(let i in notas){
    if(notas[i] > 7){
        notasAltas.push(notas[i])
    }
}

console.log(notasAltas)
*/

// Com callback
console.log("Com callback");

const notasBaixas2 = notas.filter(function (nota){
    return nota < 7;
})

console.log(notasBaixas2)

// Com callback e Arrow
console.log("Com callback e Arrow");
const notaMenorQue7 = nota => nota < 7;
const notasBaixas3 = notas.filter(notaMenorQue7)
console.log(notasBaixas3)
