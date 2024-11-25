function area(base, altura){
    const area = base*altura
    if(area > 20){
        console.log(`Valor acima do permitido: ${area}m2.`)
    } else{
        return area
    }
}

console.log(area(2, 2))
console.log(area(2))// 2 * undefined = NaN
console.log(area())// undefined * undefined = NaN
console.log(area(2, 3, 4, 5))//pega os dois primeiros e ignora o resto
console.log(area(5,5))

