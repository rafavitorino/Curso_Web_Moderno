const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
for (x in nums){
    if(x == 5){
        break //para no indice 5 e sai do bloco
    }
    console.log(`${x} = ${nums[x]}`)
}

console.log('\n')

for(y in nums){
    if (y == 5) {
        continue //pula o indice 5 e continua o resto
    }
    console.log(`${y} = ${nums[y]}`)
    
}


//Isso aqui é extremamente bizarro, NÃO USE, MAS EXISTE
externo: for (a in nums){
    for (b in nums){
        if(a == 2 && b == 3) break externo
        console.log(`Par = ${a}, ${b}`)
    }
}