function subtrair(a, b){
    a = a || 1
    b = b || 1

    if (a < b) return b - a
    else
    return a - b ;
}

console.log(subtrair())
console.log(subtrair(3,2))
console.log(subtrair(2,4))


function somar(a, b){
    a = isNaN(a) ? a : 1
    b = isNaN(b) ? b : 1
}

