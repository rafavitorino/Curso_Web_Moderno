const fabricantes = ["Mercedes","Audi","BMW"]

function imprimir(nome, indice){
    console.log(`${indice + 1}. ${nome} `)
}

fabricantes.forEach(imprimir)//Imprime a função com o indice e o nome
fabricantes.forEach(fabricante => console.log(fabricante))//imprime somente o fabricante, o conteudo do array



