//Calculando a fórmula de Bhaskara para automatizar as coisas

function bhaskara(ax2, bx, c){
    delta = (bx ** 2) - (4*ax2*c)
    if (delta < 0){
        console.log("Delta é negativo")
    } 
    result1 = (-bx + Math.sqrt(delta)) / 2
    result2 = (-bx - Math.sqrt(delta)) / 2

    resultado  = [result1,result2]

    console.log(resultado)
}


bhaskara(1, -5, 6)